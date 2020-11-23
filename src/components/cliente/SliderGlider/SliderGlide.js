import React from 'react'
import {Link} from 'react-router-dom'
import Glide from "@glidejs/glide";
import "../../../../node_modules/@glidejs/glide/dist/css/glide.core.css"
import "../../../../node_modules/@glidejs/glide/dist/css/glide.theme.css"
import laptop from '../../../imagenes/laptop.png'
import celular from '../../../imagenes/celular.png'
import mouse from '../../../imagenes/mouse.png'
import teclado from '../../../imagenes/teclado.png'
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'

const SliderGlide = () => {

    React.useEffect(() => {
        new Glide(".glide", {
          type: "carousel",
          startAt: 0,
          autoplay: 3000,
          hoverpause: true,
          perView: 1,
          animationDuration: 800,
          animationTimingFunc: 'linear'
        }).mount();
      }, []);

    return (
        <div className="hero">
            <div className="glide">
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        <li className="glide__slide">
                            <div className="hero__center">
                                <div className="hero__left">
                                    <span>Nueva inspiración 2020</span>
                                    <h1>HECHO A TU MEDIDA</h1>
                                    <p>Laptop hecha para los trabajos mas realizados del hogar.</p>
                                    <Link to="/tienda"><button className="hero__btn">EXPLORAR TIENDA</button></Link>
                                </div>
                                <div className="hero__right">
                                    <div className="hero__img-container">
                                        <img src={laptop} alt="laptop" className="banner__01" />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="glide__slide">
                            <div className="hero__center">
                                <div className="hero__left">
                                    <span>Nueva inspiración 2020</span>
                                    <h1>HECHO A TU MEDIDA</h1>
                                    <p>Laptop hecha para los trabajos mas realizados del hogar.</p>
                                    <Link to=""><button className="hero__btn">EXPLORAR TIENDA</button></Link>
                                </div>
                                <div className="hero__right">
                                    <div className="hero__img-container">
                                        <img src={mouse} alt="mouse" className="banner__02" />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="glide__slide">
                            <div className="hero__center">
                                <div className="hero__left">
                                    <span>Nueva inspiración 2020</span>
                                    <h1>HECHO A TU MEDIDA</h1>
                                    <p>Laptop hecha para los trabajos mas realizados del hogar.</p>
                                    <Link to=""><button className="hero__btn">EXPLORAR TIENDA</button></Link>
                                </div>
                                <div className="hero__right">
                                    <div className="hero__img-container">
                                        <img src={celular} alt="celular" className="banner__03" />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="glide__slide">
                            <div className="hero__center">
                                <div className="hero__left">
                                    <span>Nueva inspiración 2020</span>
                                    <h1>HECHO A TU MEDIDA</h1>
                                    <p>Laptop hecha para los trabajos mas realizados del hogar.</p>
                                    <Link to=""><button className="hero__btn">EXPLORAR TIENDA</button></Link>
                                </div>
                                <div className="hero__right">
                                    <div className="hero__img-container">
                                        <img src={teclado} alt="teclado" className="banner__04" />
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="glide__bullets" data-glide-el="controls[nav]">
                    <button className="glide__bullet" data-glide-dir="=0"></button>
                    <button className="glide__bullet" data-glide-dir="=1"></button>
                    <button className="glide__bullet" data-glide-dir="=2"></button>
                    <button className="glide__bullet" data-glide-dir="=3"></button>
                </div>
                <div className="glide__arrows" data-glide-el="controls">
                    <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
                        <FaAngleLeft fontSize="1.8rem"/>
                    </button>
                    <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
                        <FaAngleRight fontSize="1.8rem"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SliderGlide
