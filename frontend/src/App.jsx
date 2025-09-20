// src/App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import useScrollToTop from "./hooks/useScrollToTop";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Clubs from "./pages/Clubs";
import Team from "./pages/Team";
import Support from "./pages/Support";
import Login from "./pages/Login";
import AdminLogin from "./pages/AdminLogin";
import ClubManagement from "./pages/ClubManagement";
import DashBoard from "./pages/DashBoard";
import Footer from "./components/Footer";
import ClubDetail from "./pages/ClubDetail";
import { AnimatePresence } from "framer-motion";
import EventDetail from "./pages/EventDetail";
import OpeningDetail from "./pages/OpeningDetail"; // Import OpeningDetail
import MyEventsOpenings from "./pages/MyEventsOpenings"; // Import MyEventsOpenings
import AdminProtectedRoute from "./components/AdminProtectedRoute";

function App() {
  const location = useLocation();

  useScrollToTop();

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex justify-center items-center px-4 md:px-8 py-6">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/clubs" element={<Clubs />} />
            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="/openings/:id" element={<OpeningDetail />} />{" "}
            {/* Add OpeningDetail route */}
            <Route path="/clubs/:id" element={<ClubDetail />} />
            <Route path="/our-team" element={<Team />} />
            <Route path="/support" element={<Support />} />
            <Route path="/for-clubs" element={<Login />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminProtectedRoute />}>
              <Route index element={<ClubManagement />} />
            </Route>
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/my-events-openings" element={<MyEventsOpenings />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

export default App;
