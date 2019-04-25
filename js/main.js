//******SIDE_NAV******
var nav = document.querySelector('.wrapper_nav--side');
var wrapper_main = document.querySelector('.wrapper_main');
var header = document.querySelector('.header');
var main_nav = document.querySelector('.main_nav');
var main_body = document.querySelector('.main_body');
var btn = document.querySelector('.header_btn');

const toggleNav = (x) => {
    if (x.target == btn) {
        btn.classList.toggle('active');
        nav.classList.toggle('active');
    } else if (x.target == wrapper_main || x.target == header || x.target == main_nav || x.target == main_body ) {
        btn.classList.remove('active');
        nav.classList.remove('active');
    }
}

window.addEventListener('click', toggleNav);

//******TABLE-ORDERING******
var rankTitle = document.querySelector('.rank-title');
var arrow = document.querySelector('.rank_arrow');
var items1 = document.querySelector('.block_1');
var items2 = document.querySelector('.block_2');
var items3 = document.querySelector('.block_3');

rankTitle.addEventListener('click', () => {
    arrow.classList.toggle('active');
    items1.classList.toggle('active');
    items2.classList.toggle('active');
    items3.classList.toggle('active');
});

//******RADIOS-SELECTION******
var rSelect = document.querySelector('.select_custom');
var rList = document.querySelector('.list_holder');


rSelect.addEventListener('click', () => {
    rList.classList.toggle('active');
});

