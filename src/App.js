import './App.css';
import Routes from './components/Routes/Routes';
import { UserProvider } from './components/UserContext/UserContext';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Routes></Routes>
      </UserProvider>
    </div>
  );
}

export default App;
