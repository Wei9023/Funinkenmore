'use strict';

var form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', storeInfo);

function storeInfo(event){
	// alert(1);
  event.preventDefault();
  // console.log(form.elements['userName'].value);
  // console.log(form.elements['dogName'].value);
  localStorage.setItem('momName', form.elements['userName'].value);
  localStorage.setItem('kidName', form.elements['kidName'].value);
  location.assign('playdatesform.html');
}