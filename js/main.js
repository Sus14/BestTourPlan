$(document).ready(function () {
  var hotelSlider = new Swiper(".hotel-slider", {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    effect: "cube",
    fadeEffect: {
      crossFade: true,
    },
  });
  var reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
  });

  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    console.log("Клик по кнопке меню");
    document
      .querySelector(".navbar-bottom")
      .classList.toggle("navbar-bottom--visible");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
    $('input').val('');
    $('textarea').val('');
    $("input").removeClass("invalid");
    $("label").remove(".invalid");
    modalDialog.scrollTop(0);
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
    $("input").removeClass("invalid");
    $("label").remove(".invalid");
  }
  // Обработка форм
  $(".form").each(function () {
    $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "name must be at least 2 letters",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Phone is required",
        }
      },
    });
  })
  $("body").on("click", function () {
    $("input").removeClass("invalid");
    $("label").remove(".invalid");
    $("messages").noremove("");
  })
  // Маска номера телефона
  $(".phone-input").mask("+7 (999) 999-99-99");
  jQuery(".phone-input").keypress(function (e) {
    if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
      return false;
    }
  });
  AOS.init();
});