    let i = 2;
    let color = ['green','yellow','red'];

    document.querySelector('.light_box').addEventListener('click', (event) => {
        event.target.children[i].style.background = 'black';
        i = i !== 2 ? ++i : 0;
        event.target.children[i].style.background = color[i];    
    })












