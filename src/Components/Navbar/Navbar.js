import './Navbar.css'

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="name">Jeremy</div>
      </div>
      <div className="n-right">
        <div className="list">
          <ul style={{listStyleType: 'none'}}>
            <li>
              <a href="#" className="list-item">About</a>
            </li>
            <li>
              <a href="#" className="list-item">Experience</a>
            </li>
            <li>
              <a href="#" className="list-item">Projects</a>
            </li>
          </ul>
        </div>
        <button className='n-button'>Contact</button>
      </div>
    </div>
  )
}

export default Navbar
