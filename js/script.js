// Validação do formulário de contato
const form = document.getElementById('form-contato');
const msgErro = document.getElementById('mensagem-erro');
const msgSucesso = document.getElementById('mensagem-sucesso');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    msgErro.textContent = '';
    msgSucesso.textContent = '';

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const mensagem = form.mensagem.value.trim();

    if (!nome || !email || !mensagem) {
      msgErro.textContent = 'Por favor, preencha todos os campos.';
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      msgErro.textContent = 'Insira um e-mail válido.';
      return;
    }

    // Simulação de envio bem-sucedido
    msgSucesso.textContent = 'Mensagem enviada com sucesso!';
    form.reset();
  });
}

// Interatividade no FAQ (mostrar/esconder respostas)
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  const pergunta = item.querySelector('h2');
  const resposta = item.querySelector('p');

  if (pergunta && resposta) {
    resposta.style.display = 'none';

    pergunta.style.cursor = 'pointer';
    pergunta.addEventListener('click', () => {
      resposta.style.display = resposta.style.display === 'none' ? 'block' : 'none';
    });
  }
});

window.watsonAssistantChatOptions = {
  integrationID: "ddc0fefe-9c76-46b8-a2fe-9d8d87b79454", // The ID of this integration.
  region: "au-syd", // The region your integration is hosted in.
  serviceInstanceID: "731c3874-6778-41cd-854f-c1543b2866c3", // The ID of your service instance.
  onLoad: async (instance) => { await instance.render(); }
};
setTimeout(function(){
  const t=document.createElement('script');
  t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
  document.head.appendChild(t);
});
