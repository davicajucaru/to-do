import "./App.css";
import Activities from "./components/Activities";
import Header from "./components/Header";
import { TodosProvider } from "./components/TodosContext";

function App() {
  return (
    <div className="App">
      <Header />
      <TodosProvider>
        <Activities />
      </TodosProvider>
    </div>
  );
}

export default App;
