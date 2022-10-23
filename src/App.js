import {BrowserRouter} from 'react-router-dom';
import {RoutesLayoutMachaca}from './routes/RoutesLayoutMachaca';
import './App.css';
import {NavbarMachaca} from './routes/NavbarMachaca';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/*<NavbarMachaca/>*/}
      <RoutesLayoutMachaca />
      </BrowserRouter>
    </div>
  );
}
export default App;
