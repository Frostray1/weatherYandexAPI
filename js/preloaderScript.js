window.onload = function () {
    const preload = document.querySelector(".preloader-5");
    const preload__text = document.querySelector(".preloader__text");
    const preload_window = document.querySelector(".preloader__window");
    setTimeout(function () {
      preload__text.textContent = "Настраиваемся на хорошую погоду";
    }, 1000);
    setTimeout(function () {
      preload__text.textContent = "Разгоняем тучи...";
    }, 2000);
    setTimeout(function () {
      preload__text.textContent = "Приготовились!";
    }, 3000);
    setTimeout(function () {
      preload.classList.add("preloader-remove");
      preload_window.classList.add("preloader-remove");
    }, 4000);
  };