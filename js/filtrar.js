var filtrarTabela = document.querySelector("#filtrar-tabela");
filtrarTabela.addEventListener("input", function(){
  var digitado = this.value;
  var pacientes = document.querySelectorAll(".paciente");
  if(this.value.length > 0){
    for(var i = 0; i < pacientes.length; i++){
      var paciente = pacientes[i];
      var infoNome = paciente.querySelector(".info-nome");
      var nome = infoNome.textContent;
      console.log(nome);
      var expressao = new RegExp(this.value, "i");
      if (!expressao.test(nome)){
        paciente.classList.add("esconde")
      }else{
        paciente.classList.remove("esconde");
      }


    }

  }else{
    for(var i = 0; i < pacientes.length; i++){
      var paciente = pacientes[i];
      paciente.classList.remove("esconde");
    }
  }

})
