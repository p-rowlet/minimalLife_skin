const scroll = document.querySelector('.scrolling');

window.addEventListener('scroll', (e)=>{   
    if(window.outerWidth >= 600 && window.scrollY >= 800){
        scroll.style.visibility = 'visible';
    }else{
        scroll.style.visibility = 'hidden';
    }
});

window.addEventListener('resize', e=>{
    if(window.innerWidth >= 1400){
        nav.style.display = 'block';
    }else{
        nav.style.display = 'none';
    }
});

scroll.addEventListener('click', e=>{
    window.scrollTo({top:0, left:0, behavior:'smooth'})
});

const menu = document.querySelector('.menubar');
const nav = document.querySelector('nav');

menu.addEventListener('click', e=>{
    if(nav.style.display === 'block'){
        nav.style.display = 'none';
    }else{
        nav.style.display = 'block';
    }
    
});

function requestSearch(className){
    try{
        window.location.href = '/search/' + encodeURIComponent(document.querySelectorAll(className)[0].value);
        return false;
    }catch(e){

    }
}