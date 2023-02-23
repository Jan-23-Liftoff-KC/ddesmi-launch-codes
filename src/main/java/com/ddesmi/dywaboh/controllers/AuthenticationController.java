package com.ddesmi.dywaboh.controllers;

import com.ddesmi.dywaboh.models.Realtors;
import com.ddesmi.dywaboh.models.data.RealtorsRepository;
import com.ddesmi.dywaboh.models.dto.LoginDTO;
import com.ddesmi.dywaboh.models.dto.RegisterDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.util.Optional;

@Controller
public class AuthenticationController {

    @Autowired
    RealtorsRepository realtorsRepository;

    private static final String userSessionKey = "user";

    public Realtors getUserFromSession(HttpSession session) {
        Integer userId = (Integer) session.getAttribute(userSessionKey);
        if (userId == null) {
            return null;
        }

        Optional<Realtors> user = realtorsRepository.findById(userId);

        if (user.isEmpty()) {
            return null;
        }

        return user.get();
    }

    private static void setUserInSession(HttpSession session, Realtors realtors) {
        session.setAttribute(userSessionKey, realtors.getId());
    }

    @GetMapping("/register")
    public String displayRegistrationForm(Model model) {
        model.addAttribute(new RegisterDTO());
        model.addAttribute("title", "Register");
        return "register";
    }

    @PostMapping("/register")
    public String processRegistrationForm(@ModelAttribute @Valid RegisterDTO registerDTO,
                                          Errors errors, HttpServletRequest request,
                                          Model model) {

        if (errors.hasErrors()) {
            return "register";
        }

        Realtors existingRealtor = realtorsRepository.findByUsername(registerDTO.getUsername());

        if (existingRealtor != null) {
            errors.rejectValue("username", "username.alreadyexists", "A user with that username already exists");
            model.addAttribute("title", "Register");
            return "register";
        }

        String password = registerDTO.getPassword();
        String verifyPassword = registerDTO.getVerifyPassword();
        if (!password.equals(verifyPassword)) {
            errors.rejectValue("password", "passwords.mismatch", "Passwords do not match");
            model.addAttribute("title", "Register");
            return "register";
        }

        Realtors newRealtor = new Realtors(registerDTO.getUsername(), registerDTO.getPassword());
        realtorsRepository.save(newRealtor);
        setUserInSession(request.getSession(), newRealtor);

        return "redirect:";
    }

    @GetMapping("/login")
    public String displayLoginForm(Model model) {
        model.addAttribute(new LoginDTO());
        model.addAttribute("title", "Please Log in to see Cat Colonies");
        return "login";
    }

    @PostMapping("/login")
    public String processLoginForm(@ModelAttribute @Valid LoginDTO loginDTO,
                                   Errors errors, HttpServletRequest request,
                                   Model model) {

        if (errors.hasErrors()) {
            model.addAttribute("title", "Log In");
            return "login";
        }

        Realtors theRealtor = realtorsRepository.findByUsername(loginDTO.getUsername());

        if (theRealtor == null) {
            errors.rejectValue("username", "user.invalid", "The given username does not exist");
            model.addAttribute("title", "Log In");
            return "login";
        }

        String password = loginDTO.getPassword();

        if (!theRealtor.isMatchingPassword(password)) {
            errors.rejectValue("password", "password.invalid", "Invalid password");
            model.addAttribute("title", "Log In");
            return "login";
        }

        setUserInSession(request.getSession(), theRealtor);

        return "redirect:";
    }

    @GetMapping("/logout")
    public String logout(HttpServletRequest request){
        request.getSession().invalidate();
        return "redirect:/login";
    }

}

