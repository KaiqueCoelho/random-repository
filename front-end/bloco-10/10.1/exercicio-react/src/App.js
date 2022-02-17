import './App.css';

const Task = (value) => {
    return (
      <li key={value}>{value}</li>
    );
}

const compromissos = ['estudar', 'aprender react', 'fazer todos exercicios'];

function App() {
  return (
    <div className="App">      
       { compromissos.map((compromisso) => Task(compromisso)) }
    </div>
  );
}

export default App;
