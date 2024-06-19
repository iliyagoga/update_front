package com.lowfi.ithub.articlesservice.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.relational.core.mapping.Table;

@Table("articles_themes")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ArticleTheme {
    int id;
    String name;
}
