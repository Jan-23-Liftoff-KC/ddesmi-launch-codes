package com.ddesmi.dywaboh.controllers;


import com.ddesmi.dywaboh.models.Properties;
import com.ddesmi.dywaboh.models.data.ImagesRepository;
import com.ddesmi.dywaboh.models.data.PropertiesRepository;
import com.ddesmi.dywaboh.models.data.RealtorsRepository;
import org.hibernate.sql.Delete;
import org.springframework.beans.factory.annotation.Autowired;
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
    public List<Properties> allProperties(){
        List<Properties> foundProperties = (List<Properties>) propertiesRepository.findAll();
        return foundProperties;
    }

    @GetMapping("/{id}")
    public Properties getProperty(@PathVariable("id") Integer id){
        Properties foundProperty = propertiesRepository.findById(id).get();
        return foundProperty;
    }


    @PostMapping("/add")
    public Properties addProperty(@RequestBody Properties property){
        Properties newProperty = propertiesRepository.save(property);
        return newProperty;
    }

    @PutMapping("/update/{id}")
    public Optional<Properties> updateProperty(@RequestBody Properties property, @PathVariable int id) {
        return propertiesRepository.findById(id).map(listing ->{
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

    }

    @RequestMapping(value="delete/{id}", method=RequestMethod.DELETE)
    public void deleteProperty(@PathVariable int id){
        propertiesRepository.deleteById(id);
    }


// Added a realtor controller for testing
//    @PostMapping("/addr")
//    public Realtors addRealtors(@RequestBody Realtors realtors){
//        Realtors newRealtors = realtorsRepository.save(realtors);
//        return newRealtors;
//    }
//
// returning multiple objects from repositories as an array of objects
//    @GetMapping("/all")
//    public List<Object> allProperties(){
//        List<Object> objList = new ArrayList<>();
//        List<Properties> foundProperties = (List<Properties>) propertiesRepository.findAll();
//        List<Realtors> foundRealtors = (List<Realtors>) realtorsRepository.findAll();
//        objList.add(foundProperties);
//        objList.add(foundRealtors);
//        return objList;
//    }
}