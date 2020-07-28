import React , { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from "./Components/Navigation/Navigation";
import Logo from "./Components/Logo/Logo";
import Imagelinkfom from './Components/ImageLinkForm/Imagelinkform'
import Rank from "./Components/Rank/Rank";
import Facerecognition from "./Components/Facerecognition/Facerecognition";

const app = new Clarifai.App({
    apiKey: '7e71dc7bece44af5af44b63e369c4422'
});

const particleOptions = {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            },

        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick: {
                enable: false,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 383.5918582628083,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
}



class App extends Component{

    constructor() {
        super();
        this.state = {
            input :     '',
            imageUrl : '',
            box : {},
        }
    }

    calculateFaceLocation = (data) => {
       const clarifaiFace= data.outputs[0].data.regions[0].region_info.bounding_box;
       const image = document.getElementById('inputimage');
       const width = Number(image.width);
        const height = Number(image.height);
        return {
            leftCol : clarifaiFace.left_col * width ,
            topRow : clarifaiFace.top_row * height ,
            rightCol : width - (clarifaiFace.right_col * width),
            bottomRow : height - (clarifaiFace.bottom_row * height),
        }

    };

    onInputChange = (event) => {
        this.setState({input : event.target.value});
    }

    displayFaceBox = (box) => {
        this.setState({box : box});
        console.log(box);
    }

    onButtonSubmit = () => {
        this.setState({imageUrl : this.state.input})
        app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
            .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="App">
                <Particles className="particles"
                           params={particleOptions}
                />
                <Navigation/>
                <Logo/>
                <Rank/>
                <Imagelinkfom onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
                <Facerecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
            </div>
        );
    }
}



export default App;
