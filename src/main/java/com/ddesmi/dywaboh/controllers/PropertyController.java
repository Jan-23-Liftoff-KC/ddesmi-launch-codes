package com.ddesmi.dywaboh.controllers;

import com.ddesmi.dywaboh.data.PropertyRepository;
import com.ddesmi.dywaboh.models.Property;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/property")
public class PropertyController {

    @Autowired
    PropertyRepository propertyRepository;

    @GetMapping("/all")
    public List<Property> allProperties(){
        List<Property> foundProperties = (List<Property>) propertyRepository.findAll();
        return foundProperties;
    }

    @PostMapping("/add")
    public Property addProperty(@RequestBody Property property){
        Property newProperty = propertyRepository.save(property);
        return newProperty;
    }
}
