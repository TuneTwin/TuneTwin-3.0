import Navbar from "../components/NavBar";

function AppLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
    </>
  );
}

export default AppLayout;
