
const inputTarefa = document.getElementById('taskInput');
const botaoAdicionar = document.getElementById('addTaskBtn');
const listaUl = document.getElementById('taskList');

function adicionarTarefa() {
    const texto = inputTarefa.value.trim();

    if (texto !== "") {
        const li = document.createElement('li');
        
        li.innerHTML = `<span><input type="checkbox"> ${texto}</span>`;
        listaUl.appendChild(li);

        inputTarefa.value = "";
        inputTarefa.focus();
    }
}

botaoAdicionar.addEventListener('click', adicionarTarefa);

inputTarefa.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') adicionarTarefa();
});

listaUl.addEventListener('click', (evento) => {
    if (evento.target.type === 'checkbox') return;

    const itemParaRemover = evento.target.closest('li');
    
    if (itemParaRemover) {
        itemParaRemover.remove();
    }
});