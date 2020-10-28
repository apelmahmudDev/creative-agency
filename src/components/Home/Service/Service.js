import React from 'react';
import { Link } from 'react-router-dom';
import serviceIcon from '../../../images/icons/service5.png';
import {useSpring, animated} from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Service = ({service}) => {

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    
    return (
        <Link to={`/dashboard/order/${service._id}`} style={{textDecoration: 'none'}}>
            <div className="col mb-4">
                <animated.div
                    className="card h-100 client-card"
                    onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                    onMouseLeave={() => set({ xys: [0, 0, 1] })}
                    style={{ transform: props.xys.interpolate(trans) }}
                >
                    <div className="text-center">
                        <img className="card-img-top" src={service.img || serviceIcon} alt=""/>
                    </div>
                    <div className="card-body">
                    <h5 className="card-title text-brand">{service.title}</h5>
                    <h5 className="card-text text-success">${service.price}</h5>
                    <p className="card-text text-brand">{service.description}</p>
                    </div>
                </animated.div>
            </div>
        </Link>
    );
};

export default Service;