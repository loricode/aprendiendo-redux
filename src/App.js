import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import axios from 'axios'
import { getUserSuccess } from './actions/action'

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
     .then(response => {
     const users = response.data
     dispatch(getUserSuccess(users))
    })
},[dispatch])

const todo = useSelector(state => state.users)
if(todo.length > 0){
   console.log(tod)
}

  return (

    
     
    
    <div className="App">
      <header className="App-header">


        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}




export default App;
