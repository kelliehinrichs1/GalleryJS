
var chico = ["Upper Bidwell", "One Mile", "Naked Lounge", "Bear Hole", "Dutch Brothers"];
var current = " ";
//declaration of global variables
function shuffleGallery()
{
  var rndm = Math.floor(Math.random() * (chico.length - 1));
  while(current == chico[rndm])
  {
    rndm = Math.floor(Math.random() * (chico.length - 1));
  }
  current = chico[rndm];
  console.log(chico[rndm]);
}
