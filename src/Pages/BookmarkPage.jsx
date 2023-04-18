import HeroTrois from "../Components/HeroTrois"
import TroisGallery from "../Components/TroisGallery"
import fetchBookmark from '../assets/js/fetchBookmark';

function BookmarkPage() {
    const datafetchArt = fetchBookmark()
    return (
        <main>
            <HeroTrois />
            <TroisGallery datafetchArt={datafetchArt}/>
        </main>
    )
}

export default BookmarkPage