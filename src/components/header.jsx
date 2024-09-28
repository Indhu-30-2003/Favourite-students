// Header.js
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import ListOfStudents from "./Listofstudents";
import FavouriteStudents from "./favouriteStudents";
import { StudentProvider } from "./StudentContext"; // Import the StudentProvider

function Header() {
  return (
    <div>
      <BrowserRouter>
        <div className="flex flex-row gap-5 bg-red-400 px-6 py-6">
          <Link to="/" className="text-3xl underline">List Of Students</Link>
          <Link to="/Favouritestudents" className="text-3xl underline">Favourite Students</Link>
        </div>
        
        {/* Wrap routes with StudentProvider */}
        <StudentProvider>
          <Routes>
            <Route path="/" element={<ListOfStudents />} />
            <Route path="/Favouritestudents" element={<FavouriteStudents />} />
          </Routes>
        </StudentProvider>
      </BrowserRouter>
    </div>
  );
}

export default Header;
