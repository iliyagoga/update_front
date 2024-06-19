package com.lowfi.ithub.competitionservice.repos;

import com.lowfi.ithub.competitionservice.models.Pretender;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

public interface PretenderRepo extends CrudRepository<Pretender, Integer> {

    @Modifying
    @Query("""
       insert into pretender
       values (:competition, :login, false)
       on conflict (competition, login)
       do nothing
       returning true as val;
    """)
    void insert(Integer competition, String login);
}
