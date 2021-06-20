import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
//componentes
import Pacientes from './components/Pacientes'
import NuevaCita from './components/NuevaCita'
import Cita from './components/Cita'
function App() {

  console.log()
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route 
            exact path="/"
            component={Pacientes}
          />

          <Route 
            exact path="/nueva"
            component={NuevaCita}
          />

          <Route 
            exact path="/nueva/:id"
            component={Cita}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
