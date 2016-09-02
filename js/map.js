 var mapOpen = document.querySelector(".open-map");
      var mapPopup = document.querySelector(".modal-content-map");
      var mapClose = mapPopup.querySelector(".modal-content-close");

      mapOpen.addEventListener("click", function(event){
        event.preventDefault();
        mapPopup.classList.add("modal-show-map");
      });

      mapClose.addEventListener("click", function(event){
        event.preventDefault();
        mapPopup.classList.remove("modal-show-map");
      });

      window.addEventListener("keydown", function(event){
        if (event.keyCode === 27) {
          if (mapPopup.classList.contains("modal-show-map")){
                mapPopup.classList.remove("modal-show-map");
          }
        }
      });