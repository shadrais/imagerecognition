import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navigation from "./Components/Navigation/Navigation";
import Logo from "./Components/Logo/Logo";
import Imagelinkfom from './Components/ImageLinkForm/Imagelinkform'

const particleOptions = {
    particles: {
        line_linked: {
            shadow: {
                enable: true,
                color: "#3CA9D1",
                blur: 5
            }
        }
    }
}

function App() {
  return (
    <div className="App">
        <Particles
            params={particleOptions}
        />
      <Navigation />
      <Logo />
      <Imagelinkfom />
    </div>
  );
}



export default App;
