function display() {
  document.getElementById("Dropdown").classList.add("show");
}

function nodisplay() {
  document.getElementById("Dropdown").classList.remove("show");
}



function key() {
  var x = document.getElementById("mySearch").value.toUpperCase();

  let d = document.getElementById("items");

  let y = d.getElementsByTagName("li");
  var count = 0;

  for (var i = 0; i < y.length; i++) {


    let z = y[i].getElementsByTagName("button")[0];

    let b = z.textContent;
    if (x != "") {
      document.getElementById("items").style.display = "block";
      if (b.toUpperCase().includes(x)) {
        y[i].style.display = "block";
      }
      else {
        y[i].style.display = "none";

      }
    }

    else document.getElementById("items").style.display = "none";


  }

}


for (let i = 0; i < document.querySelectorAll("#items li button").length; i++) 
{

  document.querySelectorAll("#items li button")[i].addEventListener("click",function stock(){
    document.getElementById("stock").style.display="block";
    document.getElementById("hidden").style.display="block";
    var j = "stocks/"+(i+1) + ".png";
    console.log(j);
    document.getElementById("stock").setAttribute("src",j);
    
  });

}

function hide() {
  document.getElementById("stock").style.display="none";
  document.getElementById("hidden").style.display="none";
}