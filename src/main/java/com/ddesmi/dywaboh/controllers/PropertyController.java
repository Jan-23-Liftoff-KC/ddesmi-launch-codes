package com.ddesmi.dywaboh.controllers;


import com.ddesmi.dywaboh.models.Properties;
import com.ddesmi.dywaboh.models.User;
import com.ddesmi.dywaboh.models.data.ImagesRepository;
import com.ddesmi.dywaboh.models.data.PropertiesRepository;
import com.ddesmi.dywaboh.models.data.RealtorsRepository;
import org.hibernate.sql.Delete;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/properties")
public class PropertyController {

    @Autowired
    PropertiesRepository propertiesRepository;

    @Autowired
    private RealtorsRepository realtorsRepository;
    @Autowired
    private ImagesRepository imagesRepository;

    @GetMapping("/all")
    public ResponseEntity<List<Properties>> allProperties() {
        List<Properties> foundProperties = (List<Properties>) propertiesRepository.findAll();
        return new ResponseEntity<>(foundProperties, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Properties> getProperty(@PathVariable("id") Integer id) {
        Properties foundProperty = propertiesRepository.findById(id).get();
        return new ResponseEntity<>(foundProperty, HttpStatus.OK);
    }


    @PostMapping("/add")
    public ResponseEntity<Properties> addProperty(@RequestBody Properties property) {
        Properties newProperty = propertiesRepository.save(property);
        return new ResponseEntity<>(newProperty, HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Optional<Properties>> updateProperty(@RequestBody Properties property, @PathVariable int id) {
        Optional<Properties> updatedProperty = propertiesRepository.findById(id).map(listing -> {
            listing.setAddress(property.getAddress());
            listing.setCity(property.getCity());
            listing.setState(property.getState());
            listing.setZip(property.getZip());
            listing.setPrice(property.getPrice());
            listing.setBathrooms(property.getBathrooms());
            listing.setBedrooms(property.getBedrooms());
            listing.setCentralHeating(property.getCentralHeating());
            listing.setCentralCooling(property.getCentralCooling());
            listing.setGarage(property.getGarage());
            listing.setSquareFootage(property.getSquareFootage());
            listing.setListingDate(property.getListingDate());
            listing.setStatus(property.getStatus());
            listing.setSchoolArea(property.getSchoolArea());
            return propertiesRepository.save(listing);
        });
        return new ResponseEntity<>(updatedProperty,HttpStatus.OK);
    }

    @RequestMapping(value = "delete/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Properties> deleteProperty(@PathVariable int id) {
        propertiesRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}