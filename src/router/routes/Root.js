import React from 'react';
import { Outlet } from 'react-router-native';
import Title from '../../components/Title';
import Footer from '../../components/Footer';

export default function Root() {
  return (
    <>
      <Title text="E-commerce" />
      <Outlet />
      <Footer />
    </>
  );
}
