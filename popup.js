const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

// when click on the button it will display
button.addEventListener('click' , () =>{
  popup.style.display = 'block';

});


// for close button
close.addEventListener('click' , () =>{
     popup.style.display='none';
});

// for popupanywhere close

popup.addEventListener('click', () =>{
       popup.style.display='none';
});

/////////////////////////////////////////////////////
