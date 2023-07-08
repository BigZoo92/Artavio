import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import TriRing from '../TriRing';

function HeroTrois() {
    const location = useLocation();
    const [titre, setTitre] = useState("");
    const [paragraphe, setParagraphe] = useState("");

    useEffect(() => {
        if (location.pathname === "/bookmark") {
            setTitre("<b>Book</b>mark");
            setParagraphe("Stay Connected to Your Favorite Art with Artavio's Digital Gallery Experience - Create Personalized Bookmarks to Easily Revisit and Explore the World of 3D Experimental Art");
        } else {
            setTitre("3D <b>Art</b>");
            setParagraphe("From abstract worlds to photorealistic interiors, this category celebrates exciting three-dimensional images designed in the software of your choice and rendered as JPEG images.");
        }
    }, [location.pathname]);

    return (
        <section className='heroTrois'>
            <h1 dangerouslySetInnerHTML={{ __html: titre }} />
            <p>{paragraphe}</p>
            <button>Discover</button>
                  <TriRing/>
        </section>
    )
}

export default HeroTrois;
