// script.js
function adicionarTarefa() {
    const tarefaInput = document.getElementById("novaTarefa");
    const tarefaTexto = tarefaInput.value.trim();

    if (tarefaTexto) {
        const tarefas = document.getElementById("tarefas");

        const novaTarefa = document.createElement("li");
        novaTarefa.innerHTML = `
            ${tarefaTexto}
            <button onclick="removerTarefa(this)">Remover</button>
        `;

        tarefas.appendChild(novaTarefa);
        tarefaInput.value = "";
    } else {
        alert("Digite uma tarefa válida!");
    }
}

function removerTarefa(elemento) {
    elemento.parentElement.remove();
}
