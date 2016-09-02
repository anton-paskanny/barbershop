      var link = document.querySelector(".login"); /*поиск нужной ссылки на вход и ее занесение в переменную link*/
      var popup = document.querySelector(".modal-content");  /*поиск самого сплывающего окна и его занесение в переменную popup*/
      var close = popup.querySelector(".modal-content-close"); /*ищем крестик для закрытия, но используем для поиска popup, т.к. ищем именно в форме, всплывающем окне, а не с самого начала dom-страницы*/
      
      var login = popup.querySelector(".icon-user");
      var password = popup.querySelector(".icon-password");

      var form = popup.querySelector("form");

      var storage = localStorage.getItem("login");

      form.addEventListener("submit", function(event){
        if (!login.value || !password.value) {
          event.preventDefault();
          popup.classList.add("modal-error");
        }
        else
        {
          localStorage.setItem("login", login.value);
        }
      });

      link.addEventListener("click", function(event){
        event.preventDefault();
        popup.classList.add("modal-content-show");
        login.focus();

        if (storage) {
          login.value=storage;
          password.focus();
        }
        else
        {
          login.focus();
        }
      });

      close.addEventListener("click", function(event){
        event.preventDefault();
        popup.classList.remove("modal-content-show");
        popup.classList.remove("modal-error");
      })

      window.addEventListener("keydown", function(event){
        if (event.keyCode === 27)
        {
          if (popup.classList.contains("modal-content-show"))
          {
            popup.classList.remove("modal-content-show");
            popup.classList.remove("modal-error");
          }
        }
      });