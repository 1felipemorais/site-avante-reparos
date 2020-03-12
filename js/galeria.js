let imagens= document.querySelectorAll('.small_img_galeria');
let modal = document.querySelector('.modal_galeria');
let modalImg = document.querySelector('#modal_img_galeria');
let btClose = document.querySelector('#bt_close_galeria');
let srcVal="";

for(let i =0; i<imagens.length;i++){
    imagens[i].addEventListener('click',function(){
        
        srcVal = imagens[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        modal.classList.toggle('modal_active_galeria');
    });
    
}


btClose.addEventListener('click', function(){
    modal.classList.toggle('modal_active_galeria');
});
