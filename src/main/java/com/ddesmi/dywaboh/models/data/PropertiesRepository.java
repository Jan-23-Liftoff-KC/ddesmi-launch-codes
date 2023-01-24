package com.ddesmi.dywaboh.models.data;

import com.ddesmi.dywaboh.models.Properties;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import javax.transaction.Transactional;

@Repository
@Transactional
public interface PropertiesRepository extends CrudRepository<Properties, Integer> {
}
