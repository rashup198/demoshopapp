import logo from './logo.svg';
import './App.css';
import Item from './component/Item'
import ItemDate from './component/ItemDate';
import Card from './component/Card';

function App() {
  const response=[
    {
      itemName:"Nirma",
      itemDate:"200",
      itemMonth:"june",
      itemYear: "2004"

    },
    {
      itemName:"Nirma2",
      itemDate:"201",
      itemMonth:"june3",
      itemYear: "2004"

    },
    {
      itemName:"Nirma2",
      itemDate:"202",
      itemMonth:"june2",
      itemYear: "2004"

    },
  ]
  return (
    <div>

    <Card>
    <Item name ={response[0].itemName}>hello ji mai hu apki first item</Item>
    <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year ={response[0].itemYear}></ItemDate>

    <Item name ={response[1].itemName} ></Item>
    <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year ={response[1].itemYear}></ItemDate>


    <Item name ={response[1].itemName}></Item>
    <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year ={response[1].itemYear}></ItemDate>

    <div className="App">hello bhai</div>

    </Card>
    </div>
  );
}

export default App;
