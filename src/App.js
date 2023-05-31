import logo from './logo.svg';
import './App.css';
import Item from './component/Item'
import ItemDate from './component/ItemDate';

function App() {
  return (
    <div>
    <Item name ="Nirma" day="20" month= "June" year ="2004"></Item>
    <ItemDate day="20" month= "June" year ="2004"></ItemDate>

    <Item name ="SurfExcel" ></Item>
    <ItemDate day="10" month= "July" year ="2001"></ItemDate>

    <Item name ="555" ></Item>
    <ItemDate day="11" month= "may" year ="2007"></ItemDate>
    <div className="App">hello bhai</div>
    </div>
  );
}

export default App;
