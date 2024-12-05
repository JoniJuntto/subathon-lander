import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Frontpage from "@/pages/frontpage";
import RootLayout from "@/layout";
import Particles from "@/components/ui/particles";
import TeamPage from "@/pages/team";

import "./index.css";
import ServicesPage from "@/pages/services";
import ShowcasesPage from "@/pages/showcases";
import ContactPage from "@/pages/contact";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={"#fff"}
        refresh
      />
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Frontpage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/showcase" element={<ShowcasesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
