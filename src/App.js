import React from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Admin from './components/Admin';
import Card from 'react-bootstrap/Card'
function App() {
  return (
    <div className="App">
      <Navbar className='Navbar' fixed='top'>
          <Navbar.Brand href="#home">
            <img
                   src="/logo.svg"
                   width="30"
                   height="30"
                   className="d-inline-block align-top"
                   alt="logo" />
             </Navbar.Brand>
    </Navbar>
    <br></br>
    <div className='admin'>
      <Card>
        <br></br>
          <Admin></Admin>
        <br></br>
      </Card>
    </div>
    <br></br>
    </div>
  );
}

export default App;
