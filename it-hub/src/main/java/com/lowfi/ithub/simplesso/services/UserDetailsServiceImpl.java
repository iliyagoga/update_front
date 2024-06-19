package com.lowfi.ithub.simplesso.services;

import com.lowfi.ithub.simplesso.daos.User;
import com.lowfi.ithub.simplesso.daos.UserDao;
import com.lowfi.ithub.simplesso.repos.UserAuthRepo;
import org.springframework.core.annotation.Order;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Order(1)
public class UserDetailsServiceImpl implements UserDetailsService{
    private UserAuthRepo repo;

    public UserDetailsServiceImpl(UserAuthRepo repo) {
        this.repo = repo;
        System.out.println("----------------------");
    }

    @Override
    public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {

        Optional<UserDao> user_dao;
        try {
            user_dao = repo.findById(login);
        }catch (Exception e){
            System.out.println(e.getMessage());
            throw e;
        }


        if(user_dao.isEmpty())
            throw new UsernameNotFoundException("user not found");
        return new User(user_dao.get().getLogin(), user_dao.get().getPassword(), repo.findUserRoles(login));
    }
}
