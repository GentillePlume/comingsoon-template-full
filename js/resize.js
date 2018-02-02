//RESIZING OF ACCUEIL ################################################

var pagewidth = window.innerWidth + "px";
var pageheight = window.innerHeight + "px";

document.getElementById('page').style.width = pagewidth;
document.getElementById('page').style.height = pageheight;

window.addEventListener('resize', function(){
    
    pagewidth = window.innerWidth + "px";
    pageheight = window.innerHeight + "px";
    document.getElementById('page').style.width = pagewidth;
    document.getElementById('page').style.height = pageheight;
});

//#####################################################################