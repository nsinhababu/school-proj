import { useState, useEffect } from 'react';
import InputComp from '../cells/InputComp/InputComp';

//import uuid v4
import { v4 as uuid } from 'uuid';
const EditModal = ({
  setOpnEdit,
  student,
  allStudents,
  setAllStudents,
  setNewStudent,
}) => {
  const [crntStudent, setCrntStudent] = useState(student);
  const [nameEr, setNameEr] = useState(false);
  const [classEr, setClassEr] = useState(false);
  const [scoreEr, setScoreEr] = useState(false);
  const [result, setResult] = useState('');
  const [grade, setGrade] = useState('');

  const noError = !nameEr && !classEr && !scoreEr;

  const [erMsg, setErMsg] = useState({
    name: '',
    class: 'Please input values between 1 & 12',
    score: 'Please input values between 0 & 100',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCrntStudent({ ...crntStudent, [name]: value });
  };

  const handleError = (e, value) => {
    const name = e.target.name;
    setErMsg({ ...erMsg, [name]: value });
  };

  const handleName = (e) => {
    if (e.target.value) {
      handleChange(e);
      handleError(e, '');
      setNameEr(false);
    }
    if (!e.target.value) {
      handleError(e, 'Error: Name field cannot be left blank');
      setNameEr(true);
    }
  };
  const handleRange = (e, min, max, method) => {
    const inpVal = e.target.value;
    if (inpVal >= min && inpVal <= max) {
      handleChange(e);
      handleError(e, `Please input values between ${min} & ${max}`);
      method(false);
    }
    if (inpVal < min || inpVal > max) {
      handleChange(e);

      handleError(e, `Error: Please input values between ${min} & ${max}`);
      method(true);
    }
  };

  useEffect(() => {
    if (crntStudent.score) {
      // debugger;
      if (crntStudent.score >= 0 && crntStudent.score <= 30) {
        setCrntStudent({ ...crntStudent, result: 'Failed', grade: 'Poor' });
      }
      if (crntStudent.score > 30 && crntStudent.score <= 75) {
        setCrntStudent({ ...crntStudent, result: 'Passed', grade: 'Average' });
      }
      if (crntStudent.score > 75 && crntStudent.score <= 100) {
        setCrntStudent({
          ...crntStudent,
          result: 'Passed',
          grade: 'Excellent',
        });
      }
    } else {
      setCrntStudent({ ...crntStudent, result: '' });
      setCrntStudent({ ...crntStudent, grade: '' });
    }
  }, [crntStudent.score]);

  const handleSubmit = () => {
    if (noError) {
      const unique_id = uuid();
      crntStudent.id = `${unique_id.slice(0, 4)}${unique_id.slice(10, 14)}`;
      allStudents.push(crntStudent);
      let editedData = allStudents.filter((data) => data.id != student.id);

      setAllStudents(editedData);
      localStorage.setItem('alSt', JSON.stringify(editedData));
      setOpnEdit(false);
      setNewStudent(true);
      console.log(JSON.parse(localStorage.getItem('alSt')));
      console.log(editedData);
    }
  };
  return (
    <div className='a-s-cntnr'>
      <p className='pageName'>Edit Student</p>

      <hr className='hr' />

      <form
        // ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className='inp-form'
        action=''
      >
        <InputComp
          onChange={(e) => {
            handleName(e);
          }}
          name='name'
          label='STUDENT NAME'
          msg={erMsg.name}
          hasEr={nameEr}
          value={crntStudent.name}
        />
        <InputComp
          onChange={(e) => {
            handleRange(e, 1, 12, setClassEr);
          }}
          name='class'
          label='CLASS '
          msg={erMsg.class}
          hasEr={classEr}
          value={crntStudent.class}
        />
        <InputComp
          onChange={(e) => {
            handleRange(e, 0, 100, setScoreEr);
          }}
          name='score'
          label='SCORE'
          msg={erMsg.score}
          hasEr={scoreEr}
          value={crntStudent.score}
        />
        <div className='result'>
          <p>RESULT</p>
          <span
            style={{
              backgroundColor:
                crntStudent.result.toLowerCase() == 'failed'
                  ? 'red'
                  : '#2CBF6E',
              color: 'white',
            }}
            className='result-value'
          >
            {crntStudent.result}
          </span>
        </div>
        <div className='grade'>
          <p>GRADE</p>
          <span
            style={{
              color:
                crntStudent.grade.toLowerCase() == 'poor'
                  ? 'red'
                  : crntStudent.grade.toLowerCase() == 'average'
                  ? '#2CA4D8'
                  : '#2CBF6E',
            }}
            className='grade-value'
          >
            {crntStudent.grade}
          </span>
        </div>

        <hr />

        <div className='a-s-btn-cntnr'>
          <button
            onClick={() => {
              setOpnEdit(false);
              setNewStudent(false);
            }}
            className='can-btn'
            type='button'
          >
            CANCEL
          </button>
          <button className='cnfrm-btn' type='submit'>
            CONFIRM
          </button>
        </div>
      </form>
    </div>
  );
};
export default EditModal;
