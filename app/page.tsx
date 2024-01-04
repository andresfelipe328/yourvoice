import LandingAnim from "@/components/layout/layoutAnimations/pageAnims/LandingAnim";
import filter from "@/utils/filters.json";

export default function Home() {
  return (
    <LandingAnim>
      <div className="max-w-7xl mx-auto w-full flex-1 flex p-4">
        <div className="bg-red-200 p-4">
          <h2>Filter Menu</h2>
          <ul className="ml-2">
            <h3>Genres</h3>
            {filter.genres.map((genre, index) => (
              <li key={index}>
                <small>{genre.genre}</small>
              </li>
            ))}
          </ul>

          <ul className="ml-2">
            <h3>Format</h3>
            {filter.formats.map((format, index) => (
              <li key={index}>
                <small>{format.format}</small>
              </li>
            ))}
          </ul>

          <ul className="ml-2">
            <h3>Language</h3>
            {filter.languages.map((language, index) => (
              <li key={index}>
                <small>{language.language}</small>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1  p-4">
          <h2>home page</h2>
        </div>
      </div>
    </LandingAnim>
  );
}
