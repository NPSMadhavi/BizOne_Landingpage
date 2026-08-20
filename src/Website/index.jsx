import "./website.css";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import ContentProtection from "./components/ContentProtection";

/** Exact BizOne landing page from Downloads/BizOne_landing_page */
export default function WebsiteLanding() {
  return (
    <div className="bizone-landing">
      <ContentProtection />

      <Navbar />
      <LandingPage />
    </div>
  );
}