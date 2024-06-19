package com.lowfi.ithub.competitionservice.repos;

import com.lowfi.ithub.competitionservice.models.CompetitionTheme;
import org.springframework.data.repository.CrudRepository;

public interface CompetitionThemeRepo extends CrudRepository<CompetitionTheme, Integer> {
}
