package com.ddesmi.dywaboh.models;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.validation.constraints.NotBlank;

@Entity
public class Collection {
    
    //Properties
    @Id
    @GeneratedValue
    @Column(insertable = false, updatable = false)
    private int id;

    @NotBlank
    private String name;
    
    private String note;
    
    @ManyToMany
    private final List<Properties> listings= new ArrayList<>();
    
    private Date lastUpdate;

//Constructors

    public Collection() {
    } 

    public Collection(int id, @NotBlank String name, String note, Date lastUpdate) {
    this.id = id;
    this.name = name;
    this.note = note;
    this.lastUpdate = lastUpdate;
    }

//Getters and Setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public List<Properties> getListings() {
        return listings;
    }

    public Date getLastUpdate() {
        return lastUpdate;
    }

    public void setLastUpdate(Date lastUpdate) {
        this.lastUpdate = lastUpdate;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + id;
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Collection other = (Collection) obj;
        if (id != other.id)
            return false;
        return true;
    }  

//Methods  

}
