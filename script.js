var a = document.getElementById("a")
var b = document.getElementById("b")
var c = document.getElementById("c")

function solve(){
  /*
  this function will solve for either a,b or c
  */
  var aNum = parseInt(a.value)
  var bNum = parseInt(b.value)
  c.value = Math.sqrt((aNum*aNum) + (bNum*bNum))
}//end function
