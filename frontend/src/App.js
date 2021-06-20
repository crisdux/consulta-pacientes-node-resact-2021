import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
//componentes
import Pacientes from './components/Pacientes'
import NuevaCita from './components/NuevaCita'
import Cita from './components/Cita'
//cliente de axios
import clienteAxios from './config/axios'

function App() {

  //state
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    const consultarAPI = () => {
      // http://localhost:4000/pacientes
      clienteAxios.get('/pacientes')
        .then(respuesta => {
          setCitas(respuesta.data)
        })
        .catch(error =>  console.log(error))
        
    }
    consultarAPI();
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route 
            exact path="/"
            component={() => <Pacientes citas = {citas} />} //con esta sintaxis si puedo pasar props a los componentes
          />

          <Route 
            exact path="/nueva"
            component={NuevaCita} //con esta sintaxis no puedo pasar props a los componentes
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
