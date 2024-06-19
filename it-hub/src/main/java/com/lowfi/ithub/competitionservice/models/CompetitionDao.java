package com.lowfi.ithub.competitionservice.models;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.sql.Timestamp;

@Table("competitions")
@Data
public class CompetitionDao {

    public CompetitionDao(Competition competition){
        this.id = competition.getId();
        this.author = competition.getAuthor();
        this.header = competition.getHeader();
        this.headerImg = competition.getHeaderImg();
        this.description = competition.getDescription();
        this.link = competition.getLink();
        this.pub_date = competition.getPub_date();
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
