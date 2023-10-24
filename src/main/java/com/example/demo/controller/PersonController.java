package com.example.demo.controller;

import com.example.demo.model.Person;
import com.example.demo.repo.PersonRepo;
import com.example.demo.services.CV;
import com.example.demo.services.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PersonController {

    @Autowired
    PersonService repo;

    @PostMapping("/addPerson")
    public ResponseEntity<?> addPerson(@RequestBody Person person) {
        try {
            repo.generatedPDF(person, "C:\\Users\\Vasile\\Desktop\\"+ person.getEmail() +".pdf");
            repo.savePerson(person);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/displayPerson")
    public List<Person> getAllPersons(){
        return repo.getAllPersons();
    }

    @DeleteMapping("/deletePerson/{email}")
    public ResponseEntity<String> deletePerson(@PathVariable String email) {
        Person person = repo.findPersonByEmail(email);
        if (person == null) return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Person not found");
        repo.deletePersonByEmail(person);
        return ResponseEntity.ok("Person deleted successfully");
    }

    @PutMapping("/updatePerson/{email}")
    public ResponseEntity<String> updatePersonByEmail(@PathVariable String email, @RequestBody Person updatedPerson) {
        Person previousPerson = repo.findPersonByEmail(email);
        if (previousPerson == null) return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Person not found");
        repo.updatePerson(previousPerson, updatedPerson);
        return ResponseEntity.ok("Person updated successfully");
    }
}

