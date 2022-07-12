import addIcon from '../../static/images/addIcon.svg';

const NavBar = ({ crntContent, handleModal }) => {
  return (
    <nav className='nav'>
      <p className='pg-nm'>{crntContent}</p>
      <button
        className='add-btn'
        type='button'
        onClick={() => {
          handleModal();
        }}
      >
        <img className='add-img' src={addIcon} alt='' />
        <span>Add</span>
      </button>
    </nav>
  );
};
export default NavBar;
