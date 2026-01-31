import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

export const Particulas = () => {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        // console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: true,
                style: {
                    position: "relative",
                    zIndex: -1,
                    height: "100vh",
                },
                particles: {
                    number: {
                      value: 355,
                      density: {
                        enable: true,
                        value_area: 789.1476416322727
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
                        src: "img/github.svg",
                        width: 100,
                        height: 100
                      }
                    },
                    opacity: {
                      value: 0.48927153781200905,
                      random: false,
                      anim: {
                        enable: true,
                        speed: 0.2,
                        opacity_min: 0,
                        sync: false
                      }
                    },
                    size: {
                      value: 2,
                      random: true,
                      anim: {
                        enable: true,
                        speed: 3,
                        size_min: 0,
                        sync: false
                      }
                    },
                    line_linked: {
                      enable: false
                    },
                    move: {
                      enable: true,
                      speed: 0.2,
                      direction: "none",
                      random: true,
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
                fpsLimit: 120,
                retina_detect: true
            }}
        />
    );
};