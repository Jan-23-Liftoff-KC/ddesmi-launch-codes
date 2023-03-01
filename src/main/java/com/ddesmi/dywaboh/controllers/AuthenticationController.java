package com.ddesmi.dywaboh.controllers;
import com.ddesmi.dywaboh.models.Properties;
import com.ddesmi.dywaboh.models.User;
import com.ddesmi.dywaboh.models.data.PropertiesRepository;
import com.ddesmi.dywaboh.models.data.UserRepository;
import com.ddesmi.dywaboh.models.dto.LoginDTO;
import com.ddesmi.dywaboh.models.dto.RegisterDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/user")
public class AuthenticationController {

    @Autowired
    UserRepository userRepository;
    @Autowired
    PropertiesRepository propertiesRepository;

    private static final String userSessionKey = "user";

    public User getUserFromSession(HttpSession session) {
        Integer userId = (Integer) session.getAttribute(userSessionKey);
        if (userId == null) {
            return null;
        }

        Optional<User> user = userRepository.findById(userId);

        if (user.isEmpty()) {
            return null;
        }

        return user.get();
    }

    private static void setUserInSession(HttpSession session, User user) {
        session.setAttribute(userSessionKey, user.getId());
    }


    @RequestMapping(value="/register", method= {RequestMethod.POST} )
    public ResponseEntity<User> processRegistrationForm(@RequestBody RegisterDTO registerDTO,
                                                        Errors errors, HttpServletRequest request) {

        if (errors.hasErrors()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        User existingUser = userRepository.findByUsername(registerDTO.getUsername());

        if (existingUser != null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        String password = registerDTO.getPassword();
        String verifyPassword = registerDTO.getVerifyPassword();
        if (!password.equals(verifyPassword)) {
            errors.rejectValue("password", "passwords.mismatch", "Passwords do not match");
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        User newUser = new User(registerDTO.getUsername(), registerDTO.getPassword());
        userRepository.save(newUser);
        setUserInSession(request.getSession(), newUser);

        return new ResponseEntity<>(newUser,HttpStatus.OK);
    }


    @RequestMapping(value="/login", method= {RequestMethod.POST} )
    public ResponseEntity<User>  processLoginForm(@RequestBody LoginDTO loginDTO,
                                   Errors errors, HttpServletRequest request) {

        if (errors.hasErrors()) {
           return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        User theUser = userRepository.findByUsername(loginDTO.getUsername());

        if (theUser == null) {
            errors.rejectValue("username", "user.invalid", "The given username does not exist");
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        String password = loginDTO.getPassword();

        if (!theUser.isMatchingPassword(password)) {
            errors.rejectValue("password", "password.invalid", "Invalid password");
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        setUserInSession(request.getSession(), theUser);

        return new ResponseEntity<>(theUser,HttpStatus.OK);
    }

    @RequestMapping(value="/{id}", method= {RequestMethod.GET} )
    public ResponseEntity<User> getUser(@PathVariable int id){
        User foundUser = userRepository.findById(id).get();
        return new ResponseEntity<>(foundUser, HttpStatus.OK);
    }

    @GetMapping("/logout")
    public ResponseEntity<?> logout(HttpServletRequest request){
        request.getSession().invalidate();
        return new ResponseEntity<>(HttpStatus.OK);
    }

}

