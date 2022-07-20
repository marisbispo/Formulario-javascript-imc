var titulo = document.querySelector('h1');

titulo.textContent = 'Escritorio Maristela';

var pacientes = document.querySelectorAll('.paciente');
//console.log(pacientes);

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];
  //console.log(paciente)

  var tdPeso = paciente.querySelector('.info-peso');
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector('.info-altura');
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector('.info-imc');

  PesoEhValido = validaPeso(peso);
  AlturaEhValida = validaAltura(altura);

  if (!AlturaEhValida) {
    AlturaEhValida = false;
    tdImc.textContent = 'altura incorreta';
    paciente.classList.add('paciente-invalido');
  }

  if (!PesoEhValido) {
    PesoEhValido = false;
    tdImc.textContent = 'peso incorreto';
    paciente.classList.add('paciente-invalido');
  }

  if (PesoEhValido && AlturaEhValida) {
    tdImc.textContent = calculaImc(peso, altura);
  }

  function calculaImc(peso, altura) {
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
  }
}

function validaPeso(peso) {
  if (peso > 0 && peso < 1000) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if (altura > 0 && altura < 3) {
    return true;
  } else {
    return false;
  }
}
