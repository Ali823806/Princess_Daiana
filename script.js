alert("hi");

window.addEventListener('scroll',function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 0);
});

var typed = new Typed('.type', {
    strings: [
        'Princess',
        'Mother',
        'Wife'
    ],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
  });