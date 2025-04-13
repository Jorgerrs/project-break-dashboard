const imageUrls = [
    'https://noticiasdelaciencia.com/upload/images/11_2023/5232_time-2034990_1280.jpg',
    'https://costadamorte.blog/wp-content/uploads/2017/09/Fotografias-de-Temporales-800x400.jpg',
    'https://www.a-alvarez.com/img/ybc_blog/post/temporal.jpg',
    'https://machbel.com/fotos/2016/02/Acantilados-de-los-Bufones-de-Pr%C3%ADa-Temporal-de-mar-en-Asturias-2016-by-machbel-2.jpg'

];
const counterElement = document.getElementById('image-counter');
let counterImg = 1;

document.addEventListener('DOMContentLoaded', function () {
   setInterval(changeBackground, 8000)

});

function changeBackground() {
   if (counterImg > 3) {
        counterImg = 0
        console.log('reiniciao')
   }
   document.body.style.backgroundImage='url('+imageUrls[counterImg]+')';
   console.log(counterImg)
   counterImg++;
}