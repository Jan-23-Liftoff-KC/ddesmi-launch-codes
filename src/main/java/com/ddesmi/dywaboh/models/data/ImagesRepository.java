package com.ddesmi.dywaboh.models.data;

import com.ddesmi.dywaboh.models.Images;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import javax.transaction.Transactional;

@Repository
@Transactional
public interface ImagesRepository extends CrudRepository<Images, Integer> {
}