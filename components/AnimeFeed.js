const { default: AnimeCard } = require("./AnimeCard");

const images = [
  "https://cdn.myanimelist.net/images/anime/4/19644.jpg",
  "https://cdn.myanimelist.net/images/anime/7/20310.jpg",
  "https://cdn.myanimelist.net/images/anime/1796/91065.jpg",
  "https://cdn.myanimelist.net/images/anime/7/21569.jpg",
  "https://cdn.myanimelist.net/images/anime/2/7581.jpg",
];

function AnimeFeed({ animes }) {
  return (
    <div className="max-w-7xl mx-auto mt-4">
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {animes.slice(0, 12).map((anime, i) => (
          <AnimeCard
            key={i}
            image={anime.image_url}
            rank={anime.rank}
            title={anime.title}
            score={anime.score}
          />
        ))}
      </div>
    </div>
  );
}

export default AnimeFeed;
