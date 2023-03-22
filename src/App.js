import logo from './logo.svg';
import './App.css';


const number = 5555;
const singers = [{name:"Mahfuz", age:21, job: "singer"}, 
                {name:"Eva", age:21, job: "singer2"},
                {name:"Agun", age:21, job: "Shopno"},
                {name:"Shuvro", age:21, job: "Pathor"},
              ];

const singerStyle={
  color: 'yellow'
}

function App() {
  const nayoks = ['Rubel', 'BappaRaz', 'Kuber', 'Jasim', 'Salman Shah', 'Riyaz', 'Anwar'];
  return (
    <div className="App">

      {
        nayoks.map(nayok =><li>Name : {nayok}</li>)
      }
      {
        // nayoks.map(nayok => <Person name={nayok}></Person>)
      }

      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }

      {/* <Person name={nayoks[0]} nayika="Mousumi"></Person>  
      <Person name={nayoks[1]} nayika="sumi"></Person>
      <Person name={nayoks[2]} nayika="sumi"></Person> */}
      <h5>New component</h5>
      <p>Rock mama, react mama</p>
      <Friend name="Rub" nayika="Mou"></Friend>
    </div>
  );
}

function Person(props){
  console.log(props);
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>{props.nayika}</p>
    </div>
  )
}


function Friend(props){
  return(
    <div className='container'>
      <h1>{props.name}</h1>
      <p>{props.nayika}</p>
    </div>
  )
}


export default App;
