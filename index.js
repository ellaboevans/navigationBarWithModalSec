const openBtn = document.querySelector('.subBtn');
const closeBtn = document.querySelector('#close');
const modal = document.querySelector('.modal');
const form = document.querySelector('form');


//Open Modal Section//
openBtn.addEventListener('click', openModal);

function openModal(){
    modal.style.display = 'grid';
}


//close Modal Section//
closeBtn.addEventListener('click', closeModal);

function closeModal(){

    modal.classList.add('close-modal-animation');
    setTimeout(() => {
        modal.style.display = 'none';
        window.location.reload();
    }, 500);
}


//Open Modal Section out (e)//
modal.addEventListener('click', function(e){
    if(e.target.classList.contains('modal')){
        closeModal();
    }
})


//Thank you message//
form.addEventListener('submit', submitForm);

function submitForm(){
    const card = document.querySelector('.card');
    card.innerHTML = "<h1>Thanks for your subscription!</h1>";
    setTimeout(() => {
        closeModal();
      }, 3000);
}
