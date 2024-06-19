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

alter table users
    owner to lowfi;

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