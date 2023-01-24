package com.ddesmi.dywaboh.models.data;

import com.ddesmi.dywaboh.models.PriceHistory;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import javax.transaction.Transactional;

@Repository
@Transactional
public interface PriceHistoryRepository extends CrudRepository<PriceHistory, Integer> {
}