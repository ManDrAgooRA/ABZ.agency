import './header.scss'
import headerLogo from '../../assets/images/Logo.svg'

export const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <img src={headerLogo} alt="header-logo" />
      </div>
      <div className="header-nav">
        <nav>
          <ul>
            <li><a href="#">Users</a></li>
            <li><a href="#">Sign up</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
