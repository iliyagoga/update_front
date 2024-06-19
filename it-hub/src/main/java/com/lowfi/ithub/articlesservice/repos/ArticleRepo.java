package com.lowfi.ithub.articlesservice.repos;

import com.lowfi.ithub.articlesservice.models.Article;
import com.lowfi.ithub.articlesservice.models.ArticleDao;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ArticleRepo extends CrudRepository<ArticleDao, Integer> {

    @Query("""
        select * from articles_w_themes
        where id = :id
    """)
    Article findByIdWithThemes(int id);

    @Query("""
        select * from articles_w_themes
        order by pub_date desc
    """)
    List<Article> findAllWithThemes();
}
