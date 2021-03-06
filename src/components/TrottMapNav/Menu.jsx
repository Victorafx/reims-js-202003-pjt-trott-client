import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import User from '../../Image/user.png';
import Gift from '../../Image/gift.png';
import BurgerMenu from '../../Image/menu_icon3x.png';
import Tree from '../../Image/tree2x.png';
import 'react-toastify/dist/ReactToastify.css';

const mapStateToProps = (state) => ({
  token: state.token,
});

function Burger(props) {
  const notify = () => toast.info('Tu dois être connecté pour ouvrir le menu !');
  if (props.token !== null) {
    return (
      <Menu width="100vw" customBurgerIcon={<img src={BurgerMenu} alt="icon" />} className="size">
        <div className="menu_infos">
          <div className="menu_flex">
            <div className="menu_info_1">
              <div>
                <p className="menu_info_important">4</p>
                courses effectués
              </div>
            </div>
            <div className="menu_info_1">
              <p className="menu_info_important">#1</p>
              <div className="menu_info_text">
                Classement général
              </div>
            </div>
            <div className="menu_info_3">
              <p className="menu_info_important">1,2</p>
              Arbres Plantés
            </div>
          </div>
          <div className="user_list">
            <Link className="linkdeco" to="/map/menu">
              <img className="menuImage" src={User} alt="user" />
              Mon compte
            </Link>
          </div>
          <div className="user_list">
            <img className="menuImage" src={User} alt="défi" />
            Les défis
          </div>
          <div className="user_list">
            <img className="menuImage" src={Gift} alt="gift" />
            Parrainage
          </div>
          <div className="user_list">
            <img className="menuImage" src={Tree} alt="tree" />
            Environnement
          </div>
        </div>
      </Menu>
    );
  } return (
    <>
      <ToastContainer />
      <Menu width="100vw" customBurgerIcon={<img src={BurgerMenu} alt="icon" />} className="size-no-connect">
        <div className="user_stat">
          <p className="user_no_stat">  Se connecter pour voir les statistiques</p>
        </div>
        <div onClick={notify} className="user_list">
          <img className="menuImage" src={User} alt="user" />
          Mon compte
        </div>
        <div onClick={notify} className="user_list">
          <img className="menuImage" src={User} alt="défi" />
          Les défis
        </div>
        <div onClick={notify} className="user_list">
          <img className="menuImage" src={Gift} alt="gift" />
          Parrainage
        </div>
        <div onClick={notify} className="user_list">
          <img className="menuImage" src={Tree} alt="tree" />
          Environnement
        </div>
        <div className="user_list">
          <Link to="/register" className="user-login-register">
            s'inscrire /se connecter
          </Link>
        </div>
      </Menu>
    </>
  );
}

export default connect(mapStateToProps)(Burger);
