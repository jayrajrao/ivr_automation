// import { Route, Routes } from "react-router-dom";
// import RootLayout from "./layouts/RootLayout";
// import OfferLetterPage from "./pages/OfferLetter";
// import { Input } from "./components/ui/input";
// <<<<<<< master
// import MyForm from "./pages/MyForm";
// =======
// import LOP from "./pages/LOP";
// >>>>>>> master

// function App() {
//   return (
//     <Routes>
//       <Route element={<RootLayout />}>
// <<<<<<< master
//         <Route path="/" element={<h1><Input label="Email address" type="email" id="email" /></h1>} />
//         <Route path="/offerlatter" element={<OfferLetterPage />} />
//         {/* TODO: add the other pages here */}
//         <Route path="/lorform" element={<MyForm/> }  />
// =======
//         <Route path="/" element={<h1><Input /></h1>} />
//         <Route path="offer-letter" element={<OfferLetterPage />} />
//         <Route path="/promotion-letter" element={<LOP />} />
// >>>>>>> master
//       </Route>
//     </Routes>
//   );
// }

// export default App;

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RootLayout from "./layouts/RootLayout";

const App = () => {
  return (
    <main>
      <Navbar />
      <RootLayout />
      <Footer />
    </main>
  );
};

export default App;
