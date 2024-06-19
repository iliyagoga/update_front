create table competitions
(
    id          integer generated always as identity
        primary key,
    author      text not null,
    header      text not null,
    header_img  text not null,
    description text not null,
    link        text not null,
    pub_date    timestamp default now()
);

alter table competitions
    owner to lowfi;

create table themes
(
    name text not null
        primary key
);

alter table themes
    owner to lowfi;

create table competitions_themes
(
    id   integer not null
        constraint ct_competition_fk
            references competitions,
    name text    not null
        constraint ct_theme_fk
            references themes,
    constraint competitions_themes_pk
        primary key (id, name)
);

alter table competitions_themes
    owner to lowfi;

create table pretender
(
    competition integer not null
        constraint pretender_fk
            references competitions,
    login       text    not null,
    in_team     boolean default false,
    constraint pretender_pk
        primary key (competition, login)
);

alter table article_comment
    owner to lowfi;

create view competitions_w_theme(id, author, header, header_img, description, link, pub_date, theme) as
SELECT c.id,
       c.author,
       c.header,
       c.header_img,
       c.description,
       c.link,
       c.pub_date,
       ct.name AS theme
FROM competitions c
         JOIN competitions_themes ct ON c.id = ct.id;

alter table competitions_w_theme
    owner to lowfi;

create view competitions_w_themes(id, author, header, header_img, description, link, pub_date, themes) as
SELECT c.id,
       c.author,
       c.header,
       c.header_img,
       c.description,
       c.link,
       c.pub_date,
       array_agg(ct.name) AS themes
FROM competitions c
         JOIN competitions_themes ct ON c.id = ct.id
GROUP BY c.id, c.author, c.header, c.header_img, c.description, c.link, c.pub_date;

alter table competitions_w_themes
    owner to lowfi;

insert into themes
values
    ('web'),
    ('algorithms'),
    ('1c'),
    ('3d'),
    ('design'),
    ('vr'),
    ('sql'),
    ('ml');