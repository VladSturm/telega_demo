import React, { useEffect } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Body from './components/body'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import { setDialoges, setMessagesWork, setMessagesFlood } from './stores/actions'
import { useDispatch } from "react-redux";
import axios from 'axios';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('data.json')
      dispatch(setDialoges(response.data.dialoges))
      dispatch(setMessagesWork(response.data.dialoges[0].messages))
      dispatch(setMessagesFlood(response.data.dialoges[1].messages))
      return response
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Body}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
