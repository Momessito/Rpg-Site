import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Humano from '../races/human.png'
import Elfo from '../races/elf.png'
import Orc from '../races/orc.png'
import Half from '../races/halfDemon.png'
import DragonBorn from '../races/DragonBorn.png'
import fairy from '../races/Fairy.png'
import dwarf from '../races/Dwarf.png'
class Carrosel extends Component {
    render() {
        return (
            <Carousel showThumbs={false}>
                <div>
                    <img src={Humano} />
                    <p className="legend">Humano</p>
                </div>
                <div>
                    <img src={Elfo} />
                    <p className="legend">Elfo</p>
                </div>
                <div>
                    <img src={Orc} />
                    <p className="legend">Orc</p>
                </div>
                <div>
                    <img src={Half} />
                    <p className="legend">Tiefling</p>
                </div>
                <div>
                    <img src={DragonBorn} />
                    <p className="legend">DragonBorn</p>
                </div>
                <div>
                    <img src={dwarf}/>
                    <p className="legend">Anão</p>
                </div>
                <div>
                    <img src={fairy} />
                    <p className="legend">Fada</p>
                </div>
            </Carousel>
        );
    }
};

export default Carrosel