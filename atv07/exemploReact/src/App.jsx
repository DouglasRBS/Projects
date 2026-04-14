import { useState } from "react";
import Cabecalho from "./components/cabecalho";

export default function App() {
    const [contador, setContador] = useState(0);

    function incrementar(){
      setContador(contador + 1);
    }

    return (
      <main>
        <Cabecalho titulo="React" />
        <Cabecalho titulo="Cabeçalho Dois" />
        <h2>{contador}</h2>
        <button onClick={incrementar}>
          Incrementar
        </button>
      </main>
    );
}