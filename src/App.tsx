import Header from "./components/Cabecalho";
import Hero from "./components/Capa";
import Beneficios from "./components/beneficios";
import Espacos from "./components/espacos";
import Servicos from "./components/servicos";
import Planos from "./components/Planos";
import Depoimentos from "./components/Depoimentos";
import FAQ from "./components/Duvida";
import Contato from "./components/Contato";
import Rodape from "./components/Rodape";

function App() {
  return (
    <div id="topo" className="min-h-screen bg-ink">
      <Header />
      <main className="pt-20">
        <Hero />
        <Beneficios />
        <Espacos />
        <Servicos />
        <Planos />
        <Depoimentos />
        <FAQ />
         <Contato />
      </main>
       <Rodape />
    </div>
  );
}

export default App;