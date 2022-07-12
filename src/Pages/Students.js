import { useEffect, useState } from 'react';
import StudentCard from '../Components/cells/StudentCard/StudentCard';
import { useOutletContext } from 'react-router-dom';

const Students = () => {
  const { newStudent, setNewStudent, allStudents, setAllStudents } =
    useOutletContext();

  return (
    <>
      <div className='students-cntnr'>
        <div className='s-data-main-cntnr'>
          <div
            style={{
              backgroundColor: ' #F1F4F8',
              borderRadius: '0.625rem 0.625rem 0 0',
            }}
            className='hdng s-data-cntnr'
          >
            <p className='index'>No.</p>
            <p className='name'>Student Name</p>
            <p>Class</p>
            <p>Result</p>
            <p>Score</p>
            <p>Grade</p>
            <p className='edit'></p>
          </div>

          {allStudents.length ? (
            allStudents &&
            [
              ...new Set(
                allStudents.map((st) => ({
                  name: st.name,
                  class: st.class,
                  score: st.score,
                  result: st.result,
                  grade: st.grade,
                  id: st.id,
                }))
              ),
            ].map((student, index) => {
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
            })
          ) : (
            <h2 style={{ margin: '50px auto' }}>Add Student</h2>
          )}
        </div>
      </div>
    </>
  );
};
export default Students;
