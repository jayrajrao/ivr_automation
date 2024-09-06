import { Route, Routes } from "react-router-dom";
import OfferLetterPage from "../components/Main/OfferLetter";
import LOP from "../components/Main/LOP";
import RecommendationForm from "../components/Main/RecommendationForm";
import Sidebar from "../components/Main/Sidebar";
import Hero from "@/components/Main/Hero";
import Admin from "@/components/Admin/Admin";
import AcceptancePage from "@/components/Admin/AcceptancePage";

function RootLayout() {
  return (
    <Routes>
      <Route element={<Sidebar />}>
        <Route path="/" element={<Hero />} />
        <Route path="offer-letter" element={<OfferLetterPage />} />
        <Route path="/promotion-letter" element={<LOP />} />
        <Route path="/recommendation-form" element={<RecommendationForm />} />
        {/* <Route path="/sidebar" element={<Sidebar />} /> */}
        <Route path="/Admin" element={<Admin />} />
        <Route path="/AcceptancePage" element={<AcceptancePage />} />
      </Route>
    </Routes>
  );
}

export default RootLayout;
