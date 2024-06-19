package com.lowfi.ithub.competitionservice.repos;

import com.lowfi.ithub.competitionservice.models.Competition;
import com.lowfi.ithub.competitionservice.models.CompetitionDao;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CompetitionRepo extends CrudRepository<CompetitionDao, Integer> {

    @Query("""
        select * from competitions_w_themes
        where id = :id
    """)
    Competition findByIdWithThemes(int id);

    @Query("""
        select * from competitions_w_themes
        order by pub_date desc
    """)
    List<Competition> findAllWithThemes();
    @Query("""
    select c.* from competitions c
    join pretender p on c.id = p.competition
    where login = :login;
            """)
    List<Competition> findAllUserCompetitions(String login);

    @Query("""
            select login from competitions c
                join pretender p on c.id = p.competition
                where c.id = :id""")
    List<String> findAllUser(Integer id);
}
