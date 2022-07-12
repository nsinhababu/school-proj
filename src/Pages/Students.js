import { useEffect, useState } from 'react';
import StudentCard from '../Components/cells/StudentCard/StudentCard';
import { useOutletContext } from 'react-router-dom';

const Students = () => {
  const [allStudents, setAllStudents] = useState('');
  const { newStudent, setNewStudent } = useOutletContext();
  useEffect(() => {
    if (localStorage.getItem('alSt')) {
      setAllStudents(JSON.parse(localStorage.getItem('alSt')));
    }
  }, []);
  useEffect(() => {
    if (newStudent) {
      setAllStudents(JSON.parse(localStorage.getItem('alSt')));
      setNewStudent(false);
    }
  }, [newStudent]);

  return (
    <>
      <div className='students-cntnr'>
        <div className='s-data-main-cntnr'>
          {allStudents &&
            allStudents.map((student, index) => {
              return (
                <div key={student.id}>
                  <StudentCard
                    obj={student}
                    index={index + 1}
                    setNewStudent={setNewStudent}
                    allStudents={allStudents}
                    setAllStudents={setAllStudents}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
export default Students;
