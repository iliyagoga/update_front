package com.lowfi.ithub.qaservice.controllers;

import com.lowfi.ithub.qaservice.models.Question;
import com.lowfi.ithub.qaservice.services.QuestionService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/questions")
@AllArgsConstructor
public class QuestionController {
    QuestionService questionService;
    @GetMapping("/{id}")
    ResponseEntity getById(@PathVariable int id){
        Question com = questionService.findById(id);
        if (com == null)
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        return ResponseEntity.ok(com);
    }
    @GetMapping("/all")
    ResponseEntity getAll(){
        return ResponseEntity.ok(questionService.findAll());
    }
}
