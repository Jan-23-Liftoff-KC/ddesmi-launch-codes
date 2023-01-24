package com.ddesmi.dywaboh.models;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity
public class Images {

    //PROPERTIES
    @Id
    @GeneratedValue
    private int id;

    @NotBlank
    private String imageFilePath;

    @NotBlank
    private Date uploadDate;

    @ManyToOne(targetEntity = Properties.class)
    private int propertyID;

    //GETTERS AND SETTERS
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getImageFilePath() {
        return imageFilePath;
    }

    public void setImageFilePath(String imageFilePath) {
        this.imageFilePath = imageFilePath;
    }

    public Date getUploadDate() {
        return uploadDate;
    }

    public void setUploadDate(Date uploadDate) {
        this.uploadDate = uploadDate;
    }

    public int getPropertyID() {
        return propertyID;
    }

    public void setPropertyID(int propertyID) {
        this.propertyID = propertyID;
    }

    //CONSTRUCTORS
    public Images() {
    }

    public Images(int propertyID) {
        this.propertyID = propertyID;
    }

}