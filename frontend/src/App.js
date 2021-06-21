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
  const [consultar, setConsultar] = useState(true);

  useEffect(() => {
    if(consultar){
      const consultarAPI = () => {
        // http://localhost:4000/pacientes
        clienteAxios.get('/pacientes')
          .then(respuesta => {
            setCitas(respuesta.data)
            setConsultar(false)
          })
          .catch(error =>  console.log(error))
          
      }
      consultarAPI();
    }
    
  }, [consultar]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route 
            exact path="/"
            component={() => <Pacientes citas = {citas}  />} //con esta sintaxis si puedo pasar props a los componentes
          />

          <Route 
            exact path="/nueva"
            component={() => <NuevaCita setConsultar={setConsultar}/>} //con esta sintaxis no puedo pasar props a los componentes
          />

          <Route 
            exact path="/cita/:id"
            render = {(props) => {
              const cita = citas.filter(cita => cita._id === props.match.params.id)
              return(
                <Cita cita = {cita[0]} setConsultar={setConsultar} />
              )
            }}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
