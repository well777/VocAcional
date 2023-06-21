



function toggleTag(tag) {
  tag.classList.toggle("active");
}

// Função para lidar com o clique no botão Next
document.getElementById("nextButton").addEventListener("click", function(event) {
  var selectedTags = document.querySelectorAll(".tag.active");
  var selectedTagsText = [];

  for (var i = 0; i < selectedTags.length; i++) {
    selectedTagsText.push(selectedTags[i].textContent);
  }

  if (selectedTagsText.length === 0) {
    alert("Selecione pelo menos uma tag antes de avançar.");
    event.preventDefault();
  } else {
    // Aqui você pode processar as tags selecionadas antes de redirecionar para a próxima página
    console.log(selectedTagsText);
  }
});



document.getElementById('nextButton').addEventListener('click', function() {
    window.location.href = 'https://www.example.com'; 
});