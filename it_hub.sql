create table if not exists users_auth_data
(
    login    text not null
        primary key,
    password text
);


create table if not exists roles
(
    name text not null
        primary key
);


create table if not exists user_roles
(
    login text not null
        constraint login_fk
            references users_auth_data,
    role  text not null
        constraint role_fk
            references roles,
    constraint login_role_pk
        primary key (login, role)
);


create or replace view users_w_roles(login, role) as
SELECT ur.login,
       ur.role
FROM users_auth_data
         JOIN user_roles ur ON users_auth_data.login = ur.login
         JOIN roles r ON r.name = ur.role;


insert into users_auth_data(login, password)
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

--SSO

create table users
(
    login       text not null
        primary key,
    name        text not null,
    surname     text not null,
    status      text not null,
    patronymic  text,
    avatar      text,
    email       text,
    telegram    text,
    git         text,
    description text
);

insert into users
values
    ('teacher1', 'Александер', 'Ермаков', 'teacher', 'Вадимович',
     'https://www.sstu.ru/upload/resize_cache/iblock/5d1/255_310_2/Ermakov_AV_450.jpg',
     'ermakov@mail.ru', '@TheGod', null, 'Метааннотации это аннотации для аннотирования аннотаций'),
    ('teacher2', 'Артем', 'Акутин', 'teacher', 'Сергеевич',
     'https://avatars.githubusercontent.com/u/22376677?v=4',
     'artemze985@gmail.com', '@jho00', 'https://github.com/Jho00',
     'Software Architect & Engineer at Fintech | Senior Teacher at Saratov State Technical University'),
    ('student1', 'Данила', 'Федин', 'student', 'Алексеевич',
     'https://avatars.dzeninfra.ru/get-zen-vh/6269254/2a00000181758c3b585bb3b81dccc29c4b6a/orig',
     'danik6052@gmail.com', '@danilaFedin', 'https://github.com/FadeIn64',
     'Привет! Меня зовут Данила, и я студент ИнПИТ. Я увлечен технологиями и информатикой. Мне интересно создавать программное обеспечение, веб-сайты, анализировать данные и заниматься кибербезопасностью. У меня есть навыки программирования на различных языках, таких как Java, Python, C++ и других. Я также изучаю современные технологии облачных вычислений, машинного обучения и искусственного интеллекта. В свободное время я часто участвую в хакатонах, конференциях и мастер-классах, чтобы расширить свои знания и навыки в области информационных технологий.'),
    ('student2', 'Илья', 'Хрулев', 'student', null,
     'https://avatars.dzeninfra.ru/get-zen-vh/6269254/2a00000181758c3b585bb3b81dccc29c4b6a/orig',
     'cripa4321@yandex.ru', '@BonyRosp', 'https://github.com/iliyagoga',
     'Привет! Меня зовут Илья, и я студент ИнПИТ. Я увлечен технологиями и информатикой. Мне интересно создавать программное обеспечение, веб-сайты, анализировать данные и заниматься кибербезопасностью. У меня есть навыки программирования на различных языках, таких как Java, Python, C++ и других. Я также изучаю современные технологии облачных вычислений, машинного обучения и искусственного интеллекта. В свободное время я часто участвую в хакатонах, конференциях и мастер-классах, чтобы расширить свои знания и навыки в области информационных технологий.'),
    ('student3', 'Настя', 'Романова', 'student', null,
     'https://cdn.shopify.com/s/files/1/0094/9367/6095/files/lofi-girl_6720220713114631INZQSz.jpg?v=1660411147',
     'romanovaa25@yandex.ru', '@owlucky_cute', 'https://github.com/owlucky',
     'Привет! Меня зовут Настя, и я студентка ИнПИТ. Я увлечена технологиями и информатикой. Мне интересно создавать программное обеспечение, веб-сайты, анализировать данные и заниматься кибербезопасностью. У меня есть навыки программирования на различных языках, таких как Java, Python, C++ и других. Я также изучаю современные технологии облачных вычислений, машинного обучения и искусственного интеллекта. В свободное время я часто участвую в хакатонах, конференциях и мастер-классах, чтобы расширить свои знания и навыки в области информационных технологий.'),
    ('admin', 'admin', 'admin', 'admin', 'admin', null, null, null, null, null)
