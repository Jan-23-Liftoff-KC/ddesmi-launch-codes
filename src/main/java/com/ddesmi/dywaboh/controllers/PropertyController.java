package com.ddesmi.dywaboh.controllers;


import com.ddesmi.dywaboh.models.Properties;
import com.ddesmi.dywaboh.models.data.PropertiesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/properties")
public class PropertyController {

    @Autowired
    PropertiesRepository propertiesRepository;

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
}
