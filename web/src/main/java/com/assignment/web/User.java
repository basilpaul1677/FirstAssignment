package com.assignment.web;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    private String name;
    private Date dob;
    private String Clas;
    private String division;
    private String gender;
}
