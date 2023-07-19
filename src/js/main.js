let btn = document.querySelector('#btn')
let info = document.querySelector('.info')

btn.addEventListener('click' , function() {
    if (info.style.display === 'block'){
        info.style.display = 'none';
    }
    else {
        info.style.display = 'block';
    }
});