package com.lowfi.ithub.qaservice.repos;

import com.lowfi.ithub.qaservice.models.Question;
import com.lowfi.ithub.qaservice.models.QuestionDao;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface QuestionRepo extends CrudRepository<QuestionDao, Integer> {

    @Query("""
        select * from questions_w_themes
        where id = :id
    """)
    Question findByIdWithThemes(int id);

    @Query("""
        select * from questions_w_themes
        order by pub_date desc
    """)
    List<Question> findAllWithThemes();
}
