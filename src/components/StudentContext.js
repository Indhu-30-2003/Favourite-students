// StudentContext.js
import React, { createContext, useState, useContext } from "react";

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([
    { id: 1, name: "Mike", fav: false },
    { id: 2, name: "Navin", fav: false },
    { id: 3, name: "Praveen", fav: false },
    { id: 4, name: "Akash", fav: false },
    { id: 5, name: "Suresh", fav: false },
    { id: 6, name: "Hari", fav: false },
    { id: 7, name: "Kavin", fav: false },
  ]);

  return (
    <StudentContext.Provider value={{ students, setStudents }}>
      {children}
    </StudentContext.Provider>
  );
};

export const useStudentContext = () => useContext(StudentContext);
