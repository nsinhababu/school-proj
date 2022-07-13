import NavBar from '../Components/NavBar/NavBar';
import SideBar from '../Components/SideBar/SideBar';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Students from './Students';
import Modal from '../Modal/Modal';
import AddStudent from '../Components/AddStudent/AddStudent';
const Main = () => {
  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState('');
  const [newStudent, setNewStudent] = useState(false);
  const [allStudents, setAllStudents] = useState([]);

  useEffect(() => {
    if (allStudents.length == 0 && localStorage.getItem('alSt')) {
      setAllStudents(JSON.parse(localStorage.getItem('alSt')));
      // console.log(JSON.parse(localStorage.getItem('alSt')));
    }
  }, []);
  const handleModal = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const handleTitle = (e) => {
    setTitle(e.target.innerText);
  };
  return (
    <div className='container'>
      <div className='nav-cntnr'>
        <NavBar crntContent={title} handleModal={handleModal} />
      </div>
      <div className='side-bar-cntnr'>
        <SideBar onClick={handleTitle} />
      </div>
      <div className='main-cntnr'>
        <Outlet
          context={{ newStudent, setNewStudent, allStudents, setAllStudents }}
        />
      </div>
      <Modal isOpen={openModal}>
        <AddStudent
          pageName='Add student'
          handleCancel={closeModal}
          setNewStudent={setNewStudent}
          allStudents={allStudents}
          setAllStudents={setAllStudents}
        />
      </Modal>
    </div>
  );
};
export default Main;
