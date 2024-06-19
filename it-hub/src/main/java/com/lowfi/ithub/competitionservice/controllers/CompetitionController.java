package com.lowfi.ithub.competitionservice.controllers;

import com.lowfi.ithub.competitionservice.models.Competition;
import com.lowfi.ithub.competitionservice.services.CompetitionService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/competition")
@AllArgsConstructor
public class CompetitionController {
    CompetitionService competitionService;
    @GetMapping("/{id}")
    ResponseEntity getById(@PathVariable int id){
        Competition com = competitionService.findById(id);
        if (com == null)
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        return ResponseEntity.ok(com);
    }
    @GetMapping("/all")
    ResponseEntity getAll(){
        return ResponseEntity.ok(competitionService.findAll());
    }
    @GetMapping("/allByUser/{login}")
    ResponseEntity getAllById(@PathVariable String login){
        var res = competitionService.findAllUserCompetitions(login);
        if (res.isEmpty())
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        return ResponseEntity.ok(res);
    }
    @GetMapping("/allUsers/{id}")
    ResponseEntity getAllUserNoTeam(@PathVariable int id){
        var res = competitionService.findAllUser(id);
        if (res.isEmpty())
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        return ResponseEntity.ok(res);
    }
}
