package com.ddesmi.dywaboh.models;

import javax.persistence.*;
import javax.validation.Valid;
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

    @ManyToOne
    @JoinColumn(name="properties_id")
    private Properties properties;


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


    //CONSTRUCTORS
    public PriceHistory() {
    }

}