import Navbar from "../components/navbar/navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/footer";

function PageLayout() {
  return (
    <>
   <header>   <Navbar /></header>

      <main className="px-6 py-4">
        <Outlet />
      </main>
    <footer>
        
<Footer/>

    </footer>
      
    </>
  );
}

export default PageLayout;
