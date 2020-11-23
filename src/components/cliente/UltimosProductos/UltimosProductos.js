import React from 'react'
import catCpu from '../../../imagenes/catCpu.png'
import catMochilas from '../../../imagenes/catMochilas.png'
import catHeadphones from '../../../imagenes/catHeadphones.png'
import catMonitor from '../../../imagenes/catMonitor.png'
import {FaStar} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Glide from "@glidejs/glide";
import "../../../../node_modules/@glidejs/glide/dist/css/glide.core.css"
import "../../../../node_modules/@glidejs/glide/dist/css/glide.theme.css"

const UltimosProductos = () => {

    React.useEffect(() => {
        new Glide(".glide2", {
          type: "carousel",
          startAt: 0,
          hoverpause: true,
          perView: 4,
          animationDuration: 800,
          animationTimingFunc: 'cubic-bezier(.165,.840,.44,.1)',
          breakpoints: {
              1200: {
                  perView: 3
              },
              768: {
                perView: 2
              },
              520: {
                perView: 1
              }
          }
        }).mount();
      }, []);


    return (
        <section className="section ultimos__productos" id="latest">
            <div className="title__container">
                <div className="section__title active" data-id="Latest Products">
                    <h4 className="primary__title">Ultimos Productos</h4>
                </div>
            </div>

            <div className="contenedor">
                <div className="glide2">
                    <div className="glide__track" data-glide-el="track">
                        <ul className="glide__slides latest-center">
                            <li className="glide__slide">
                                <div className="producto">
                                    <div className="producto__header">
                                        <img src={catCpu} alt="" loading="lazy"/>
                                    </div>
                                    <div className="producto__footer">
                                        <h3>Case ultima generacion</h3>
                                        <div className="rating">
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                        </div>
                                        <div className="producto__precio">
                                            <h4>S/. 200</h4>
                                            <Link to="">
                                                <button type="button" className="producto__btn">Añadir al carrito</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="glide__slide">
                                <div className="producto">
                                    <div className="producto__header">
                                        <img src={catMochilas} alt="" loading="lazy"/>
                                    </div>
                                    <div className="producto__footer">
                                        <h3>Mochila portalaptop</h3>
                                        <div className="rating">
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                        </div>
                                        <div className="producto__precio">
                                            <h4>S/. 100</h4>
                                            <Link to="">
                                                <button type="button" className="producto__btn">Añadir al carrito</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="glide__slide">
                                <div className="producto">
                                    <div className="producto__header">
                                        <img src={catMonitor} alt="" loading="lazy"/>
                                    </div>
                                    <div className="producto__footer">
                                        <h3>Monitor LG</h3>
                                        <div className="rating">
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                        </div>
                                        <div className="producto__precio">
                                            <h4>S/. 100</h4>
                                            <Link to="">
                                                <button type="button" className="producto__btn">Añadir al carrito</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="glide__slide">
                                <div className="producto">
                                    <div className="producto__header">
                                        <img src={catHeadphones} alt="" loading="lazy"/>
                                    </div>
                                    <div className="producto__footer">
                                        <h3>Audifonos gamer</h3>
                                        <div className="rating">
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                        </div>
                                        <div className="producto__precio">
                                            <h4>S/. 100</h4>
                                            <Link to="">
                                                <button type="button" className="producto__btn">Añadir al carrito</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UltimosProductos
