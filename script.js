$(document).ready(function(){
  var inputVal=0;
  var result=0;

$("#clear").on("click",function(){
    $("#result").html("");
    $("#input").html("");
  });

 $("#one").on("click",function(){
    $("#input").append("1");
  });
  $("#two").on("click",function(){
    $("#input").append("2");
  });
  $("#three").on("click",function(){
    $("#input").append("3");
  });
  $("#four").on("click",function(){
    $("#input").append("4");
  });
  $("#five").on("click",function(){
    $("#input").append("5");
  });
  $("#six").on("click",function(){
    $("#input").append("6");
  });
  $("#seven").on("click",function(){
    $("#input").append("7");
  });
  $("#eight").on("click",function(){
    $("#input").append("8");
  });
  $("#nine").on("click",function(){
    $("#input").append("9");
  });
  $("#zero").on("click",function(){
    $("#input").append("0");
  });
  $("#decimal").on("click",function(){
    $("#input").append(".");
  });
  $("#plus").on("click",function(){
    $("#input").append("+");
  });
  $("#minus").on("click",function(){
    $("#input").append("-");
  });
  $("#multiply").on("click",function(){
    $("#input").append("*");
  });
  $("#divide").on("click",function(){
    $("#input").append("/");
  });
  $("#mod").on("click",function(){
    $("#input").append("%");
  });
  
  $("#equals").on("click",function(){
  inputVal = $("#input").text();
    result=eval(inputVal);
 
    if(result.toString().length>10){
    result =eval(inputVal).toFixed(10);
    }
    
    $("#result").html(result);
  }); 
  
})