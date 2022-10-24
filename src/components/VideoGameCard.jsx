

export function VideoGameCard({ game }) {
    return (
        <div>
            <img  src={game.background_image} alt="bgimg" />
            {/* <li>{game.name}</li>
            <li>{game.description}</li> */}
        </div>
    )
}
