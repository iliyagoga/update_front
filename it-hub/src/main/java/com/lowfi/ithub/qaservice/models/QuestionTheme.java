package com.lowfi.ithub.qaservice.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.relational.core.mapping.Table;

@Table("question_themes")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class QuestionTheme {
    int id;
    String name;
}
