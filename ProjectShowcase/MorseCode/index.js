var morseCode = "A;.-|B;-...|C;-.-.|D;-..|E;.|F;..-.|G;--.|H;....|I;..|J;.---|K;-.-|L;.-..|M;--|N;-.|O;---|P;.--.|Q;--.-|R;.-.|S;...|T;-|U;..-|V;...-|W;.--|X;-..-|Y;-.--|Z;--..|/;-..-.|1;.----|2;..---|3;...--|4;....-|5;.....|6;-....|7;--...|8;---..|9;----.|0;-----"
console.clear()
var morseList = morseCode.split("|")
for(var i=0;i<morseList.length;i++){
  morseList[i] = morseList[i].split(";")
  $("#Morselist").append("<li>"+morseList[i][0]+"  "+morseList[i][1]+"</li>")
}

function findCode(code){
  
  for(var i=0;i<morseList.length;i++){
    if(morseList[i][0] === code){
      return morseList[i][1]
    }
    
  }
  return code
}

function translateCode(code){
  code = code.toUpperCase()
  
  var result= ""
  for(var i=0;i<code.length;i++){
    result+=findCode(code[i])+" "
  }
  return result
}


function findText(code){
  for(var i=0;i<morseList.length;i++){
    if (morseList[i][1]==code){
      return morseList[i][0]
    }
  }
  return code;
}


function translateText(code){
  code=code.split(" ")
  console.log(code)
  var result= ""
  for(var i=0;i<code.length;i++){
    result+=findText(code[i])
  }
  return result
}



$("#btnMorse").click(function(){
  var input = $("#input").val()
  var result1 = translateCode(input)
  $("#output").val(result1)
  $("#output").css({
    backgroundColor: "#FFB637"
  }).animate({
    backgroundColor: "transparent"
  },500)
  $(".symbol").velocity({
    transform: ["rotateZ(0deg)","rotateZ(360deg)"]
  },500)
})

$("#btnEng").click(function(){
  var output = $("#output").val()
  var result2 = translateText(output)
  $("#input").val(result2)
  $("#input").css({
    backgroundColor: "#FFB637"
  }).animate({
    backgroundColor: "transparent"
  },500)
  $(".symbol").velocity({
    transform: ["rotateZ(0deg)","rotateZ(360deg)"]
  },500)
})


$("#input").keyup(function(){
  let key = $("#input").val()
  let newtext = key.toUpperCase().split(" ").join("")
  $("#input").val(newtext)
})

function play(text,nowindex){
  var word = text[nowindex]
  var lastTime = 300
  if (word = "."){
    lastTime = 300
    $("audio.short").play    
  }else if (word = "-"){
    lastTime = 500
    $("audio.long").play  
}else
  lastTime = 1000
console.log(word,lastTime)
  
$(".playlist span").removeClass("playing")
$(".playlist span").eq(nowindex).addClass("playing")
  
if (text.length>nowindex){
    playerTimer=setTimeout(function(){
      play(text,nowindex+1)
    },lastTime)
}else{
  $(".playlist").html("")
}
    
  
}


$("#btnPlay").click(function(){
  input = $("#output").val()
  for(var i=0;i<input.length;i++){
    $(".playlist").append("<span>"+input[i]+"</span>")
  }
  play(input,0)
})