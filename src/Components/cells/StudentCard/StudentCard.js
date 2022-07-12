import edit from '../../../static/images/edit.svg';
import remove from '../../../static/images/remove.svg';
import { useEffect, useState } from 'react';
import Modal from '../../../Modal/Modal';
import DeleteModal from '../../DeleteModal/DeleteModal';
import EditModal from '../../EditModal/EditModal';

const StudentCard = ({
  obj,
  index,
  setNewStudent,
  allStudents,
  setAllStudents,
}) => {
  const [opnDlt, setOpnDlt] = useState(false);
  const [student, setStudent] = useState('');
  const [opnEdit, setOpnEdit] = useState(false);
  return (
    <>
      <div className='s-data-cntnr'>
        <p className='index'>{index}</p>
        <p className='name'>{obj.name}</p>
        <p>{obj.class}</p>
        <p>
          <span
            style={{
              backgroundColor:
                obj.result.toLowerCase() == 'failed' ? 'red' : '#2CBF6E',
              color: 'white',
              fontSize: '0.75rem',
              maxWidth: 'fit-content',
              height: '1.55rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '1rem',
              padding: '0 8px',
              lineHeight: '1rem',
              fontWeight: '600',
            }}
          >
            {obj.result}
          </span>
        </p>
        <p>{obj.score}</p>
        <p
          className='grade'
          style={{
            color:
              obj.grade.toLowerCase() == 'poor'
                ? 'red'
                : obj.grade.toLowerCase() == 'average'
                ? '#2CA4D8'
                : '#2CBF6E',
          }}
        >
          {obj.grade}
        </p>
        <div className='edit'>
          <button
            onClick={() => {
              setStudent(obj);
              setOpnDlt(false);
              setOpnEdit(true);
            }}
            className='edit-btn'
          >
            <img src={edit} alt='edit' />
          </button>
          <button
            onClick={() => {
              setStudent(obj);
              console.log(obj);
              setOpnDlt(true);
              setOpnEdit(false);
            }}
            className='remove-btn'
          >
            <img src={remove} alt='delete' />
          </button>
        </div>
      </div>
      <Modal isOpen={opnDlt}>
        <DeleteModal
          setOpnDlt={setOpnDlt}
          student={student}
          allStudents={allStudents}
          setAllStudents={setAllStudents}
          setNewStudent={setNewStudent}
        />
      </Modal>
      <Modal isOpen={opnEdit}>
        <EditModal
          setOpnEdit={setOpnEdit}
          student={student}
          allStudents={allStudents}
          setAllStudents={setAllStudents}
          setNewStudent={setNewStudent}
        />
      </Modal>
    </>
  );
};
export default StudentCard;
