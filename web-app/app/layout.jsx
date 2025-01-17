import React from "react";

import "@/fonts/fonts.css";
import "@/app/global.css";

// Page metadata
export const metadata = {
  title: {
    template: "%s | Messages of Hope",
    default: "Messages of Hope",
    absolute: "Messages of Hope"
  },
  description: "Collecting your messages of hope and spreading them far and wide.",
  keywords: ["Mental Health", "Mental Illness", "BPD", "MOH", "Messages of Hope", "Hope"],
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  }
};

import Header from "@/components/Header/Header.jsx";
import Footer from "@/components/Footer/Footer.jsx";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
};
export default RootLayout;
