/* eslint-disable no-console */
import { Link } from 'react-router-dom';
// import favoritesAlbumsData from '../../../data/data';
import { useSelector } from 'react-redux';
// import AlbumCard from '../../HomePage/AlbumCard/AlbumCard';
import './UserProfile.scss';
import FavoriteCard from '../../Favorites/FavoriteCard/FavoriteCard';
import UserProfileForm from './UserProfileForm/UserProfileForm';

function UserProfile() {
  const favorites = useSelector((state) => state.user.favorites);
  console.log(favorites);

  return (
    <div className="UserProfileContainer">
      <UserProfileForm />
      <h2 className="HomePage-Title">Mes Favoris &#x2661;</h2>
      <section className="SmartphoneContainer">
        <div className="Favorites-Container">
          {/* {favoritesAlbumsData.slice(0, 4).map((album) => ( */}
          {favorites.slice(0, 4).map((favorite) => (
            <FavoriteCard
              className="Favorites-Card"
              albumname={favorite.album?.name}
              artistfullname={favorite.album?.artist?.fullname ?? 'Artiste inconnu'}
              image={favorite.album?.image}
              id={favorite.album?.id}
            />
          ))}
        </div>
      </section>
      <section className="MediumContainer">
        <div className="Favorites-Container">
          {favorites.slice(0, 8).map((favorite) => (
            <FavoriteCard
              className="Favorites-Card"
              albumname={favorite.album?.name}
              artistfullname={favorite.album?.artist?.fullname ?? 'Artiste inconnu'}
              image={favorite.album?.image}
              id={favorite.album?.id}
            />
          ))}
        </div>
      </section>
      <section className="PcContainer">
        <div className="Favorites-Container">
          {favorites.slice(0, 10).map((favorite) => (
            <FavoriteCard
              className="Favorites-Card"
              albumname={favorite.album?.name}
              artistfullname={favorite.album?.artist?.fullname ?? 'Artiste inconnu'}
              image={favorite.album?.image}
              id={favorite.album?.id}
            />
          ))}
        </div>
      </section>
      <Link className="HomePage-Link" to="/favoris">
        Voir plus
      </Link>
    </div>
  );
}

export default UserProfile;
