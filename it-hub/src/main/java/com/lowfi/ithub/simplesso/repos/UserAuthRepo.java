package com.lowfi.ithub.simplesso.repos;

import com.lowfi.ithub.simplesso.daos.Role;
import com.lowfi.ithub.simplesso.daos.UserDao;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserAuthRepo extends CrudRepository<UserDao, String>{
    @Query("""
        select role as name from users_w_roles
        where login = :login
    """)
    List<Role> findUserRoles(String login);
}
