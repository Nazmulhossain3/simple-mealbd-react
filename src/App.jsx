import './App.css'
import Header from './component/Header/Header'
import Meals from './component/Meals/Meals'
import 'bootstrap/dist/css/bootstrap.min.css';
import SideCart from './component/SideCart/SideCart';


function App() {
  
  return (
    <div className="App">
      <Header></Header>
      <Meals></Meals>
      
     </div>
  )
}

export default App
