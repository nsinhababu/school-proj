import { logDOM } from '@testing-library/react';
import { useState, useEffect, useRef } from 'react';
import InputComp from '../cells/InputComp/InputComp';
import { v4 as uuid } from 'uuid';

const AddStudent = ({
  pageName,
  handleCancel,
  setNewStudent,
  allStudents,
  setAllStudents,
}) => {
  const [nameEr, setNameEr] = useState(false);
  const [classEr, setClassEr] = useState(false);
  const [scoreEr, setScoreEr] = useState(false);
  const [result, setResult] = useState('');
  const [grade, setGrade] = useState('');
  const [disableBtn, setDisableBtn] = useState(true);

  const [studentData, setStudentData] = useState({
    name: '',
    class: '',
    score: '',
  });
  // const [allStudents, setAllStudents] = useState('');

  const noError = !nameEr && !classEr && !scoreEr;

  const formRef = useRef();

  const [erMsg, setErMsg] = useState({
    name: '',
    class: 'Please input values between 1 & 12',
    score: 'Please input values between 0 & 100',
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setStudentData({ ...studentData, [name]: value });
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

  const handleSubmit = () => {
    if (noError) {
      console.log(studentData.id);
      setAllStudents([...allStudents, studentData]);
      // }
      console.log(allStudents);
      // localStorage.removeItem('alSt')
      localStorage.setItem('alSt', JSON.stringify(allStudents));

      setResult('');
      setGrade('');
      setStudentData({
        name: '',
        class: '',
        score: '',
      });
    }
    formRef.current.reset();

    console.log(allStudents);
  };

  useEffect(() => {
    if (studentData.score) {
      // debugger;
      if (studentData.score >= 0 && studentData.score <= 30) {
        setResult('Failed');
        setGrade('Poor');
      }
      if (studentData.score > 30 && studentData.score <= 75) {
        setResult('Passed');
        setGrade('Average');
      }
      if (studentData.score > 75 && studentData.score <= 100) {
        setResult('Passed');
        setGrade('Excellent');
      }
      const unique_id = uuid();
      setStudentData({
        ...studentData,
        id: `${unique_id.slice(0, 4)}${unique_id.slice(10, 14)}`,
      });
    } else {
      setResult('');
      setGrade('');
    }
  }, [studentData.score]);

  useEffect(() => {
    if (result && grade) setStudentData({ ...studentData, result, grade });
  }, [result, grade]);

  useEffect(() => {
    if (scoreEr) {
      setResult('');
      setGrade('');
    }
    if (!scoreEr) {
      setResult(studentData.result);
      setGrade(studentData.grade);
    }
  }, [scoreEr]);
  useEffect(() => {
    if (noError) {
      setDisableBtn(false);
    }
    if (!noError) {
      setDisableBtn(true);
    }
  }, [noError]);

  return (
    <div className='a-s-cntnr'>
      <p className='pageName'>{pageName}</p>

      <hr className='hr' />

      <form
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
          setNewStudent(true);
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
          value={studentData.name}
        />
        <InputComp
          onChange={(e) => {
            handleRange(e, 1, 12, setClassEr);
          }}
          name='class'
          label='CLASS '
          msg={erMsg.class}
          hasEr={classEr}
          value={studentData.class}
        />
        <InputComp
          onChange={(e) => {
            handleRange(e, 0, 100, setScoreEr);
          }}
          name='score'
          label='SCORE'
          msg={erMsg.score}
          hasEr={scoreEr}
          value={studentData.score}
        />
        <div className='result'>
          <p>RESULT</p>
          <span
            style={{
              backgroundColor: !result
                ? 'transparent'
                : result.toLowerCase() == 'failed'
                ? 'red'
                : '#2CBF6E',
              color: result ? 'white' : '#7f878a',
            }}
            className='result-value'
          >
            {result ? result : '-'}
          </span>
        </div>
        <div className='grade'>
          <p>GRADE</p>
          {studentData?.grade ? (
            <span
              style={{
                color:
                  studentData?.grade.toLowerCase() == 'poor'
                    ? 'red'
                    : studentData.grade.toLowerCase() == 'average'
                    ? '#2CA4D8'
                    : '#2CBF6E',
              }}
              className='grade-value'
            >
              {grade}
            </span>
          ) : (
            <span>-</span>
          )}
        </div>

        <hr />

        <div className='a-s-btn-cntnr'>
          <button
            onClick={() => {
              handleCancel();
              setNewStudent(false);
            }}
            className='can-btn'
            type='button'
          >
            CANCEL
          </button>
          <button
            style={{
              backgroundColor: disableBtn ? ' #A8B4B9' : '#2ca4d8',
            }}
            disabled={disableBtn}
            className='cnfrm-btn'
            type='submit'
          >
            CONFIRM
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddStudent;
