import './Header.css'

const Header = ({toggleComments, showComments}) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" >Post</a>
          {showComments ?
            <button className="btn comment-btn header-btn" onClick={toggleComments}>Hide</button> :
            <button className="btn comment-btn header-btn" onClick={toggleComments}>Show</button>
          }
        </div>
      </nav>
    </>
  )
}
export default Header;

