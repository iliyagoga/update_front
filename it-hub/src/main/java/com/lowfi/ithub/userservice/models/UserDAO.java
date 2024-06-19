package com.lowfi.ithub.userservice.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Table("users")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDAO {
    @Id
    String login;
    String name;
    String surname;
    String status;
    String patronymic;
    String avatar;
    String email;
    String telegram;
    String git;
    String description;
}
