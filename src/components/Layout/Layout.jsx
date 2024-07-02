import React, { useEffect, useLayoutEffect } from "react";
import "./Layout.scss";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { App as CapacitorApp } from "@capacitor/app";

console.log("https://example.com/page".split(".com").pop());

const Layout = () => {
  const navigate = useNavigate();

  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  useEffect(() => {
    // Initialize AOS library
    AOS.init({
      // Global settings
      duration: 1500, // Animation duration
      easing: "ease", // Easing option
      once: true, // Whether animation should only happen once
    });
  }, []); // Empty dependency array to ensure useEffect runs only once

  useEffect(() => {
    CapacitorApp.addListener("appUrlOpen", () => {
      // Example URL: https://example.com/page
      // Handle the URL and navigate to the appropriate page
      const slug = event.url.split(".com").pop();
      console.log("xxxxxxxxxxxxxx", slug);
      if (slug) {
        navigate(slug);
      }
    });

    return () => {
      CapacitorApp.removeAllListeners();
    };
  }, [navigate]);

  return (
    <div style={{ overflow: "hidden" }}>
      <Wrapper>
        <Header />
        <Outlet />
        <Footer />
      </Wrapper>
    </div>
  );
};

export default Layout;
