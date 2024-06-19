package com.lowfi.ithub.userservice.repos;

import com.lowfi.ithub.userservice.models.UserDAO;
import org.springframework.data.repository.CrudRepository;

public interface UserRepo extends CrudRepository<UserDAO, String> {
}

