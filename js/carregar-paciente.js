var buscarPaciente = document.querySelector("#carregar-paciente");

buscarPaciente.addEventListener("click", function(){

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
  xhr.addEventListener("load", function(){

  var xhrErro = document.querySelector("#erro-ajax");
  if(xhr.status==200){
      xhrErro.classList.add("esconde");
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta);
      pacientes.forEach(function(paciente){
      montaPaciente(paciente);
    });

    }else{
      xhrErro.classList.remove("esconde");
  }
});

  xhr.send();
});
