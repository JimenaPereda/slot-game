$(document).ready(function(){

    var images = ["Variables/water.png", "Variables/lemon.png", "Variables/orange.png", "Variables/cherry.png", 
    "Variables/bell.png", "Variables/banana.png", "Variables/bar.png",  ]
   
    var randomimg1 = ""
    var randomimg2 = ""
    var randomimg3 = ""
    
    $(".btn").on("click", function (event){
       event.preventDefault()
       $(".colum").animate({
        height: 'slideDown'
      });
      $(".sound")[0].play();
       randomimg1 = images[Math.floor(Math.random()* images.length)]
       randomimg2 = images[Math.floor(Math.random()* images.length)]
       randomimg3 = images[Math.floor(Math.random()* images.length)]
      
        $("#img1").attr("src", randomimg1 )
        $("#img2").attr("src", randomimg2 )
        $("#img3").attr("src", randomimg3 )
         
    clickAlert()
        
      
        
    })
    
    function clickAlert(){
        
        if( randomimg1 == randomimg2 && randomimg2 == randomimg3 && randomimg3 == randomimg1){
            { alert("You Fucking win nothing but at least I entretain you!" ); }
           
        }
       }

    
        
    
        
        
        
    


})