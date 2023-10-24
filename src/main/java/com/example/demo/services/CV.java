package com.example.demo.services;

import com.example.demo.model.Person;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.kernel.pdf.PdfDocument;
import org.springframework.stereotype.Service;

import java.io.FileNotFoundException;
import org.jsoup.Jsoup;

@Service
public class CV {
    public void generatePDF(Person person, String outputPath) throws FileNotFoundException {
        PdfWriter writer = new PdfWriter(outputPath);
        PdfDocument pdf = new PdfDocument(writer);
        Document document = new Document(pdf);

        document.add(new Paragraph("First Name: "+person.getName() + " " + "Lats Name: " +person.getLastname()));
        document.add(new Paragraph("Date of Birth: " + person.getBirthdate()));
        document.add(new Paragraph("Address: " + person.getAddress() + ", " + person.getCity()));
        document.add(new Paragraph("Email: " + person.getEmail()));
        document.add(new Paragraph("Phone: " + person.getPhoneNumber()));
        document.add(new Paragraph("Nationality: " + person.getNationality()));
        document.add(new Paragraph("Civil Status: " + person.getCivilStatus()));
        document.add(new Paragraph("Sex: " + person.getSex()));
        document.add(new Paragraph("Has Kids: " + person.getHasKids()));

        document.add(new Paragraph("\nEDUCATION"));
        document.add(new Paragraph(person.getEducation() + " from " + person.getSchool()
                + ", " + person.getCitySchool()
                + " (" + person.getStartDateStudy()
                + " to " + person.getEndDateStudy() + ")"));

        document.add(new Paragraph("\nWORK EXPERIENCE"));
        document.add(new Paragraph(person.getTitleJob() + " at " + person.getEmployer()
                + ", " + person.getCityJob()
                + " (" + person.getStartDateJob()
                + " to " + person.getEndDateJob() + ")"));

        org.jsoup.nodes.Document descriptionDoc = Jsoup.parse(person.getDescriptionJob());

        document.add(new Paragraph("Description Job: " + descriptionDoc.text()));

        document.add(new Paragraph("\nSKILLS"));
        document.add(new Paragraph(person.getSkills() + " (" + person.getLevelSkills() + ")"));

        document.add(new Paragraph("\nLANGUAGES"));
        document.add(new Paragraph(person.getLanguage() + " (" + person.getLevelLanguage() + ")"));

        document.add(new Paragraph("\nHOBBIES"));
        document.add(new Paragraph(person.getHobby()));

        org.jsoup.nodes.Document achievementsDoc = Jsoup.parse(person.getAchievements());

        document.add(new Paragraph("\nACHIEVEMENTS"));
        document.add(new Paragraph(achievementsDoc.text()));

        document.close();
    }
}