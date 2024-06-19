package com.lowfi.ithub.qaservice.services;

import com.lowfi.ithub.qaservice.models.Question;
import com.lowfi.ithub.qaservice.models.QuestionDao;
import com.lowfi.ithub.qaservice.models.QuestionTheme;
import com.lowfi.ithub.qaservice.repos.QuestionRepo;
import com.lowfi.ithub.qaservice.repos.QuestionThemeRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class QuestionService {
    QuestionRepo questionRepo;
    QuestionThemeRepo questionThemeRepo;

    public Question findById(int id){
        return questionRepo.findByIdWithThemes(id);
    }

    public List<Question> findAll(){
        return questionRepo.findAllWithThemes();
    }

    public int create(Question question){
        var _new = new QuestionDao(question);
        _new = questionRepo.save(_new);

        var themes = question.getThemes();
        for (String t : themes){
            var _nt = new QuestionTheme(_new.getId(), t);
            questionThemeRepo.save(_nt);
        }
        return _new.getId();
    }

    public Question save(Question question){
        var _new = new QuestionDao(question);
        _new = questionRepo.save(_new);
        question.setId(_new.getId());
        question.setAuthor(_new.getAuthor());
        question.setHeader(_new.getHeader());
        question.setHeaderImg(_new.getHeaderImg());
        question.setDescription(_new.getDescription());
        question.setLink(_new.getLink());
        question.setPub_date(_new.getPub_date());
        return question;
    }
}
