document.getElementById('separator').classList.add('separator');
document.getElementById('separatorbox').classList.add('separatorbox');
document.getElementById('footer').classList.add('footer');
document.getElementById('footer').style.display = 'none';

//HIDE FOOTER CONTENT
document.getElementById('footer-left').style.display = 'none';
document.getElementById('footer-center').style.display = 'none';
document.getElementById('footer-right').style.display = 'none';

document.getElementById('img1').style.display = 'none';
document.getElementById('img2').style.display = 'none';
document.getElementById('img3').style.display = 'none';
document.getElementById('img4').style.display = 'none';
document.getElementById('img5').style.display = 'none';
document.getElementById('img6').style.display = 'none';
document.getElementById('img7').style.display = 'none';
document.getElementById('img8').style.display = 'none';

document.getElementById('footer-separator').style.display = 'none';
document.getElementById('credit').style.display = 'none';


//SEPARATOR & OVERLAY SET UP
window.addEventListener('load', function(e){
    var overlay = document.getElementById('overlay');
    var separator = document.getElementById('separator');
    var separatorbox = document.getElementById('separatorbox');
    var description = document.getElementById('description');
    var footer = document.getElementById('footer');
    
    separator.classList.remove('separator');
    separator.classList.add('separator-transition');
    
    overlay.classList.add('overlay-transition');
    
    //SEPARATOR SET UP
    setTimeout(function() {
        separator.classList.remove('separator-transition');
        separator.classList.add('separator-transition2');  
    }, 500);
    
    setTimeout(function() {
        separator.classList.remove('separator-transition2');
        separator.classList.add('separator-transition3');
        separatorbox.classList.add('separatorbox-transition');
    }, 1000);
    
//    DESCRIPTION SET UP
    setTimeout(function() {
        description.classList.remove('description');
        description.classList.add('description-transition');
    }, 1500);
    
    setTimeout(function() {
        description.classList.remove('description');
        description.classList.add('description-transition');
    }, 2500);
    
//    FOOTER SET UP
    setTimeout(function() {
        footer.style.display = 'flex';
    }, 2700);
    
    setTimeout(function() {
        footer.classList.add('footer-transition');
    }, 3700);
    
    setTimeout(function() {
        footer.classList.remove('footer');
    }, 4500);
    
    setTimeout(function() {
        document.getElementById('footer-right').style.display = 'flex';
        document.getElementById('footer-center').style.display = 'flex';
        document.getElementById('footer-left').style.display = 'flex';
    }, 5000);
    
    // footer IMG set up
    setTimeout(function() {
        document.getElementById('img1').style.display = 'inline-block';
    }, 5500);
    
    setTimeout(function() {
        document.getElementById('img2').style.display = 'inline-block';
    }, 5750);
    
    setTimeout(function() {
        document.getElementById('img3').style.display = 'inline-block';
    }, 6000);
    
    setTimeout(function() {
        document.getElementById('img4').style.display = 'inline-block';
    }, 6225);
    
    setTimeout(function() {
        document.getElementById('img5').style.display = 'inline-block';
    }, 6500);
    
    setTimeout(function() {
        document.getElementById('img6').style.display = 'inline-block';
    }, 6750);
    
    setTimeout(function() {
        document.getElementById('img7').style.display = 'inline-block';
    }, 7000);
    
    setTimeout(function() {
        document.getElementById('img8').style.display = 'inline-block';
    }, 7225);
    
    setTimeout(function() {
        document.getElementById('footer-separator').style.display = 'inline-block';
    }, 8000);
    
    setTimeout(function() {
        document.getElementById('credit').style.display = 'inline-block';
    }, 8225);
});

//#####################################################################