import { NavLink } from 'react-router-dom';

const SideLinks = ({ src, text, path, onClick }) => {
  return (
    <NavLink
      onClick={(e) => {
        onClick(e);
      }}
      to={path}
      className='side-link'
    >
      <img className='s-l-img' src={src} alt='' />
      <p className='s-l-txt'>{text}</p>
    </NavLink>
  );
};
export default SideLinks;
