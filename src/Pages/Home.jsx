import HeroHome from '../Components/HeroHome'
import Artwork from '../Components/Artwork'
import { QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

function Home() {
    return (
        <main>
            <HeroHome/>
            <QueryClientProvider client={queryClient}>
                <Artwork />
            </QueryClientProvider>
        </main>
    )
}
 
export default Home