import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./page/Landing";

function App() {
    return (
        <div className="flex flex-col justify-between bg-[#fef5f9]">
            <Navbar />
            <Landing />
            <Footer />
        </div>
    );
}

export default App;
