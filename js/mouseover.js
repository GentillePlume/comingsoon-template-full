//ICON OPACITY TRANSITION ON MOUSEOVER

var footerImage = document.querySelectorAll('#footer-left a');
for(var i = 0; i < footerImage.length; i++){
    footerImage[i].addEventListener('mouseenter', function(){
        this.style.opacity = 1;
    });
    footerImage[i].addEventListener('mouseleave', function(){
        this.style.opacity = .6;
    });
}

//#####################################################################