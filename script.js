var a = document.getElementById("a")
var b = document.getElementById("b")
var c = document.getElementById("c")

function solveC(){
  var aNum = parseInt(a.value)
  var bNum = parseInt(b.value)
  c.value = Math.sqrt((aNum*aNum) + (bNum*bNum))
}//end function
function solveA(){
  var cNum = parseInt(c.value)
  var bNum = parseInt(b.value)
  a.value = Math.sqrt((cNum*cNum) - (bNum*bNum))
}//end function
function solveB(){
  var cNum = parseInt(c.value)
  var aNum = parseInt(a.value)
  b.value = Math.sqrt((cNum*cNum) - (aNum*aNum))
}//end function
