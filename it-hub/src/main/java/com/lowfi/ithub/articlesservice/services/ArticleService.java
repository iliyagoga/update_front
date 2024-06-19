package com.lowfi.ithub.articlesservice.services;

import com.lowfi.ithub.articlesservice.models.Article;
import com.lowfi.ithub.articlesservice.models.ArticleDao;
import com.lowfi.ithub.articlesservice.models.ArticleTheme;
import com.lowfi.ithub.articlesservice.repos.ArticleRepo;
import com.lowfi.ithub.articlesservice.repos.ArticleThemeRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ArticleService {
    ArticleRepo articleRepo;
    ArticleThemeRepo articleThemeRepo;

    public Article findById(int id){
        return articleRepo.findByIdWithThemes(id);
    }

    public List<Article> findAll(){
        return articleRepo.findAllWithThemes();
    }

    public int create(Article competition){
        var _new = new ArticleDao(competition);
        _new = articleRepo.save(_new);

        var themes = competition.getThemes();
        for (String t : themes){
            var _nt = new ArticleTheme(_new.getId(), t);
            articleThemeRepo.save(_nt);
        }
        return _new.getId();
    }

    public Article save(Article article){
        var _new = new ArticleDao(article);
        _new = articleRepo.save(_new);
        article.setId(_new.getId());
        article.setAuthor(_new.getAuthor());
        article.setHeader(_new.getHeader());
        article.setHeaderImg(_new.getHeaderImg());
        article.setDescription(_new.getDescription());
        article.setLink(_new.getLink());
        article.setPub_date(_new.getPub_date());
        return article;
    }
}
