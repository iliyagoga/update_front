package com.lowfi.ithub.competitionservice.services;

import com.lowfi.ithub.competitionservice.models.Pretender;
import com.lowfi.ithub.competitionservice.repos.PretenderRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class PretenderService {
    PretenderRepo pretenderRepo;
    public Pretender insertPretender(Integer id_competition, String login_user){
        var new_ = new Pretender();
        new_.setLogin(login_user);
        new_.setCompetition(id_competition);
        try {
            pretenderRepo.insert(new_.getCompetition(), new_.getLogin());
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
        return new_;
    }
}
