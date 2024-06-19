package com.lowfi.ithub.userservice.controllers;

import com.lowfi.ithub.userservice.models.UserDAO;
import com.lowfi.ithub.userservice.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@AllArgsConstructor
public class UserController {
    UserService userService;
    @GetMapping("/{login}")
    ResponseEntity getById(@PathVariable String login){
        UserDAO com = userService.findByLogin(login);
        if (com == null)
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        return ResponseEntity.ok(com);
    }

    @GetMapping("/all")
    ResponseEntity getAll(){
        return ResponseEntity.ok(userService.findAll());
    }
    @GetMapping("/allbyids")
    ResponseEntity getAll(@RequestBody List<String> ids){
        return ResponseEntity.ok(userService.findAllById(ids));
    }
}
