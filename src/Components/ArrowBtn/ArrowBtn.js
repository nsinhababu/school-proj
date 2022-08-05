import arrow from '../../static/images/arrow.svg';
const ArrowBtn = ({ onClick, open }) => {
  return (
    <div onClick={onClick} className='arrow-btn'>
      <img className={open ? 'opened' : null} src={arrow} alt='' />
      {/* <span className='one'></span>
      <span className='two'></span> */}
    </div>
  );
};
export default ArrowBtn;
