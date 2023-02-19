package com.ddesmi.dywaboh.models;

import javax.persistence.*;
import java.util.List;
import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.Date;

@Entity
public class Properties {

    //PROPERTIES

    @Id
    @GeneratedValue
    @Column(insertable = false, updatable = false)
    private int id;

    @NotBlank
    private String address;

    @NotBlank
    private String city;

    @NotBlank
    private String state;

    @NotNull
    private int zip;

    @NotNull
    private Float price;

    @NotNull
    private Float bathrooms;

    @NotNull
    private Float bedrooms;

    @NotNull
    private Boolean centralHeating;

    @NotNull
    private Boolean centralCooling;

    @NotNull
    private Boolean garage;

    @NotNull
    private int squareFootage;

    @NotNull
    private Date listingDate;

    @NotBlank
    private String status;

    @NotBlank
    private String schoolArea;

    @OneToMany(mappedBy = "properties")
    private List<Images> images = new ArrayList<>();

    @OneToMany(mappedBy = "properties")
    private List<PriceHistory> prices = new ArrayList<>();

    @ManyToOne
    private Realtors realtors;

//GETTERS AND SETTERS

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public int getZip() {
        return zip;
    }

    public void setZip(int zip) {
        this.zip = zip;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    public Float getBathrooms() {
        return bathrooms;
    }

    public void setBathrooms(Float bathrooms) {
        this.bathrooms = bathrooms;
    }

    public Float getBedrooms() {
        return bedrooms;
    }

    public void setBedrooms(Float bedrooms) {
        this.bedrooms = bedrooms;
    }

    public Boolean getCentralHeating() {
        return centralHeating;
    }

    public void setCentralHeating(Boolean centralHeating) {
        this.centralHeating = centralHeating;
    }

    public Boolean getCentralCooling() {
        return centralCooling;
    }

    public void setCentralCooling(Boolean centralCooling) {
        this.centralCooling = centralCooling;
    }

    public Boolean getGarage() {
        return garage;
    }

    public void setGarage(Boolean garage) {
        this.garage = garage;
    }

    public int getSquareFootage() {
        return squareFootage;
    }

    public void setSquareFootage(int squareFootage) {
        this.squareFootage = squareFootage;
    }

    public Date getListingDate() {
        return listingDate;
    }

    public void setListingDate(Date listingDate) {
        this.listingDate = listingDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getSchoolArea() {
        return schoolArea;
    }

    public void setSchoolArea(String schoolArea) {
        this.schoolArea = schoolArea;
    }

    public List<Images> getImages() {
        return images;
    }

    public void setImages(List<Images> images) {
        this.images = images;
    }

    public List<PriceHistory> getPrices() {
        return prices;
    }

    public void setPrices(List<PriceHistory> prices) {
        this.prices = prices;
    }

//    public Realtors getRealtors() {
//        return realtors;
//    }
//
//    public void setRealtors(Realtors realtors) {
//        this.realtors = realtors;
//    }



    //CONSTRUCTORS
    public Properties() {
    }

    public Properties(ArrayList<Images> images, ArrayList<PriceHistory> prices) {
        this.images = images;
        this.prices = prices;
    }
}