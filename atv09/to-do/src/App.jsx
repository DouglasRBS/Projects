import { useState } from 'react'
import './App.css'

function TarefaItem({ tarefa, onRemover, onToggle }) {
  return (
    <li className={`tarefa-item ${tarefa.concluida ? 'concluida' : ''}`}>
      <button
        className="checkbox-btn"
        onClick={() => onToggle(tarefa.id)}
        aria-label={tarefa.concluida ? 'Marcar como pendente' : 'Marcar como concluída'}
      >
        <span className="checkbox-visual">
          {tarefa.concluida && (
            <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
              <path d="M1 5L4.5 8.5L11 1.5" stroke="var(--bg)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </span>
      </button>

      <span className="tarefa-texto">{tarefa.text}</span>

      <button
        className="remover-btn"
        onClick={() => onRemover(tarefa.id)}
        aria-label="Remover tarefa"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 2L12 12M12 2L2 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      </button>
    </li>
  )
}

function Rodape({ total, concluidas, onLimparConcluidas }) {
  const pendentes = total - concluidas

  return (
    <footer className="rodape">
      <span className="stat">
        <strong>{pendentes}</strong> pendente{pendentes !== 1 ? 's' : ''}
      </span>
      <span className="stat-divider">·</span>
      <span className="stat">
        <strong>{concluidas}</strong> concluída{concluidas !== 1 ? 's' : ''}
      </span>
      {concluidas > 0 && (
        <>
          <span className="stat-divider">·</span>
          <button className="limpar-btn" onClick={onLimparConcluidas}>
            limpar concluídas
          </button>
        </>
      )}
    </footer>
  )
}

export default function App() {
  const [tarefas, setTarefas] = useState([
    { id: Date.now() - 2, text: 'Aprender React Hooks', concluida: true },
    { id: Date.now() - 1, text: 'Entender componentes controlados', concluida: false },
  ])

  const [inputValor, setInputValor] = useState('')

  function adicionarTarefa() {
    const texto = inputValor.trim()
    if (texto === '') return

    const novaTarefa = {
      id: Date.now(),
      text: texto,
      concluida: false,
    }

    setTarefas([...tarefas, novaTarefa])
    setInputValor('')
  }

  function removerTarefa(id) {
    setTarefas(tarefas.filter(t => t.id !== id))
  }

  function toggleTarefa(id) {
    setTarefas(tarefas.map(t =>
      t.id === id ? { ...t, concluida: !t.concluida } : t
    ))
  }

  function limparConcluidas() {
    setTarefas(tarefas.filter(t => !t.concluida))
  }

  function handleSubmit(e) {
    e.preventDefault()
    adicionarTarefa()
  }

  const totalConcluidas = tarefas.filter(t => t.concluida).length

  return (
    <div className="app">
      <header className="cabecalho">
        <div className="label-tag">REACT · HOOKS · STATE</div>
        <h1 className="titulo">to<span className="accent">-</span>do</h1>
        <p className="subtitulo">Gerencie suas tarefas com React declarativo</p>
      </header>

      <form className="form-adicionar" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input-tarefa"
          placeholder="Nova tarefa..."
          value={inputValor}
          onChange={(e) => setInputValor(e.target.value)}
          autoFocus
        />
        <button type="submit" className="btn-adicionar" disabled={!inputValor.trim()}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 1V17M1 9H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span>Adicionar</span>
        </button>
      </form>

      <main className="lista-container">
        {tarefas.length === 0 ? (
          <div className="lista-vazia">''
            <span className="vazia-icone">✓</span>
            <p>Nenhuma tarefa por aqui.</p>
            <p className="vazia-sub">Adicione algo acima!</p>
          </div>
        ) : (
          <ul className="lista">
            {tarefas.map(tarefa => (
              <TarefaItem
                key={tarefa.id}
                tarefa={tarefa}
                onRemover={removerTarefa}
                onToggle={toggleTarefa}
              />
            ))}
          </ul>
        )}
      </main>

      {tarefas.length > 0 && (
        <Rodape
          total={tarefas.length}
          concluidas={totalConcluidas}
          onLimparConcluidas={limparConcluidas}
        />
      )}
    </div>
  )
}