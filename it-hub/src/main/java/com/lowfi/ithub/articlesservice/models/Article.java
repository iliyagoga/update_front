package com.lowfi.ithub.articlesservice.models;

import lombok.Data;
import org.springframework.data.relational.core.mapping.Table;

import java.sql.Timestamp;
import java.util.List;

@Data
@Table("articles_w_themes")
public class Article{
    Integer id;
    String author;
    String header;
    String headerImg;
    String description;
    String link;
    Timestamp pub_date;
    List<String> themes;
}
