package com.ddesmi.dywaboh.models;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.persistence.*;
import java.util.List;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;

@Entity
public class Realtors {

    //PROPERTIES
    @Id
    @GeneratedValue
    private int id;

    @NotBlank
    private String firstName;

    @NotBlank
    private String lastName;

    @NotBlank
    private String username;

    public String getPwHash() {
        return pwHash;
    }


    @NotBlank
    @Size(min=8, max=50, message="Password must be at least 8 characters long")
    @NotNull
    private String pwHash;

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    @NotBlank
    private String agency;

    @NotBlank
    private String mlsNumber;

    @NotBlank
    private String email;

    private String profileImagePath;

    //mapped  by field name in properties. properties will be many to one with join column defining field
    @OneToMany(mappedBy = "realtors")
    private List<Properties> properties = new ArrayList<>();

    //GETTERS AND SETTERS

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }


    public String getAgency() {
        return agency;
    }

    public void setAgency(String agency) {
        this.agency = agency;
    }

    public String getMlsNumber() {
        return mlsNumber;
    }

    public void setMlsNumber(String mlsNumber) {
        this.mlsNumber = mlsNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getProfileImagePath() {
        return profileImagePath;
    }

    public void setProfileImagePath(String profileImagePath) {
        this.profileImagePath = profileImagePath;
    }

    public List<Properties> getProperties() {
        return properties;
    }

    public void setProperties(List<Properties> properties) {
        this.properties = properties;
    }

    //CONSTRUCTORS
    public Realtors() {
    }

    //Password matching
    public boolean isMatchingPassword(String password) {
        return encoder.matches(password, pwHash);
    }

    public Realtors(ArrayList<Properties> properties) {
        this.properties = properties;
    }

    public Realtors(String username, String password) {
        this.username = username;
        this.pwHash = encoder.encode(password);
    }
}