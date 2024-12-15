# 🌸 Linux Universe

**Linux Universe** - это простой форум сообщество про Linux, где люди могут общаться связанное с дистрибутивами линукс и важные утилиты для них.

---

## 🪐 Структура проекта

Функционал пока полностью не доделан, работает только две страницы. 
P.s Сайт в дальнейшем будет развиваться xD

```bash
├── images
│   ├── logo.png
│   ├── mint.jpg
│   ├── phone.jpg
│   ├── ubuntu_1.jpg
│   ├── wine-3.png
│   └── wine.png
├── index.html
├── pages
│   ├── home.html
│   └── install_wine.html
├── scripts
│   ├── login.js
│   └── yes_or_no.js
└── styles
    ├── Home
    │   └── home_style.css
    ├── Login
    │   └── login_style.css
    └── Wine
        └── wine_style.css
```
---

## 🚀 Функционал

- Регистрация пользователей
- Взаимодействие с кнопками


---

## 🛠️ Технологии

- HTML
- CSS
- JavaScript

---

## 📥 Запуск

1. Скачайте репозоторий
2. Запустите файл ```index.html```

## 🍀 Использование
1. Для входа в сайт укажите следующие данные: 

```
admin
12345
```

2. Если зарегистрироваться, то укажите любые данные.
3. Работает главная страница сайта
4. Страница "Установка Wine" есть статья, мы можем оценить ее двумя кнопками: "Да" или "Нет"


## 📓 Пример кода
Рассмотрим код для **регистрации** пользователей:

```javascript
function showLoginForm() {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('registerForm').classList.add('hidden');
  }

  // это функция вызывается когда пользователь нажимает "нет аккаунта?"
  function showRegisterForm() {
    document.getElementById('registerForm').classList.remove('hidden');
    document.getElementById('loginForm').classList.add('hidden');
  }
```
Нам с начала необходимо получить доступ к **форму** логин. Для этого воспользовались функцией ```getElementById```, в качестве аргумента которой укажем саму ```id``` формы.

```showLoginForm()``` - это метод для входа пользователей  

```showRegisterForm()``` - это метод для созданий новых пользователей.

Теперь рассмотрим главную часть:
```javascript
document.addEventListener('DOMContentLoaded', function() {
    // Обработчик события отправки формы
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем отправку формы по умолчанию
  
        // Получаем значения полей
        const username = document.getElementById('login').value;
        const password = document.getElementById('password').value;
  
        /* 
        Валидация данных
        */

        // пока что временно так,скоро тут будет БД
        if (username == "admin" && password=="12345"){
            window.location.href = "pages/home.html"
        }
        else{
            alert("укажите данные верно!")
        }
    })
})
```
- ```addEventListener()``` - специальный обработчик кнопки "Вход". 

Обратите внимание, мы указали ```event.preventDefault();```. Если пользователь нажмет "Вход", то вместо того чтобы данные отправить на сервер, наш сайт сначала проверит эти данные.
Мы используем структуру ```if/else``` для проверки данных.

## 💼 Контакты
- Telegram - **```@aavuo```**
- E-mail - **```slnho7coder@gmail.com```**
