package com.ddesmi.dywaboh.models.data;

import com.ddesmi.dywaboh.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {

    User findByUsername(String username);

}

