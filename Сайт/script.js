let cell = document.querySelector("cell");
  button.addEventListener("click", function() {
    console.log("Clicked cell: X");
});
function refreshPage(){
  window.location.reload();
};
function StartTheGame() {
  document.getElementById('example_4').style.display='block';
  document.getElementById('example_1').style.display='block';
  document.getElementById('example_2').style.display='none';
}
function mainmenu() {
document.getElementById('example_2').style.display='block'
document.getElementById('example_1').style.display='none'
document.getElementById('example_4').style.display='none'
}
