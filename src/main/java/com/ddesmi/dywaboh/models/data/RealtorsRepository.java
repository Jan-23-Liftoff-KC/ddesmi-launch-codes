package com.ddesmi.dywaboh.models.data;

import com.ddesmi.dywaboh.models.Realtors;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import javax.transaction.Transactional;

@Repository
@Transactional
public interface RealtorsRepository extends CrudRepository<Realtors, Integer> {
}
