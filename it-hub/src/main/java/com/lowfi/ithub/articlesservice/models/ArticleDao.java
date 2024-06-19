package com.lowfi.ithub.articlesservice.models;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.sql.Timestamp;

@Table("articles")
@Data
public class ArticleDao {

    public ArticleDao(Article article){
        this.id = article.getId();
        this.author = article.getAuthor();
        this.header = article.getHeader();
        this.headerImg = article.getHeaderImg();
        this.description = article.getDescription();
        this.link = article.getLink();
        this.pub_date = article.getPub_date();
    }

    @Id
    Integer id;
    String author;
    String header;
    String headerImg;
    String description;
    String link;
    Timestamp pub_date;
}
