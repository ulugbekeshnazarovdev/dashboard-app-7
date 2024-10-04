import HomeIC, { CreateIC, LibraryIC, LikeIC, SearchIC } from "../constants";
import "../sass/sitebar_left.scss";
import { useNavigate } from "react-router-dom";
const SiteBarLeft = () => {
  const root = useNavigate();

  return (
    <div className="sitebar_left_w">
      <div className="sitebar_icons">
        <div className="icon" onClick={() => root("/")}>
          <HomeIC />
          <p>Home</p>
        </div>
        <div className="icon">
          <SearchIC />
          <p>Search</p>
        </div>
        <div className="icon">
          <LibraryIC />
          <p>Library</p>
        </div>
        <div className="icon" id="create">
          <CreateIC />
          <p>Create</p>
        </div>
        <div className="icon" onClick={() => root("/likes")}>
          <LikeIC />
          <p>Likes</p>
        </div>
      </div>
      <div className="text">
        <div className="text_p">
          <p> Chill Mix</p>
          <p>Insta Hits</p>
          <p>Your Top Songs 2021</p>
          <p>Mellow Songs</p>
          <p>Anime Lofi & Chillhop Music</p>
          <p>BG Afro “Select” Vibes</p>
          <p>Afro “Select” Vibes</p>
          <p>Happy Hits!</p>
          <p>Deep Focus</p>
          <p>Instrumental Study</p>
          <p>OST Compilations</p>
          <p>Nostalgia for old souled mill...</p>
          <p>Mixed Feelings</p>
        </div>
      </div>
    </div>
  );
};

export default SiteBarLeft;
