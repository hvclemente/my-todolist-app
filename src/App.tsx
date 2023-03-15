import './App.css';
import Header from './components/Header';
import InputText from './components/InputText';

function App() {
  return (
    <>
      <Header />
      <InputText
        inputValue='Create a new todo for today’s list...'
        onInputChange={() => {}}
      />
    </>
  );
}

export default App;
