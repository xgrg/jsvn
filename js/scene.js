function addDialog(line){
   html = $('#dialogbox').html();
   $('#dialogbox').html(html + "<br><span class=\"w3-animate-opacity\">"
      + line+ "</span>");
}

function scene(){

  addDialog("Bonjour");
  window.setTimeout(scene, 1000);
}

$( document ).ready(function() {
  scene();
});
