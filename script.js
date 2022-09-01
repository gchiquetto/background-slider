const btnPrev = document.querySelector('.button-previous');
const btnNext = document.querySelector('.button-next');
const buttons = document.querySelectorAll('.button');
const pictures = ['img1.jpg','img2.jpg','img3.jpg','img4.jpg'];
let counter = 1;


buttons.forEach(button =>
    button.addEventListener('click', e =>
        {
            const backgroundImg = `/img/${pictures[counter]}`
            const btnClicked = e.target.closest('div');
            document.getElementById('main').style.background = `url(${backgroundImg})`;
            document.getElementById('img').style.background = `url(${backgroundImg})`;
            
            btnClicked === btnPrev ? counter-- : counter++;

           counter >= pictures.length && resetCounter();
           counter < 0 && maxCounter();

        }
    )
);


function resetCounter(){
    return counter = 0;
}

function maxCounter(){
    return counter = pictures.length - 1;
}