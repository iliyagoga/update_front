package com.lowfi.ithub.simplesso.daos;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Table("users_auth_data")
@Data
public class UserDao {
    @Id
    private String login;
    private String password;
}
