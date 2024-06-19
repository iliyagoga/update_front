package com.lowfi.ithub.competitionservice.models;

import lombok.Data;
import org.springframework.data.relational.core.mapping.Table;

import java.sql.Timestamp;
import java.util.List;

@Data
@Table("competitions_w_themes")
public class Competition{
    Integer id;
    String author;
    String header;
    String headerImg;
    String description;
    String link;
    Timestamp pub_date;
    List<String> themes;
}
