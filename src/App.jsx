import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ExplorePage from "./pages/ExplorePage";
import opportunityDetails from "./pages/opportunityDetailsPage";
import SavedOpportunitiesPage from "./pages/SavedOpportunitiesPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<ExplorePage />} />
        <Route path="/opportunity/:id" element={<opportunityDetails />} />
        <Route path="/savedOpportunities" element={<SavedOpportunitiesPage />} />
      </Routes>
    </>
  );
}

export default App;