on conflict (login)
do nothing;

--USERS

create table themes
(
    name text not null
        primary key
);

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

--THEMES

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

insert into competitions(author, header, header_img, description, link)
values
    ('student3', 'Хакатон 1',
     'https://coinmania.com/wp-content/uploads/2018/06/https_2F2Fcdn.evbuc_.com2Fimages2F280944722F1996221636542F12Foriginal.png',
     'Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон',
     'http://localhost:8080'),
    ('student3', 'Хакатон 2',
     'https://coinmania.com/wp-content/uploads/2018/06/https_2F2Fcdn.evbuc_.com2Fimages2F280944722F1996221636542F12Foriginal.png',
     'Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон',
     'http://localhost:8080'),
    ('student3', 'Хакатон 3',
     'https://coinmania.com/wp-content/uploads/2018/06/https_2F2Fcdn.evbuc_.com2Fimages2F280944722F1996221636542F12Foriginal.png',
     'Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон Хакатон',
     'http://localhost:8080')
on conflict do nothing;

insert into competitions_themes
values
    (1, 'web'),
    (1, 'algorithms'),
    (2, 'web'),
    (2, 'sql'),
    (3, 'ml'),
    (3, 'vr')
on conflict do nothing;


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

--COMPETITIONS

create table articles
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

create table articles_themes
(
    id   integer not null
        constraint ct_competition_fk
            references articles,
    name text    not null
        constraint ct_theme_fk
            references themes,
    constraint articles_themes_pk
        primary key (id, name)
);

