document.getElementById("meuFormulario").addEventListener("submit", function(event) {
      event.preventDefault(); // Evita o envio do formulário

      // Obtém os valores do formulário
      var nome = document.getElementById("nome").value;
      var idade = document.getElementById("idade").value;
      var colegio = document.getElementById("colegio").value;


      // Exibe a mensagem de boas-vindas
      var mensagem = "Bem-vindo, " + nome + "! Você tem " + idade + " anos e estuda no colégio " + colegio + ".";
      document.getElementById("mensagem").textContent = mensagem;
      document.getElementById("resultado").style.display = "block";
    });