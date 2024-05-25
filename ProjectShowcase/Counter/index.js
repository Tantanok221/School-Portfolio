var num=12;

function click(num_var){
  num=num+num_var;
  $('.num').text(num); 
}


function check(){
  if (num<10){
    $(".text").text("We need more stock");
    $(".text").css("border-color","#FF6505");
    $(".text").css("color","#FF6505");
    $(".fill_stock").addClass("stock_open");
}
  else if (num<20){
    $(".text").text("Great");
    $(".text").css("border-color","#FFCD05");
    $(".text").css("color","#FFCD05");
    $(".fill_stock").removeClass("stock_open");
}
  else{
    $(".text").text("Theres too many stock");
    $(".text").css("border-color","#FFFFFF");
    $(".text").css("color","#FFFFFF");
    $(".fill_stock").removeClass("stock_open");
  }}


$(".add").click(
  function(){
  click(1);
  check();
})
$(".minus").click(
  function(){
  click(-1);
  check()
  });

var waittime=0;
$(".fill_stock").click(
  function(){
    $(".fill_stock").text("Calling....");
    setInterval(
    function(){
      waittime=waittime+1;
      $(".fill_stock").text("Calling...."+waittime);
      
    }
    ,1000);
  }
)