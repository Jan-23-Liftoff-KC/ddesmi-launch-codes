package com.ddesmi.dywaboh.controllers;


import com.ddesmi.dywaboh.models.Properties;
import com.ddesmi.dywaboh.models.Realtors;
import com.ddesmi.dywaboh.models.data.PropertiesRepository;
import com.ddesmi.dywaboh.models.data.RealtorsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/properties")
public class PropertyController {

    @Autowired
    PropertiesRepository propertiesRepository;

    @Autowired
    private RealtorsRepository realtorsRepository;

    @GetMapping("/all")
    public List<Properties> allProperties(){
        List<Properties> foundProperties = (List<Properties>) propertiesRepository.findAll();
        return foundProperties;
    }

    @PostMapping("/add")
    public Properties addProperty(@RequestBody Properties property){
        Properties newProperty = propertiesRepository.save(property);
        return newProperty;
    }

    @PutMapping("/update/{id}")
    public Properties updateProperty(@RequestBody Properties property,@PathVariable int id) {
        property.setId(id);
        propertiesRepository.save(property);
        return property;
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