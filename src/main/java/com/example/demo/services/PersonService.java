package com.example.demo.services;

import com.example.demo.model.Person;
import com.example.demo.repo.PersonRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PersonService {
    @Autowired
    PersonRepo repo;
    public void savePerson(Person person) {
        repo.save(person);
    }
    public List<Person> getAllPersons(){
        return new ArrayList<Person>(repo.findAll());
    }
    public Person findPersonByEmail(String email) {
        return repo.findByEmail(email);
    }
    public void deletePersonByEmail(Person person) {
        repo.delete(person);
    }
}
