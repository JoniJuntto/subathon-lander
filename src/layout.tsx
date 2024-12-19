import { Outlet } from "react-router";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar";

export default function RootLayout() {
  return (
    <>
      <aside className="flex justify-center w-full z-40">
        <Navbar />
      </aside>
      <main className="flex flex-col h-full max-w-4xl mt-4">
        <div className="h-full z-10">
          <Outlet />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
