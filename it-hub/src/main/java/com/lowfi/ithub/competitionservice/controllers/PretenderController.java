package com.lowfi.ithub.competitionservice.controllers;

import com.lowfi.ithub.competitionservice.models.Pretender;
import com.lowfi.ithub.competitionservice.services.PretenderService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/competition")
@AllArgsConstructor
public class PretenderController {
    PretenderService pretenderService;
    @PostMapping("/subToComp")
    ResponseEntity subToComp(@RequestParam Integer id, @RequestParam String login){
        Pretender pretender = pretenderService.insertPretender(id, login);
        if (pretender == null)
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        return ResponseEntity.ok(pretender);
    }
}
