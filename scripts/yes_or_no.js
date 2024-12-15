    // Функция для открытия всплывающего окна
    function openPopup(popupId) {
        const popup = document.getElementById(popupId);
        const overlay = document.getElementById('overlay');
        popup.classList.add('active');
        overlay.classList.add('active');
      }
  
      // Функция для закрытия всплывающего окна
      function closePopup(popupId) {
        const popup = document.getElementById(popupId);
        const overlay = document.getElementById('overlay');
        popup.classList.remove('active');
        overlay.classList.remove('active');
      }
  
      // Обработчики событий для кнопок
      document.querySelector('.like').addEventListener('click', () => {
        openPopup('likePopup');
      });
  
      document.querySelector('.dislike').addEventListener('click', () => {
        openPopup('dislikePopup');
      });