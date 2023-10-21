import React, {useEffect} from "react";
import './main.css';
import img from '../../Assets/img.jpg';
import img2 from '../../Assets/img2.jpg';
import img3 from '../../Assets/img3.jpg';
import img4 from '../../Assets/img4.jpg';
import img5 from '../../Assets/img5.jpg';
import img6 from '../../Assets/img6.jpg';
import img7 from '../../Assets/img7.jpg';
import img8 from '../../Assets/img8.jpg';
import img9 from '../../Assets/img9.jpg';
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
    {
        id: 1,
        imgSrc: img,
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Bora Bora is the ultimate destination for couples looking for a true tropical paradise. There is so much to do and see, whether it be taking a stroll along the beach or exploring underwater adventures. The overwater bungalows, crystal clear waters, and lush vegetation make it the ultimate setting for romance.'
    },
    {
        id: 2,
        imgSrc: img2,
        destTitle: 'Machu Picchu',
        location: 'Peru',
        grade: 'CULTURAL RELAX',
        fees: '$600',
        description: 'It is considered as the most amazing urban creation of the Inca Empire and one of the most important heritage sites in the world. It sits on top of a mountain, 2.430 meters in the tropical forest, offering spectacular scenery with significant endemic biodiversity of flora and fauna.'
    },
    {
        id: 3,
        imgSrc: img3,
        destTitle: 'Great Barrier Reef',
        location: 'Australia',
        grade: 'CULTURAL RELAX',
        fees: '$850',
        description: 'The Great Barrier Reef is unique as it extends over 14 degrees of latitude, from shallow estuarine areas to deep oceanic waters. Within this vast expanse is a unique range of ecological communities, habitats and species all of which make the Reef one of the most complex natural ecosystems in the world.'
    },
    {
        id: 4,
        imgSrc: img4,
        destTitle: 'Cappadocia',
        location: 'Turkey',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Cappadocia is located in the middle of Turkey. The fairytale landscape is mainly famous for its “fairy chimneys.” These bizarre rock pillars were created because the rainwater washed away the soft stone at the bottom faster than the hard stone at the top'
    },
    {
        id: 5,
        imgSrc: img5,
        destTitle: 'Guanajuato',
        location: 'Mexico',
        grade: 'CULTURAL RELAX',
        fees: '$1100',
        description: 'Guanajuato is known for its local hero, El Pípila, as well as its underground tunnels, silver mines, and of course, the many gorgeous colorful alleyways.'
    },
    {
        id: 6,
        imgSrc: img6,
        destTitle: 'Cinque Terre',
        location: 'Italy',
        grade: 'CULTURAL RELAX',
        fees: '$900',
        description: 'a remarkable cultural landscape created by human endeavor over a millennium in a rugged and dramatic natural environment. It represents the harmonious interaction between people and nature to produce a landscape of exceptional scenic quality.'
    },
    {
        id: 7,
        imgSrc: img7,
        destTitle: 'Angkor Wat',
        location: 'Cambodia',
        grade: 'CULTURAL RELAX',
        fees: '$600',
        description: 'Angkor Wat is an enormous Buddhist temple complex located in northern Cambodia. It was originally built in the first half of the 12th century as a Hindu temple. Spread across more than 400 acres, Angkor Wat is said to be the largest religious monument in the world.'
    },
    {
        id: 8,
        imgSrc: img8,
        destTitle: 'Taj Mahal',
        location: 'India',
        grade: 'CULTURAL RELAX',
        fees: '$500',
        description: 'the jewel of Muslim art in India and one of the universally admired masterpieces of the world heritage. The building and grounds are also entirely symmetrical, giving the mausoleum complex an air of ease and tranquility. This makes it the ideal resting place for a queen.'
    },
    {
        id: 9,
        imgSrc: img9,
        destTitle: 'Bali Island',
        location: 'Indonesia',
        grade: 'CULTURAL RELAX',
        fees: '$800',
        description: 'Bali Indonesia. Also known as the Land of the Gods, Bali appeals through its sheer natural beauty of looming volcanoes and lush terraced rice fields that exude peace and serenity. It is also famous for surfers paradise!'
    }
]
const Main = () => {

    useEffect(()=> {
        Aos.init({duration: 2000})
    }, [])

    return (
        <section className="main container section">

            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Most visited destinations
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
                        return(
                            <div key={id} data-aos="fade-up" className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className="icon"/>
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className="btn flex">
                                        DETAILS <HiOutlineClipboardCheck className="icon" />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </section>
    )
}

export default Main