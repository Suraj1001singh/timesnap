import React,{useState} from 'react';
import Particles from "react-tsparticles";
import axios from "axios";
import "./inputbox.css";

const InputBox = () => {
    const [url, setUrl] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;
    console.log(value);
    setUrl(value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(state);
  };

  const handleClick = async()=>{
    try {
      const result = await axios.get("http://127.0.0.1:8000/api/student/video?id=" + url)
      console.log(result);

    }
    catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Particles
        options={{
          fullScreen: {
            enable: true,
            zIndex: -1
          },
          particles: {
            number: {
              value: 200,
              limit: 300,
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
              image: {
                src: "images/github.svg",
                width: 100,
                height: 100
              }
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.5,
                sync: false
              }
            },
            size: {
              value: 30,
              random: true,
              anim: {
                enable: true,
                speed: 10,
                size_min: 10,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 100,
              color: "#ffffff",
              opacity: 1,
              width: 1
            },
            move: {
              enable: true,
              speed: 3,
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
          // interactivity: {
          //   detect_on: "canvas",
          //   events: {
          //     onHover: {
          //       enable: true,
          //       mode: "bubble",
          //       parallax: {
          //         enable: false,
          //         force: 60,
          //         smooth: 10
          //       }
          //     },
          //     onClick: {
          //       enable: true,
          //       mode: "push"
          //     },
          //     resize: true
          //   },
          //   modes: {
          //     grab: {
          //       distance: 400,
          //       lineLinked: {
          //         opacity: 1
          //       }
          //     },
          //     bubble: {
          //       distance: 400,
          //       size: 100,
          //       duration: 2,
          //       opacity: 1,
          //       speed: 2
          //     },
          //     repulse: {
          //       distance: 200
          //     },
          //     push: {
          //       particles_nb: 4
          //     },
          //     remove: {
          //       particles_nb: 2
          //     }
          //   }
          // },
          backgroundMask: {
            enable: true,
            cover: {
              color: {
                value: {
                  r: 0,
                  g: 0,
                  b: 0
                }
              }
            }
          },
          retina_detect: true,
          fps_limit: 60,
          background: {
            image: "url('https://particles.js.org/images/background3.jpg')"
          }
        }}
      />
    <div className="Box" >
        <div className='info'>
            <h3>Team Name: Runtime Terror</h3> 
            <p>MCA 2nd year</p>  
            <ul>
                <li>Suraj</li>
                <li>Anshuman</li>
                <li>Akanksha</li>
                <li>Saksham</li>
            </ul>  
            <p><br/>Create summary & timestamp</p>   
        </div>
        <div className='form'>
            <h1>Time Stamp Generator</h1>
            <form  onSubmit={handleSubmit}>
                <div className="form-control">
                {/* <label>Enter youtube link</label> */}
                <input
                    type="text"
                    name="url"
                    placeholder="Enter youtube link"
                    value={url}
                    onChange={handleInputChange}
                />
                </div>
                <div className="form-control">
                <button onClick={handleClick}>Generate</button>
                </div>
            </form>
        </div>
    </div>
    </>
  );
}

export default InputBox;