function enviarAgendamento(event) {
  event.preventDefault();
  
  const nome = document.getElementById("nome").value;
  const servico = document.getElementById("servico").value;
  const data = document.getElementById("data").value;
  const hora = document.getElementById("hora").value;
  
  const numero = "559492906953"; // NÚMERO DELA AQUI
  
  const mensagem = encodeURIComponent(
    `Oi! Quero agendar um horário 💅\n\nNome: ${nome}\nServiço: ${servico}\nData: ${data}\nHora: ${hora}`
  );
  
  const url = `https://wa.me/${numero}?text=${mensagem}`;
  
  window.open(url, "_blank");
}