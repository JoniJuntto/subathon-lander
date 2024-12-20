import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Frontpage from "@/pages/frontpage";
import RootLayout from "@/layout";
import Particles from "@/components/ui/particles";
import "./index.css";
import { PostHogProvider } from "posthog-js/react";
const options = {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PostHogProvider
      apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY}
      options={options}
    >
      <BrowserRouter>
        <Particles
          className="absolute min-h-screen inset-0 z-0"
          quantity={100}
          ease={80}
          color={"#fff"}
          refresh
        />
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<Frontpage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PostHogProvider>
  </StrictMode>
);
