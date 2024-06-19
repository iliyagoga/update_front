create table if not exists users
(
    login    text not null
        primary key,
    password text
);

alter table users
    owner to lowfi;

create table if not exists roles
(
    name text not null
        primary key
);

alter table roles
    owner to lowfi;

create table if not exists user_roles
(
    login text not null
        constraint login_fk
            references users,
    role  text not null
        constraint role_fk
            references roles,
    constraint login_role_pk
        primary key (login, role)
);

alter table user_roles
    owner to lowfi;

create or replace view users_w_roles(login, role) as
SELECT ur.login,
       ur.role
FROM users
         JOIN user_roles ur ON users.login = ur.login
         JOIN roles r ON r.name = ur.role;

alter table users_w_roles
    owner to lowfi;

insert into users(login, password)
VALUES
    ('admin', 'admin'),
    ('student1', 'student'),
    ('student2', 'student'),
    ('student3', 'student'),
    ('teacher1', 'teacher'),
    ('teacher2', 'teacher')
on conflict (login)
do nothing;

insert into roles
values
    ('admin'),
    ('student'),
    ('teacher')
on conflict (name)
do nothing;

insert into user_roles
values
    ('admin', 'admin'),
    ('student1', 'student'),
    ('student2', 'student'),
    ('student3', 'student'),
    ('teacher1', 'teacher'),
    ('teacher2', 'teacher')
on conflict (login, role)
do nothing;