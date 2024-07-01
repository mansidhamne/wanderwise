import Image from "next/image";
import Navbar from "./components/layout/Navbar";
import LandingPage from "./components/landing-page/page";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <div className="w-screen overflow-x-hidden">
        <Navbar />
        <LandingPage />
        <Footer />
    </div>
  );
}
