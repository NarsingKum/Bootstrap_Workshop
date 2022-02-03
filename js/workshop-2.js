function search(){
  var item = document.querySelector("input").value;
  var para = document.getElementById("para");
 console.log(item)
  if (item=="beet") {
      para.innerHTML="Beet is a healthy Food ";
  } 
  else if (item=="carrot") {
    para.innerHTML="Carrot is a healthy Food";
  }
  else if (item== "asparagus") {
    para.innerHTML="Asparagus is a healthy Food";
  }
  else{
    para.innerHTML="Oh... No data found";
  }
  

}
function close(){
    console.log("close is called");
    var para =document.getElementById("para");
    para.innerHTML="";
}