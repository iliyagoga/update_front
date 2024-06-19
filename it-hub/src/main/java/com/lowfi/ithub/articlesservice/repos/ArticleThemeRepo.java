package com.lowfi.ithub.articlesservice.repos;

import com.lowfi.ithub.articlesservice.models.ArticleTheme;
import org.springframework.data.repository.CrudRepository;

public interface ArticleThemeRepo extends CrudRepository<ArticleTheme, Integer> {
}
