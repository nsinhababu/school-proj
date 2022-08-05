import Logo from '../cells/Logo/Logo';
import { userPageData } from '../../utils/const';
import SideLinks from '../SideLinks/SideLinks';
import arrow from '../../static/images/arrow.svg';
import ArrowBtn from '../ArrowBtn/ArrowBtn';
import { useState } from 'react';
const SideBar = ({ onClick }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className='s-b-cntnr'>
      <div className='top-box'>
        <Logo />
        <h1>School Space</h1>
      </div>

      <div
        style={{
          width: openMenu ? 'fit-content' : null,
          display: openMenu ? 'flex' : null,
          transition: '0.5s',
        }}
        className='bottom-box'
      >
        {userPageData.map((elem, index) => {
          return (
            <div key={`${index}${elem.name}`}>
              <SideLinks
                onClick={onClick}
                path={elem.path}
                src={elem.src}
                text={elem.name}
              />
            </div>
          );
        })}
      </div>
      <ArrowBtn open={openMenu} onClick={handleClick} />
    </div>
  );
};
export default SideBar;
