
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Layouts from './components/Layouts/Layouts';
import MainPage from './components/mainPage/mainPage';
function App() {
  return (
    <div className="App">
      <NavBar />
      <MainPage />
      <Layouts />
      <footer>
        footer
      </footer>
    </div>
  );
}

export default App;
