import { useContext } from 'react';
import './Header.css'
import { AppContext } from '../context/AppContext';

const Header = () => {
  const { toggleComments, showComments } = useContext(AppContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" >Post</a>
          <button className="btn comment-btn header-btn" onClick={toggleComments}>{!showComments ? 'Comments Show' : 'Comments Hide'}</button>
        </div>
      </nav>
    </>
  )
}
export default Header;

