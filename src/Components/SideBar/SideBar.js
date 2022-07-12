import Logo from '../cells/Logo/Logo';
import { userPageData } from '../../utils/const';
import SideLinks from '../SideLinks/SideLinks';
const SideBar = ({ onClick }) => {
  return (
    <div className='s-b-cntnr'>
      <div className='top-box'>
        <Logo />
        <h1>School Space</h1>
      </div>

      <div className='bottom-box'>
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
    </div>
  );
};
export default SideBar;
