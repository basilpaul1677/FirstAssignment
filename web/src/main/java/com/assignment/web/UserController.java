package com.assignment.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(value="/api")
@CrossOrigin
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @GetMapping(value ="/")
    public List<User>GetUser(){
        return userRepository.findAll();
        
    }
    @GetMapping(value="/{id}")
    public User GetUser(@PathVariable String id){
        return userRepository.findById(id).orElse(null);
    }
    @PostMapping(value="/")
    public User postMethodName(@RequestBody User user){
        return userRepository.save(user);
    }
}
