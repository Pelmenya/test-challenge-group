# Тестовое задание Challenge Group

«[Сайт проекта на Heroku](https://test-challenge-group.herokuapp.com/)»

##  Тема: "Разработка приложения для работы с Daily cat facts API"

### Задание на проект:
Реализовать приложение для работы с Daily cat facts API (https://alexwohlbruck.github.io/cat-facts/docs/), модель Fact. Endpoints: GET /facts/random, GET /facts/:factID
Приложение должно иметь отдельную страницу для каждого endpoint. Первая страница для отображения списка фактов, с возможностью фильтрации по диапазону дат и выбора количества выводимых фактов, а также возможностью выбрать факт и перейти на страницу отображения информации о факте. Вторая страница отображение информации о единичном факте с возможностью сохранения информации о факте в БД(2 уровень сложности реализации).
Требование к 1 уровню сложности реализации (Middle position):
1.	Стек - React.js (JavaScript)
2.	Выводить все поля возвращаемые запросом
3.	Использовать адаптивный подход к стилизации элементов формы
4.	Формат вывода даты – DD.MM.YYYY HH:MI:SS
Требование к 2 уровню сложности реализации (Senior position)
1.	Стек – React.js (JavaScript) + Web API Server (Любой на выбор framework) + ORM + PostgreSQL 
2.	Выводить все поля возвращаемые запросом
3.	Использовать адаптивный подход к стилизации элементов формы
5.	Формат вывода даты – DD.MM.YYYY HH:MI:SS
6.	Развернуть все инфраструктуру в Docker контейнерах
7.	Подготовить Dockerfile для каждого сервиса структуры
8.	Подготовить Docker-compose.yaml для всей инфраструктуры
Готовый проект выложить в Github

### Установка проекта:
 Для установки необходимо наличие Node.js и npm

Сохраните проект у себя на компьютере:
```
git clone https://github.com/Pelmenya/test-challenge-group.git
```
В корне проекта через консоль/терминал запустите команду:
```
npm install
```
Запустите в консоле команду для запуска сервера:
```
npm run start
```
Приложение будет доступно по адресу "http://localhost:9000"
```
Запустите в консоле команду для компиляции билда:
```
npm run build
