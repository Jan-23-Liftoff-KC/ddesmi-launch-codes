package com.ddesmi.dywaboh.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;

import com.ddesmi.dywaboh.models.Collection;
import com.ddesmi.dywaboh.models.data.CollectionRepository;

import java.util.List;

@RestController
@RequestMapping("/collection")
public class CollectionController {
    
    @Autowired
    CollectionRepository collectionRepository;

    @GetMapping("")
    public List<Collection> allCollections(){
        List<Collection> foundCollections = (List<Collection>) collectionRepository.findAll();
        return foundCollections;
    }
    
    @GetMapping("/{id}")
    public Collection getCollection(@PathVariable("id") Integer id){
        Collection foundCollection = collectionRepository.findById(id).get();
        return foundCollection;
    }

}
