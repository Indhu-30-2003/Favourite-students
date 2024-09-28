// ListOfStudents.js
import { useStudentContext } from "./StudentContext";

function ListOfStudents() {
  const { students, setStudents } = useStudentContext();

  function handlelist(id) {
    const updatedStudents = students.map(student =>
      student.id === id ? { ...student, fav: true } : student
    );
    setStudents(updatedStudents);
  }

  return (
    <div>
      <ul>
        {students.map(item => (
          <div key={item.id} className="m-5 flex flex-row w-96 justify-between">
            <li className="text-2xl">{item.id}. {item.name}</li>
            <button
              className={`text-white p-2 rounded-md ${item.fav ? 'bg-gray-600 cursor-not-allowed' : 'bg-black cursor-pointer'}`}
              onClick={() => handlelist(item.id)}
              disabled={item.fav}
              style={{ cursor: item.fav ? 'not-allowed' : 'pointer' }}
            >
              {item.fav ? 'Added to Favourites' : 'Add to Favourites'}
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ListOfStudents;
