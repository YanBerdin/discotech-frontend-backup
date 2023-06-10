/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable max-len */
import './Header.scss';

import videoBg from '../../assets/videoBg.mp4';

function Header() {
  return (
    <div className="main">
      <div className="overlay" />
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
        <h1 className="md:text-5xl text-3xl text-white font-extrabold mb-5 md:text-center">
          Get ready to experience{' '}
          <span className="md:text-[#C07F00] text-white">DISC'OTECH</span>
        </h1>
        <p className="mb-2 md:text-center md:text-lg md:text-gray-100 text-white texte">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, asperiores.
        </p>
      </div>
    </div>
  );
}
export default Header;
