$(function(){

    let header=$("#header");
    let header_top=$("#header_top"); 
    let headerH=header.height();
    let scollPos=$(window).scrollTop();
    
    
    $(window).on("scroll load", function(){ 
    scollPos=$(this).scrollTop(); 
    if (scollPos>headerH){ 
    header_top.addClass("fixed");
    }
    else{
    
    header_top.removeClass("fixed");
    };
    
    });
    });