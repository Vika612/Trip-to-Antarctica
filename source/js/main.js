'use strict';

/* MENU */

var headerBody = document.querySelector('.header__body');
var burger = document.querySelector('.burger');

headerBody.classList.add('header__body--js');

burger.addEventListener('click', function () {
  headerBody.classList.toggle('header__body--js');
  burger.classList.toggle('active');
});
