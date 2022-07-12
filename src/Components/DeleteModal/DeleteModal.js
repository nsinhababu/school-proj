const DeleteModal = ({
  setOpnDlt,
  student,
  allStudents,
  setAllStudents,
  setNewStudent,
}) => {
  const deleteStudent = (id) => {
    if (allStudents.length > 0) {
      const filteredAr = allStudents.filter((student) => student.id != id);
      localStorage.removeItem('alSt');
      localStorage.setItem('alSt', JSON.stringify(filteredAr));
      setAllStudents(JSON.parse(localStorage.getItem('alSt')));
      setNewStudent(true);
    }
  };
  return (
    <>
      <div className='dlt'>
        <p className='d-pg-nm'>Remove student</p>
        <hr />
        <p className='d-warn'>
          Are you sure you want to remove the current student from the list?
        </p>
        <div className='d-nm-cntnr'>
          <p className='first'>STUDENT NAME</p>
          <p className='second'>{student.name}</p>
        </div>
        <div className='d-cls-cntnr'>
          <p className='first'>Class</p>
          <p className='second'>{student.class}</p>
        </div>
        <hr />
        <div className='dlt-btn-cntnr'>
          <button
            className='cncl-btn'
            onClick={() => {
              setOpnDlt(false);
            }}
          >
            Cancel
          </button>
          <button
            className='rmv-btn'
            onClick={() => {
              console.log(student);
              deleteStudent(student.id);
              setOpnDlt(false);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
};
export default DeleteModal;
