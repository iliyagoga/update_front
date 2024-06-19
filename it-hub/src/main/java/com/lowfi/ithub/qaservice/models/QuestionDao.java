package com.lowfi.ithub.qaservice.models;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.sql.Timestamp;

@Table("question")
@Data
public class QuestionDao {

    public QuestionDao(Question question){
        this.id = question.getId();
        this.author = question.getAuthor();
        this.header = question.getHeader();
        this.headerImg = question.getHeaderImg();
        this.description = question.getDescription();
        this.link = question.getLink();
        this.pub_date = question.getPub_date();
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
