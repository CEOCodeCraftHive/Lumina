function myFunction(x) {
  x.classList.toggle("change");
  var div = document.getElementById("smallHeader1");
  if(div.classList.contains("invisible")){
    div.classList.remove("invisible");
    div.classList.add("visible");
  }else{
    div.classList.remove("visible");
    div.classList.add("invisible");
  }
}
