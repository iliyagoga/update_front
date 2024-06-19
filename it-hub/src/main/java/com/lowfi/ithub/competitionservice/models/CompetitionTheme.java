package com.lowfi.ithub.competitionservice.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.relational.core.mapping.Table;

@Table("competitions_themes")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CompetitionTheme {
    int id;
    String name;
}
