const frases = [
    "O sucesso começa com um sonho.",
    "Acredite em você mesmo e em seu potencial.",
    "Cada dia é uma nova oportunidade para aprender.",
    "Nunca é tarde demais para fazer o que você ama.",
    "Você é capaz de alcançar seus objetivos.",
    "A persistência leva à conquista.",
    "Seja a mudança que você deseja ver no mundo.",
    "O caminho para o sucesso é pavimentado com determinação.",
    "A cada erro, estamos um passo mais perto do acerto.",
    "O futuro pertence àqueles que acreditam na beleza de seus sonhos."
  ];
  
  function exibirMensagem() {
    const nome = document.getElementById("nomeEstudante").value;
    const fraseIndex = Math.floor(Math.random() * frases.length);
    const fraseMotivacional = frases[fraseIndex];
    const mensagem = `Olá, ${nome}! ${fraseMotivacional}`;
    const mensagemElement = document.getElementById("fraseMotivacional");
    mensagemElement.textContent = mensagem;
    mensagemElement.style.color = getRandomColor();
    ativarEfeitoConfetes();
  }
  
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function ativarEfeitoConfetes() {
    var confettiSettings = { target: 'confetti-canvas' };
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    setTimeout(function () {
        confetti.clear();
    }, 5000); // O confete desaparece após 5 segundos
}