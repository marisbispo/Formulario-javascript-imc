var tabelaPacientes = document.querySelector("#tabela-pacientes");
tabelaPacientes.addEventListener("dblclick", function(event){
  event.target.parentNode.classList.add("fadeOut");

  setTimeout(function(){
    event.target.parentNode.remove();
  },1000);
})