insert into articles(author, header, header_img, description, link)
values
    ('teacher2', 'Docker 1',
     'https://i.ytimg.com/vi/42ib5Lx6CGU/maxresdefault.jpg',
     'Что такое Docker?
Docker - это набор продуктов платформы как сервиса (PaaS), которые используют виртуализацию на уровне операционной системы для доставки программного обеспечения в контейнерах. Сервис имеет как бесплатные, так и платные тарифы. Программное обеспечение, которое хостит контейнеры, называется Docker Engine. Оно было впервые выпущено в 2013 году и разрабатывается...
Как работает Docker?
Docker использует концепцию контейнеризации, которая позволяет упаковывать приложения и их зависимости в контейнеры. Контейнеры являются изолированными и легковесными, что позволяет запускать приложения в различных средах без необходимости установки дополнительных зависимостей. Docker использует операционную систему хоста для виртуализации и управления контейнерами.
Как использовать Docker?
Для использования Docker вам потребуется установить Docker Engine на свою систему. Затем вы можете создавать и запускать контейнеры с помощью команд Docker CLI. Вы можете создавать собственные образы контейнеров, используя Dockerfile, который содержит инструкции для создания образа. Кроме того, Docker предоставляет возможность использовать Docker Compose для управления множеством контейнеров и создания комплексных приложений
.
Преимущества Docker
Docker предлагает ряд преимуществ, включая:
Изолированность: Контейнеры обеспечивают изоляцию приложений, что позволяет им работать независимо друг от друга и предотвращает конфликты между зависимостями.
Портативность: Контейнеры могут быть запущены на различных операционных системах и инфраструктуре, что обеспечивает портативность приложений.
Масштабируемость: Docker обеспечивает возможность горизонтального масштабирования приложений путем запуска нескольких контейнеров одного и того же образа.
Удобство развертывания: Docker упрощает процесс развертывания приложений, так как все зависимости уже находятся в контейнере и не требуют установки на хостовую систему.',
     'http://localhost:8080'),
    ('teacher2', 'Docker 2',
     'https://i.ytimg.com/vi/42ib5Lx6CGU/maxresdefault.jpg',
     'Что такое Docker?
Docker - это набор продуктов платформы как сервиса (PaaS), которые используют виртуализацию на уровне операционной системы для доставки программного обеспечения в контейнерах. Сервис имеет как бесплатные, так и платные тарифы. Программное обеспечение, которое хостит контейнеры, называется Docker Engine. Оно было впервые выпущено в 2013 году и разрабатывается...
Как работает Docker?
Docker использует концепцию контейнеризации, которая позволяет упаковывать приложения и их зависимости в контейнеры. Контейнеры являются изолированными и легковесными, что позволяет запускать приложения в различных средах без необходимости установки дополнительных зависимостей. Docker использует операционную систему хоста для виртуализации и управления контейнерами.
Как использовать Docker?
Для использования Docker вам потребуется установить Docker Engine на свою систему. Затем вы можете создавать и запускать контейнеры с помощью команд Docker CLI. Вы можете создавать собственные образы контейнеров, используя Dockerfile, который содержит инструкции для создания образа. Кроме того, Docker предоставляет возможность использовать Docker Compose для управления множеством контейнеров и создания комплексных приложений
.
Преимущества Docker
Docker предлагает ряд преимуществ, включая:
Изолированность: Контейнеры обеспечивают изоляцию приложений, что позволяет им работать независимо друг от друга и предотвращает конфликты между зависимостями.
Портативность: Контейнеры могут быть запущены на различных операционных системах и инфраструктуре, что обеспечивает портативность приложений.
Масштабируемость: Docker обеспечивает возможность горизонтального масштабирования приложений путем запуска нескольких контейнеров одного и того же образа.
Удобство развертывания: Docker упрощает процесс развертывания приложений, так как все зависимости уже находятся в контейнере и не требуют установки на хостовую систему.',
     'http://localhost:8080'),
    ('teacher1', 'Java',
     'https://smartprogress.do/uploadImages/001579266.jpg',
     'Java - это объектно-ориентированный язык программирования, разработанный компанией Sun Microsystems (теперь владеется компанией Oracle). Он был выпущен в 1995 году и стал одним из самых популярных языков программирования в мире. Java обладает платформенной независимостью, что означает, что программы, написанные на Java, могут выполняться на различных операционных системах без необходимости перекомпиляции.
Как работает Java?
Java использует виртуальную машину Java (JVM), которая выполняет байт-код, скомпилированный из исходного кода Java. Это позволяет программам Java быть переносимыми и выполняться на любой платформе, на которой установлена JVM. Код Java компилируется в промежуточный байт-код, который затем интерпретируется или компилируется в машинный код во время выполнения.',
     'http://localhost:8080')
on conflict do nothing;

insert into articles_themes
values
    (1, 'web'),
    (1, 'algorithms'),
    (2, 'web'),
    (2, 'sql'),
    (3, 'ml'),
    (3, 'vr')
on conflict do nothing;

create view articles_w_theme(id, author, header, header_img, description, link, pub_date, theme) as
SELECT c.id,
       c.author,
       c.header,
       c.header_img,
       c.description,
       c.link,
       c.pub_date,
       ct.name AS theme
FROM articles c
         JOIN articles_themes ct ON c.id = ct.id;

create view articles_w_themes(id, author, header, header_img, description, link, pub_date, themes) as
SELECT c.id,
       c.author,
       c.header,
       c.header_img,
       c.description,
       c.link,
       c.pub_date,
       array_agg(ct.name) AS themes
FROM articles c
         JOIN articles_themes ct ON c.id = ct.id
GROUP BY c.id, c.author, c.header, c.header_img, c.description, c.link, c.pub_date;

--ARTICLES

create table question
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

create table question_themes
(
    id   integer not null
        constraint ct_competition_fk
            references question,
    name text    not null
        constraint ct_theme_fk
            references themes,
    constraint question_themes_pk
        primary key (id, name)
);

