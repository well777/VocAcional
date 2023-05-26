document.getElementById('formfeira').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio automático do formulário

  // Validação dos campos
  var nomeCompleto = document.getElementById('cand_nm').value;
  var idade = document.getElementById('idade').value;
  var colegio = document.getElementById('colegio').value;

  if (nomeCompleto.trim() === '') {
    alert('Por favor, preencha o campo Nome Completo.');
    return;
  }

  if (idade.trim() === '') {
    alert('Por favor, preencha o campo Idade.');
    return;
  }

  if (colegio.trim() === '') {
    alert('Por favor, preencha o campo Colégio.');
    return;
  }

  // Envie o formulário se todos os campos estiverem preenchidos corretamente
  this.submit();
});