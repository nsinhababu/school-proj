import NavBar from '../Components/NavBar/NavBar';
import SideBar from '../Components/SideBar/SideBar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Students from './Students';
import Modal from '../Modal/Modal';
import AddStudent from '../Components/AddStudent/AddStudent';
const Main = () => {
  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState('');
  const [newStudent, setNewStudent] = useState(false);
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
        <Outlet context={{ newStudent, setNewStudent }} />
      </div>
      <Modal isOpen={openModal}>
        <AddStudent
          pageName='Add student'
          handleCancel={closeModal}
          setNewStudent={setNewStudent}
        />
      </Modal>
    </div>
  );
};
export default Main;
