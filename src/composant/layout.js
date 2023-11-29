import React from 'react';
import Header from '../pages/header';
import Footer from '../pages/footer';

function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;