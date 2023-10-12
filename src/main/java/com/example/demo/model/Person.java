package com.example.demo.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
@Table(name = "personal_info")
@SecondaryTable(name = "education_info", pkJoinColumns = @PrimaryKeyJoinColumn(name = "person_id"))
@SecondaryTable(name = "job_history", pkJoinColumns = @PrimaryKeyJoinColumn(name = "person_id"))
@SecondaryTable(name = "skills_info", pkJoinColumns = @PrimaryKeyJoinColumn(name = "person_id"))
@SecondaryTable(name = "language_info", pkJoinColumns = @PrimaryKeyJoinColumn(name = "person_id"))
@SecondaryTable(name = "phone_number", pkJoinColumns = @PrimaryKeyJoinColumn(name = "person_id"))
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
    @Column(length = 25)
    private String name;
    @Column(length = 25)
    private String lastname;
    private LocalDate birthdate;
    @Column(length = 60)
    private String city;
    @Enumerated(EnumType.STRING)
    private Sex sex;

    @Enumerated(EnumType.STRING)
    private Kids hasKids;

    @Column(unique = true, length = 50)
    private String email;
    @Column(table = "phone_number", length = 5)
    private String countryCode;
    @Column(table = "phone_number", length = 15)
    private String phoneNumber;
    @Column(length = 60)
    private String address;
    @Column(length = 20)
    private String nationality;
    @Enumerated(EnumType.STRING)
    @Column(length = 12)
    private CivilStatus civilStatus;
    @Column(table = "education_info", length = 60)
    private String education;
    @Column(table = "education_info", length = 60)
    private String school;
    @Column(table = "education_info", length = 60)
    private String citySchool;
    @Column(table = "education_info")
    private LocalDate startDateStudy;
    @Column(table = "education_info")
    private LocalDate endDateStudy;
    @Column(table = "job_history", length = 30)
    private String titleJob;
    @Column(table = "job_history", length = 30)
    private String employer;
    @Column(table = "job_history", length = 60)
    private String cityJob;
    @Column(table = "job_history")
    private LocalDate startDateJob;
    @Column(table = "job_history")
    private LocalDate endDateJob;
    @Column(table = "job_history", columnDefinition = "text")
    private String descriptionJob;
    @Column(table = "skills_info", length = 50)
    private String skills;
    @Column(table = "skills_info", length = 50)
    private LevelSkills levelSkills;
    @Column(table = "language_info", length = 50)
    private String language;
    @Column(table = "language_info", length = 50)
    private LevelLanguage levelLanguage;
    private String hobby;
    private String achievements;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public LocalDate getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(LocalDate birthdate) {
        this.birthdate = birthdate;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Sex getSex() {
        return sex;
    }

    public void setSex(Sex sex) {
        this.sex = sex;
    }

    public Kids getHasKids() {
        return hasKids;
    }

    public void setHasKids(Kids hasKids) {
        this.hasKids = hasKids;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCountryCode() {
        return countryCode;
    }

    public void setCountryCode(String countryCode) {
        this.countryCode = countryCode;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public CivilStatus getCivilStatus() {
        return civilStatus;
    }

    public void setCivilStatus(CivilStatus civilStatus) {
        this.civilStatus = civilStatus;
    }

    public String getEducation() {
        return education;
    }

    public void setEducation(String education) {
        this.education = education;
    }

    public String getSchool() {
        return school;
    }

    public void setSchool(String school) {
        this.school = school;
    }

    public String getCitySchool() {
        return citySchool;
    }

    public void setCitySchool(String citySchool) {
        this.citySchool = citySchool;
    }

    public LocalDate getStartDateStudy() {
        return startDateStudy;
    }

    public void setStartDateStudy(LocalDate startDateStudy) {
        this.startDateStudy = startDateStudy;
    }

    public LocalDate getEndDateStudy() {
        return endDateStudy;
    }

    public void setEndDateStudy(LocalDate endDateStudy) {
        this.endDateStudy = endDateStudy;
    }

    public String getTitleJob() {
        return titleJob;
    }

    public void setTitleJob(String titleJob) {
        this.titleJob = titleJob;
    }

    public String getEmployer() {
        return employer;
    }

    public void setEmployer(String employer) {
        this.employer = employer;
    }

    public String getCityJob() {
        return cityJob;
    }

    public void setCityJob(String cityJob) {
        this.cityJob = cityJob;
    }

    public LocalDate getStartDateJob() {
        return startDateJob;
    }

    public void setStartDateJob(LocalDate startDateJob) {
        this.startDateJob = startDateJob;
    }

    public LocalDate getEndDateJob() {
        return endDateJob;
    }

    public void setEndDateJob(LocalDate endDateJob) {
        this.endDateJob = endDateJob;
    }

    public String getDescriptionJob() {
        return descriptionJob;
    }

    public void setDescriptionJob(String descriptionJob) {
        this.descriptionJob = descriptionJob;
    }

    public String getSkills() {
        return skills;
    }

    public void setSkills(String skills) {
        this.skills = skills;
    }

    public LevelSkills getLevelSkills() {
        return levelSkills;
    }

    public void setLevelSkills(LevelSkills levelSkills) {
        this.levelSkills = levelSkills;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public LevelLanguage getLevelLanguage() {
        return levelLanguage;
    }

    public void setLevelLanguage(LevelLanguage levelLanguage) {
        this.levelLanguage = levelLanguage;
    }

    public String getHobby() {
        return hobby;
    }

    public void setHobby(String hobby) {
        this.hobby = hobby;
    }

    public String getAchievements() {
        return achievements;
    }

    public void setAchievements(String achievements) {
        this.achievements = achievements;
    }
}
