import HeroTrois from "../Components/HeroTrois"
import TroisGallery from "../Components/TroisGallery"
import fetchArt from '../assets/js/fetchArt';

function HeroHome() {
    const datafetchArt = fetchArt()
    return (
        <main>
            <HeroTrois />
            <TroisGallery datafetchArt={datafetchArt}/>
        </main>
    )
}

export default HeroHome