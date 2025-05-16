function verificarChecklist() {
    const checkboxes = document.querySelectorAll('input[name="item"]');
    const total = checkboxes.length;
    let marcados = 0;
    checkboxes.forEach(cb => {
        if (cb.checked) marcados++;
    });

    const resultado = document.getElementById("resultado");

    if (marcados === total) {
        resultado.textContent = "Tudo pronto! Você está preparado para sua consulta.";
    } else {
        resultado.textContent = "Você ainda precisa verificar alguns itens antes da consulta.";
    }
}