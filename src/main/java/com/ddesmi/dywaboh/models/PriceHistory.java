package com.ddesmi.dywaboh.models;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity
public class PriceHistory {

    //PROPERTIES
    @Id
    @GeneratedValue
    private int id;

    @NotBlank
    private Float price;

    @NotBlank
    private Date changeDate;

    @ManyToOne(targetEntity = Properties.class)
    private int propertyID;

    //GETTERS AND SETTERS
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    public Date getChangeDate() {
        return changeDate;
    }

    public void setChangeDate(Date changeDate) {
        this.changeDate = changeDate;
    }

    public int getPropertyID() {
        return propertyID;
    }

    public void setPropertyID(int propertyID) {
        this.propertyID = propertyID;
    }

    //CONSTRUCTORS
    public PriceHistory() {
    }

    public PriceHistory(int propertyID) {
        this.propertyID = propertyID;
    }

}