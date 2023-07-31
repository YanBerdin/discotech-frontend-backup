/* eslint-disable no-alert */
/* eslint-disable no-console */
// import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
// == Import : npm
import api from '../../../../api/api';

// == Import : local
import User from '../../../../assets/form/form-icon.png';

// == Import : style
import './UserProfileForm.scss';

// == Component
function UserProfileForm() {
  const [currentFirstname, setCurrentFirstname] = useState('');
  const [currentLastname, setCurrentLastname] = useState('');
  const [currentEmail, setCurrentEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');

  const handleLastName = (evt) => {
    evt.preventDefault();
    api
      .patch('/users/edit/lastname', {
        lastname: currentLastname,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(currentLastname);
        } else {
          alert('Erreur lors de la modification');
        }
      })
      .catch((err) => {
        console.log(`lastname:${currentLastname}`);
        console.error("Une erreur s'est produite lors de la connexion :", err);
      });
  };

  const handleFirstName = (evt) => {
    evt.preventDefault();

    api
      .patch('/users/edit/firstname', {
        firstname: currentFirstname,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(currentFirstname);
        } else {
          alert('Erreur lors de la modification');
        }
      })
      .catch((err) => {
        console.log(`firstname:${currentFirstname}`);
        console.error("Une erreur s'est produite lors de la connexion :", err);
      });
  };

  const handleEmail = (evt) => {
    evt.preventDefault();
    api
      .patch('/users/edit/email', {
        // email: email,
        email: currentEmail,
      })
      .then((res) => {
        if (res.status === 200) {
          // console.log(email);
          console.log(currentEmail);
        } else {
          alert('Erreur lors de la modification');
        }
      })
      .catch((err) => {
        console.log(`email:${currentEmail}`);
        console.error("Une erreur s'est produite lors de la connexion :", err);
      });
  };

  const handlePassword = (evt) => {
    evt.preventDefault();
    api
      .patch('/users/edit/password', {
        password: currentPassword,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(currentPassword);
        } else {
          alert('Erreur lors de la modification');
        }
      })
      .catch((err) => {
        console.log(`password:${currentPassword}`);
        console.error("Une erreur s'est produite lors de la connexion :", err);
      });
  };

  useEffect(() => {
    api.get('/users/detail')
      .then((res) => {
        console.log(res.data);
        setCurrentFirstname(res.data.firstname);
        console.log(currentFirstname);
        setCurrentLastname(res.data.lastname);
        console.log(currentLastname);
        setCurrentEmail(res.data.email);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="Login-Form" action="">
      <div className="Login-Card">
        {/* Login Header : Title and Image */}
        <div className="Header-Container">
          <img className="Header-UserImg" src={User} alt="Logo de personnage" />
          <p className="Header-Title">Modifier mon profil</p>
        </div>
        {/* Login Input : Nom */}
        <form className="Field" onSubmit={handleLastName}>
          <input
            required
            className="Field-Input"
            type="text"
            name="Nom"
            placeholder={currentLastname}
            value={currentLastname || ''} // Warning:`value` prop on `input` should not be null
            onChange={(event) => setCurrentLastname(event.target.value)}
          />
          <button className="Field-Button" type="submit">
            &#x1F589;
          </button>
        </form>
        {/* Login Input : Prénom */}
        <form className="Field" onSubmit={handleFirstName}>
          <input
            required
            className="Field-Input"
            name="firstname"
            type="text"
            placeholder={currentFirstname}
            value={currentFirstname || ''} // Warning:`value` prop on `input` should not be null.
            onChange={(event) => setCurrentFirstname(event.target.value)}
          />
          <button className="Field-Button" type="submit">
            &#x1F589;
          </button>
        </form>

        {/* Login Input : Mail Adress */}
        <form className="Field" onSubmit={handleEmail}>
          <input
            required
            className="Field-Input"
            name="email"
            type="email"
            // placeholder="Adresse e-mail"
            placeholder={currentEmail || ''}
            // value={email || ''} // Warning:`value` prop on `input` should not be null.
            value={currentEmail}
            // onChange={(event) => dispatch(setEmail(event.target.value))}
            onChange={(event) => setCurrentEmail(event.target.value)}
          />
          <button className="Field-Button" type="submit">
            &#x1F589;
          </button>
        </form>

        {/* Login Input : Password Adress */}
        <form className="Field" onSubmit={handlePassword}>
          <input
            required
            className="Field-Input"
            name="password"
            type="password"
            placeholder="Mot de passe"
            // value={password || ''} // Warning:`value` prop on `input` should not be null.
            value={currentPassword || ''}
            // onChange={(event) => dispatch(setPassword(event.target.value))}
            onChange={(event) => setCurrentPassword(event.target.value)}
            autoComplete="off"
          />
          <button className="Field-Button" type="submit">
            &#x1F589;
          </button>
        </form>
      </div>
    </section>
  );
}

// == Export
export default UserProfileForm;
