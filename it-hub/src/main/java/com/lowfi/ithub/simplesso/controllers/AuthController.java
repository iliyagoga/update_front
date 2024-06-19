package com.lowfi.ithub.simplesso.controllers;

import com.lowfi.ithub.simplesso.services.UserDetailsServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/sso")
public class AuthController {
    @Autowired
    UserDetailsServiceImpl service;
    @GetMapping("/auth")
    public ResponseEntity auth(Authentication authentication){
        return ResponseEntity.ok(authentication.getPrincipal());
    }

    @PreAuthorize("hasAuthority('admin')")
    @GetMapping("/auth/{login}")
    public ResponseEntity auth(@PathVariable String login){
        try {
            return ResponseEntity.ok(service.loadUserByUsername(login));
        }
        catch (UsernameNotFoundException e){
            return new ResponseEntity<>(HttpStatusCode.valueOf(401));
        }
    }
}
