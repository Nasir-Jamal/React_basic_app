//import logo from './logo.svg';
import './App.css';
import Hello from './Hello';

function App(props) {
  return <div>
              
              Hello World from app.js Updated!!!
              <div>Welcome <b>{props.name} {props.age - 10} years old </b> in Bootcamp 2020</div>
              <br />
              <Hello></Hello>

         </div>
}



export default App;
