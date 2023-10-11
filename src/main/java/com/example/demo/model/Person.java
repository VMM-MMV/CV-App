package com.example.demo.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
@Table(name = "personal_info")
@SecondaryTable(name = "education_info", pkJoinColumns = @PrimaryKeyJoinColumn(name = "person_id"))
@SecondaryTable(name = "job_history", pkJoinColumns = @PrimaryKeyJoinColumn(name = "person_id"))

public class Person {
    public enum Sex {
        MALE, FEMALE
    }

    public enum Kids {
        YES, NO
    }
    public enum CivilStatus{
        Unmarried, Married, Divorced, Widowed
    }
    public enum LevelSkills{
        Beginner, Moderate, Skillful, Experienced, Expert
    }
    public enum LevelLanguage{
        A1, A2, B1, B2, C1, C2, nativeSpeaker, workingKnowledge
    }
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "person_id_seq")
    @SequenceGenerator(name = "person_id_seq", sequenceName = "person_id_seq", allocationSize = 1, initialValue = 1000)
    private long id;

    private String name;

    private String lastname;

    private LocalDate birthdate;

    private String city;
    @Enumerated(EnumType.STRING)
    private Sex sex;

    @Enumerated(EnumType.STRING)
    private Kids hasKids;

    @Column(unique = true)
    private String email;

    private String phoneNumber;

    private String countryCode;
    private String address;
    private String nationality;
    @Enumerated(EnumType.STRING)
    private CivilStatus civilStatus;
    @Column(table = "education_info")
    private String education;
    @Column(table = "education_info")
    private String school;
    @Column(table = "education_info")
    private String citySchool;
    @Column(table = "education_info")
    private LocalDate startDateStudy;
    @Column(table = "education_info")
    private LocalDate endDateStudy;
    private String titleJob;
    private String cityJob;
    private String employer;
    private LocalDate startDateJob;
    private LocalDate endDateJob;
    private String descriptionJob;
    private String skills;
    private LevelSkills levelSkills;
    private String language;
    private LevelLanguage levelLanguage;
    private String hobby;
    private String achievements;


}
