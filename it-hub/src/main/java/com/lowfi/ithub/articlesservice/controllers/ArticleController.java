package com.lowfi.ithub.articlesservice.controllers;

import com.lowfi.ithub.articlesservice.models.Article;
import com.lowfi.ithub.articlesservice.services.ArticleService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/articles")
@AllArgsConstructor
public class ArticleController {
    ArticleService articleService;
    @GetMapping("/{id}")
    ResponseEntity getById(@PathVariable int id){
        Article com = articleService.findById(id);
        if (com == null)
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        return ResponseEntity.ok(com);
    }
    @GetMapping("/all")
    ResponseEntity getAll(){
        return ResponseEntity.ok(articleService.findAll());
    }
}
