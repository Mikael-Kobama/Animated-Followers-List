// Obtém todos os elementos com a classe "followers"
const followers = document.querySelectorAll(".followers");

// Itera sobre cada contador de seguidores
followers.forEach((followersCounter) => {
  // Inicializa o contador de seguidores com 0
  followersCounter.innerHTML = "0";

  // Função para atualizar o contador de seguidores
  const updateFollowersCounter = () => {
    // Obtém o valor de destino (data-target) e o valor atual do contador
    const target = +followersCounter.getAttribute("data-target");
    const current = +followersCounter.innerText;

    // Calcula a quantidade de incremento a ser feita por ciclo
    const increment = target / 500; // O valor será incrementado em 1/500 do total até alcançar o alvo

    // Verifica se o contador atual ainda é menor que o valor de destino
    if (current < target) {
      // Atualiza o valor do contador de seguidores
      followersCounter.innerHTML = `${Math.ceil(current + increment)}`;

      // Chama a função novamente após 10ms (cria o efeito de animação suave)
      setTimeout(updateFollowersCounter, 10);
    } else {
      // Garante que o contador atinja o valor exato e o exibe
      followersCounter.innerText = target;
    }
  };

  // Inicia a contagem ao chamar a função
  updateFollowersCounter();
});
