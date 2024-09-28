// FavouriteStudents.js
import { useStudentContext } from "./StudentContext";

function FavouriteStudents() {
  const { students, setStudents } = useStudentContext();
  
  // Filter for favorite students
  const favoriteStudents = students.filter(student => student.fav);

  // Function to remove a student from favorites
  const handleRemove = (id) => {
    const updatedStudents = students.map(student =>
      student.id === id ? { ...student, fav: false } : student
    );
    setStudents(updatedStudents);
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl mb-4">Favourite Students</h1>
      {favoriteStudents.length === 0 ? (
        <p className="text-lg">There are no favorite students.</p>
      ) : (
        <ul>
          {favoriteStudents.map(student => (
            <div className="w-60 flex  justify-between gap-2">
            <li key={student.id} className="text-2xl  items-center  ">{student.id}. {student.name}</li>
             
              <button
                className="bg-red-500 text-white p-1 rounded-md  my-2"
                onClick={() => handleRemove(student.id)}
              >
                Remove
              </button>
            
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavouriteStudents;
