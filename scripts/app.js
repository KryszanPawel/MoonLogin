function createStars(starCount){
    const star = document.querySelector('.star');
    for(let i = 0; i < starCount-1; i++){
        let randomLeft = Math.random()*100;
        let randomTop = Math.random()*42;
        let randomTime = getRandomArbitrary(1.5, 12);
        let newStar = star.cloneNode(true);
        newStar.style.left = `${randomLeft}vw`;
        newStar.style.top = `${randomTop}vh` ;
        newStar.style.animationDuration = `${randomTime}s`;
        star.after(newStar);
    }
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

document.addEventListener('mouseover',function(e){
    console.log(e.clientX + '  ' + e.clientY)
});

createStars(25);
