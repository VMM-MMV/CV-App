package com.example.demo.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
@Table(name = "person")
public class Person {
    public enum Sex {
        MALE, FEMALE
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
}
