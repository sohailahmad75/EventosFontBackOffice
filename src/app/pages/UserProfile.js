import React from 'react';
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import UserInfo from "../components/UserProfile/UserInfo";

const UserProfile = () => {
  return (
    <div>
      <Header/>
      <Banner bannerColor={'#E54B42'} mainHeading={'O meu perfil'}/>
      <UserInfo/>
      <Footer/>
    </div>
  );
};

export default UserProfile;
