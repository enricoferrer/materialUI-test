import Navbar from "./Components/Navbar";

const linksArray = ["Produtos", "Serviços", "Geral", "Contato"];

function App() {
  return (
    <div >
      <Navbar links ={linksArray}/>
    </div>
  );
}

export default App;
