import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import ListPlans from "@/components/ListPlans";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="mb-20">
        <Header />
        <ListPlans />
      </div>
      <Footer />
    </>
  );
}
