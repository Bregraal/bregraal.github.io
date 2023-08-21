const squadContainers = [...document.querySelectorAll('.squad-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

squadContainers.forEach((item, i) => {

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += 300;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= 300;
    })
})