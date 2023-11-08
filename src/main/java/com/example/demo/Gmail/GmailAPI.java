package com.example.demo.Gmail;

import com.google.api.client.auth.oauth2.Credential;
import com.google.api.client.extensions.java6.auth.oauth2.AuthorizationCodeInstalledApp;
import com.google.api.client.extensions.jetty.auth.oauth2.LocalServerReceiver;
import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeFlow;
import com.google.api.client.googleapis.auth.oauth2.GoogleClientSecrets;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.http.FileContent;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.client.util.store.FileDataStoreFactory;
import com.google.api.services.drive.Drive;
import com.google.api.services.drive.DriveScopes;
import com.google.api.services.drive.model.File;
import com.google.api.services.gmail.Gmail;
import com.google.api.services.gmail.model.ListMessagesResponse;
import com.google.api.services.gmail.model.Message;
import com.google.api.services.gmail.model.MessagePart;
import com.google.api.services.gmail.model.MessagePartBody;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.file.Paths;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.Set;

import static com.google.api.services.gmail.GmailScopes.GMAIL_READONLY;

public class GmailAPI {
    private final Gmail serviceGmail;
    private final Drive driveService;

    public GmailAPI() throws Exception {
        NetHttpTransport httpTransport = GoogleNetHttpTransport.newTrustedTransport();
        GsonFactory jsonFactory = GsonFactory.getDefaultInstance();

        serviceGmail = new Gmail.Builder(httpTransport, jsonFactory, getCredentials(httpTransport, jsonFactory))
                .setApplicationName("Test Gmail API")
                .build();
        driveService = new Drive.Builder(httpTransport, jsonFactory, getCredentials(httpTransport, jsonFactory))
                .setApplicationName("Test Google Drive API")
                .build();
    }
    private Credential getCredentials(final NetHttpTransport http_Transport, GsonFactory jsonFactory)
            throws IOException {

        GoogleClientSecrets clientSecrets = GoogleClientSecrets.load(jsonFactory, new InputStreamReader(Objects.requireNonNull(GmailAPI.class.getResourceAsStream("/credentials.json"))));
        GoogleAuthorizationCodeFlow flow = new GoogleAuthorizationCodeFlow.Builder(
                http_Transport, jsonFactory, clientSecrets, Set.of(GMAIL_READONLY, DriveScopes.DRIVE_FILE))
                .setDataStoreFactory(new FileDataStoreFactory(Paths.get("tokens").toFile()))
                .setAccessType("offline")
                .build();

        LocalServerReceiver receiver = new LocalServerReceiver.Builder().setPort(8888).build();

        return new AuthorizationCodeInstalledApp(flow, receiver).authorize("user");
    }
    public void listMessagesWithAttachments() {
        try {
            ListMessagesResponse response = serviceGmail.users().messages().list("me")
                    .setMaxResults(10L)
                    .execute();

            List<Message> messages = response.getMessages();

            for (Message message : messages) {
                String messageId = message.getId();
                Message messageWithAttachments = serviceGmail.users().messages().get("me", messageId)
                        .setFormat("full")
                        .execute();

                MessagePart payload = messageWithAttachments.getPayload();
                if (payload != null) {
                    List<MessagePart> parts = payload.getParts();
                    if (parts != null) {
                        for (MessagePart part : parts) {
                            String filename = part.getFilename();
                            if (filename != null && filename.endsWith(".pdf")) {
                                String attId = part.getBody().getAttachmentId();
                                uploadResumeToDrive(messageId, attId, null, filename);
                            }
                        }
                    }
                }
            }
            System.out.println("CVs have been uploaded to the drive.");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void uploadResumeToDrive(String messageId, String attachmentId, String folderId, String filename) {
        try {
            MessagePartBody attachment = serviceGmail.users().messages().attachments().get("me", messageId, attachmentId).execute();

            byte[] fileByteArray = attachment.decodeData();
            FileOutputStream fos = new FileOutputStream(filename);
            fos.write(fileByteArray);
            fos.close();

            File fileMetadata = new File();
            fileMetadata.setName(filename);
            if (folderId != null) {
                fileMetadata.setParents(Collections.singletonList(folderId));
            }

            java.io.File tempFile = new java.io.File(filename);
            FileContent mediaContent = new FileContent("application/pdf", tempFile);

            driveService.files().create(fileMetadata, mediaContent)
                    .setFields("id")
                    .execute();

            tempFile.delete();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    public static void main(String[] args) throws Exception {
            new GmailAPI().listMessagesWithAttachments( );
    }

}
