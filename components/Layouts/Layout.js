import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import PopupForm from '@/components/Home/PopupForm';


export default function Layout({ children }) {

  return <>
    <Header />
    {/*   <PopupForm />   */}
    <div className="main">
      {children}
    </div>
    {
      <Footer />

    }

  </>;
}
