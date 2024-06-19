package com.lowfi.ithub.qaservice.models;

import lombok.Data;
import org.springframework.data.relational.core.mapping.Table;

import java.sql.Timestamp;
import java.util.List;

@Data
@Table("questions_w_themes")
public class Question{
    Integer id;
    String author;
    String header;
    String headerImg;
    String description;
    String link;
    Timestamp pub_date;
    List<String> themes;
}
