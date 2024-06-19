package com.lowfi.ithub;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;


@EnableWebSecurity
@EnableMethodSecurity
@SpringBootApplication
public class ItHubApplication {

    public static void main(String[] args) {
        SpringApplication.run(ItHubApplication.class, args);
    }

}
