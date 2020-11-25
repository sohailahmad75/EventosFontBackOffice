import React from 'react';
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import UserInfo from "../components/UserProfile/UserInfo";
import UltimosEvento from "../components/UserProfile/UltimosEvento";

const UserProfile = () => {
  return (
    <div>
      <Header/>
      <Banner bannerColor={'#E54B42'} mainHeading={'O meu perfil'}/>
      <UserInfo/>
      <Banner bannerColor={'#1A27C9'} mainHeading={'Histórico de eventos'} subHeading={'Onde já participei.'}/>
      <UltimosEvento/>
      <Footer/>
    </div>
  );
};

export default UserProfile;
