import { GamesGrid } from "../components/GamesGrid";
import { HomeContainer } from "../components/HomeContainer";
import { Search } from "../components/Search";

export function LandingPage() {
    return (
        <div>
            <HomeContainer />
            <GamesGrid />
        </div>
    )
}
