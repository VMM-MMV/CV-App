package com.example.demo.services;

import com.example.demo.model.Person;
import com.example.demo.repo.PersonRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Field;
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
        return new ArrayList<>(repo.findAll());
    }

    public Person findPersonByEmail(String email) {
        return repo.findByEmail(email);
    }

    public void deletePersonByEmail(Person person) {
        repo.delete(person);
    }

    public void updatePerson(Person previousPerson, Person updatedPerson) {
        Long id = previousPerson.getId();
        if (updatedPerson != null) {
            Field[] fields = Person.class.getDeclaredFields();
            for (Field field : fields) {
                try {
                    field.setAccessible(true);
                    Object value = field.get(updatedPerson);
                    if (value != null) {
                        field.set(previousPerson, value);
                    }
                } catch (IllegalAccessException e) {
                    e.printStackTrace();
                }
            }
            previousPerson.setId(id);
            repo.save(previousPerson);
        }
    }
}