insert into question(author, header, header_img, description, link)
values
    ('student1', 'Корсы в спринг',
     'https://www.nordtheme.com/static/02114e44d90a1df238fd0a69613c994e/ac2a7/ui-overview-java-spring-boot.png',
     'Будь проклят тот, кто придумал CORS Security!!! Будь проклят тот, кто придумал CORS Security!!! Будь проклят тот, кто придумал CORS Security!!! Будь проклят тот, кто придумал CORS Security!!! Будь проклят тот, кто придумал CORS Security!!! Будь проклят тот, кто придумал CORS Security!!! Будь проклят тот, кто придумал CORS Security!!! Будь проклят тот, кто придумал CORS Security!!! Будь проклят тот, кто придумал CORS Security!!! Будь проклят тот, кто придумал CORS Security!!! Будь проклят тот, кто придумал CORS Security!!! Будь проклят тот, кто придумал CORS Security!!! Будь проклят тот, кто придумал CORS Security!!! Будь проклят тот, кто придумал CORS Security!!! Будь проклят тот, кто придумал CORS Security!!!',
     'http://localhost:8080'),
    ('student1', 'Корсы в спринге, убейте меня',
     'https://www.nordtheme.com/static/02114e44d90a1df238fd0a69613c994e/ac2a7/ui-overview-java-spring-boot.png',
     'Будь проклят тот, кто придумал CORS Security!!! Будь проклят тот, кто придумал CORS Security!!! Будь проклят тот, кто придумал CORS Security!!! Будь проклят тот, кто придумал CORS Security!!! Будь проклят тот, кто придумал CORS Security!!! Будь проклят тот, кто придумал CORS Security!!! Будь проклят тот, кто придумал CORS Security!!! Будь проклят тот, кто придумал CORS Security!!! Будь проклят тот, кто придумал CORS Security!!! Будь проклят тот, кто придумал CORS Security!!! Будь проклят тот, кто придумал CORS Security!!! Будь проклят тот, кто придумал CORS Security!!! Будь проклят тот, кто придумал CORS Security!!! Будь проклят тот, кто придумал CORS Security!!! Будь проклят тот, кто придумал CORS Security!!!',
     'http://localhost:8080'),
    ('student1', 'Кто придумал Spring Security 6???',
     'https://www.nordtheme.com/static/02114e44d90a1df238fd0a69613c994e/ac2a7/ui-overview-java-spring-boot.png',
     'Будь проклят тот, кто придумал CORS Security!!! Будь проклят тот, кто придумал CORS Security!!! Будь проклят тот, кто придумал CORS Security!!! Будь проклят тот, кто придумал CORS Security!!! Будь проклят тот, кто придумал CORS Security!!! Будь проклят тот, кто придумал CORS Security!!! Будь проклят тот, кто придумал CORS Security!!! Будь проклят тот, кто придумал CORS Security!!! Будь проклят тот, кто придумал CORS Security!!! Будь проклят тот, кто придумал CORS Security!!! Будь проклят тот, кто придумал CORS Security!!! Будь проклят тот, кто придумал CORS Security!!! Будь проклят тот, кто придумал CORS Security!!! Будь проклят тот, кто придумал CORS Security!!! Будь проклят тот, кто придумал CORS Security!!!',
     'http://localhost:8080')
on conflict do nothing;

insert into question_themes
values
    (1, 'web'),
    (1, 'algorithms'),
    (2, 'web'),
    (2, 'sql'),
    (3, 'ml'),
    (3, 'vr')
on conflict do nothing;

create view questions_w_theme(id, author, header, header_img, description, link, pub_date, theme) as
SELECT c.id,
       c.author,
       c.header,
       c.header_img,
       c.description,
       c.link,
       c.pub_date,
       ct.name AS theme
FROM question c
         JOIN question_themes ct ON c.id = ct.id;

create view questions_w_themes(id, author, header, header_img, description, link, pub_date, themes) as
SELECT c.id,
       c.author,
       c.header,
       c.header_img,
       c.description,
       c.link,
       c.pub_date,
       array_agg(ct.name) AS themes
FROM question c
         JOIN question_themes ct ON c.id = ct.id
GROUP BY c.id, c.author, c.header, c.header_img, c.description, c.link, c.pub_date;

--QAS