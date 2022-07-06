import s from './MovingBackground.module.scss';
import {loadSlim} from "tsparticles-slim"; // loads tsparticles-slim
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
import {useCallback, useMemo, useState} from "react";
import particlesConfig from "./particlesConfig";
import clouds from "../../assets/images/clouds";
import sun from "../../assets/images/clouds/sun.png";
import clouds5 from "../../assets/images/clouds/clouds5.png";

const MovingBackground = () => {
  const options = useMemo(() => {
    return {
      fpsLimit: 60,
      particles: {
        number: {
          value: 0,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#ff0000",
          animation: {
            enable: true,
            speed: 20,
            sync: true
          }
        },
        shape: {
          type: "image",
          options: {
            image: {
              src: sun,
              width: 256,
              height: 256
            }
          }
        },
        opacity: {
          value: 1,
          random: false,
          animation: {
            enable: true,
            speed: 0.5,
            minimumValue: 0,
            sync: false
          }
        },
        size: {
          value: 64,
          random: {enable: true, minimumValue: 32},
          animation: {
            enable: false,
            speed: 20,
            minimumValue: 0.1,
            sync: false
          }
        },
        links: {
          enable: false,
          distance: 100,
          color: "#ffffff",
          opacity: 0.4,
          width: 1
        },
        life: {
          duration: {
            value: 20
          },
          count: 1
        },
        move: {
          enable: true,
          gravity: {
            enable: true,
            acceleration: -0.5
          },
          speed: 3,
          direction: "top",
          random: false,
          straight: false,
          outModes: {
            default: "destroy",
            bottom: "none"
          },
          attract: {
            enable: true,
            distance: 300,
            rotate: {
              x: 600,
              y: 1200
            }
          }
        }
      },
      interactivity: {
        detectsOn: "canvas",
        events: {
          resize: true
        }
      },
      detectRetina: true,
      background: {
        color: "#000000"
      },
      emitters: {
        direction: "top",
        rate: {
          quantity: 50,
          delay: 0.05
        },
        size: {
          width: 100,
          height: 10
        },
        position: {
          x: 50,
          y: 110
        }
      }
    };
  }, []);
  const [images, setImages] = useState(clouds)
  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
// loadFull(engine); // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
  }, []);

  return (
    <div className={s.movingBackground}>
      <Particles
        // id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            rotate: {
              enable: true,
              direction: "random",
              animation: {
                enable: true,
                speed: 1
              }
            },
            number: {
              value: 10,
              density: {
                enable: true,
                value_area: 1000
              }
            },
            line_linked: {
              enable: false
            },
            move: {
              enable: true,
              speed: 0.3,
              out_mode: "out",
            },
            shape: {
              type: "image",
              images: clouds5
            },
            color: {
              value: "#cc4315"
            },
            size: {
              value: 100,
              random: false,
              anim: {
                enable: true,
                speed: 4,
                size_min: 90,
                sync: false
              }
            }
          },
          retina_detect: false
        }}
      />
    </div>
  )
}
export default MovingBackground;

