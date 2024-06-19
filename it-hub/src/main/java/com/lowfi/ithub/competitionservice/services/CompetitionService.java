package com.lowfi.ithub.competitionservice.services;

import com.lowfi.ithub.competitionservice.models.Competition;
import com.lowfi.ithub.competitionservice.models.CompetitionDao;
import com.lowfi.ithub.competitionservice.models.CompetitionTheme;
import com.lowfi.ithub.competitionservice.repos.CompetitionRepo;
import com.lowfi.ithub.competitionservice.repos.CompetitionThemeRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CompetitionService {
    CompetitionRepo competitionRepo;
    CompetitionThemeRepo competitionThemeRepo;

    public Competition findById(int id){
        return competitionRepo.findByIdWithThemes(id);
    }

    public List<Competition> findAll(){
        return competitionRepo.findAllWithThemes();
    }
    public List<Competition> findAllUserCompetitions(String login){
        return competitionRepo.findAllUserCompetitions(login);
    };
    public List<String> findAllUser(Integer id){
        return competitionRepo.findAllUser(id);
    }

    public int create(Competition competition){
        var _new = new CompetitionDao(competition);
        _new = competitionRepo.save(_new);

        var themes = competition.getThemes();
        for (String t : themes){
            var _nt = new CompetitionTheme(_new.getId(), t);
            competitionThemeRepo.save(_nt);
        }
        return _new.getId();
    }

    public Competition save(Competition competition){
        var _new = new CompetitionDao(competition);
        _new = competitionRepo.save(_new);
        competition.setId(_new.getId());
        competition.setAuthor(_new.getAuthor());
        competition.setHeader(_new.getHeader());
        competition.setHeaderImg(_new.getHeaderImg());
        competition.setDescription(_new.getDescription());
        competition.setLink(_new.getLink());
        competition.setPub_date(_new.getPub_date());
        return competition;
    }


}
