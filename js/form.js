var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function(event){
  event.preventDefault();
  var formulario = document.querySelector("#form-adiciona");
  var paciente = valorForm(formulario);
  console.log(paciente);
  var erros = validaPaciente(paciente);

  montaPaciente(paciente);

  if (erros.length > 0){
    var msgErro = document.querySelector("#msg-erro");
    msgErro.innerHTML="";
    erros.forEach(function(erro){
      var li = document.createElement("li");
      li.textContent=erro;
      msgErro.appendChild(li);

    })

    return;
  }

  formulario.reset();
  var mensagem = document.querySelector("#msg-erro");
  mensagem.innerHTML="";

})

function montaPaciente(paciente){
  var criarTabela = tabela(paciente);
  var corpoTabela = document.querySelector("#tabela-pacientes");
  corpoTabela.appendChild(criarTabela);

}

function valorForm(formulario){
  var tabela = {
    nome: formulario.nome.value,
    peso: formulario.peso.value,
    altura: formulario.altura.value,
    gordura: formulario.gordura.value,
    imc:calculaImc(formulario.peso.value, formulario.altura.value)
  }

  return tabela;
}

function tabela(paciente){
  var tr = document.createElement("tr");
  tr.classList.add("paciente");

  tr.appendChild(criarTd(paciente.nome, "info-nome"));
  tr.appendChild(criarTd(paciente.peso, "info-peso"));
  tr.appendChild(criarTd(paciente.altura, "info-altura"));
  tr.appendChild(criarTd(paciente.gordura,"info-gordura"));
  tr.appendChild(criarTd(paciente.imc, "info-imc"));

  return tr;

}

function criarTd(dados, classe){
  var td = document.createElement("td");
  td.textContent=dados;
  td.classList.add(classe);

  return td;
}

function validaPaciente(paciente){
  var erros = [];
  if (paciente.nome.length==0){
    erros.push("Nome precisa ser preenchido");
  }
  if(paciente.peso.length==0){
    erros.push("Peso precisa ser preenchida");
  }

  if (paciente.altura.length==0){
    erros.push("Altura precisa ser preenchida");
  }

  if(paciente.gordura.length==0){
    erros.push("Gordura precisa ser preenchida");
  }

  if(!validaPeso(paciente.peso)){
    erros.push("Peso inválido");
  }

  if(!validaAltura(paciente.altura)){
    erros.push("Altura inválida");
  }

  return erros;
}
