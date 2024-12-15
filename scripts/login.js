// Переключение формами.

// это функция вызывается когда пользователь нажимает "у меня есть аккаунт"
function showLoginForm() {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('registerForm').classList.add('hidden');
  }

  // это функция вызывается когда пользователь нажимает "нет аккаунта?"
  function showRegisterForm() {
    document.getElementById('registerForm').classList.remove('hidden');
    document.getElementById('loginForm').classList.add('hidden');
  }


  /* 
Валидация данных, проверяем пользовательский ввод данных.
*/
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

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // тут получаем значении
    const username = document.getElementById('username2').value;
    const email = document.getElementById('email2').value;
    const password = document.getElementById('password2').value;
    

    // временно. Тут скоро будет БД!!
    //Soon....

    if (username && email && password) {
        alert("вы успешно зарегистрированы!")
        window.location.href = "pages/home.html"

    } else {

      alert('Пожалуйста, заполните все поля.');

    }
})