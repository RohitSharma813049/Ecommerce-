import Navbar from "../components/navbar/navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/footer";

function PageLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 mt-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default PageLayout;
