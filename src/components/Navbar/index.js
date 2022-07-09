import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const websiteLogoImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const navbarBgColor = isDarkTheme
        ? 'nav-bar-container dark'
        : 'nav-bar-container'

      const themeImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const navLinks = isDarkTheme ? 'nav-link light' : 'nav-link'

      const onToggleTheme = () => {
        toggleTheme()
      }

      return (
        <nav className={navbarBgColor}>
          <img
            src={websiteLogoImgUrl}
            alt="website logo"
            className="dark-logo"
          />
          <ul className="navbar-items-container">
            <Link to="/" className={navLinks}>
              <li>Home</li>
            </Link>
            <Link to="/about" className={navLinks}>
              <li>About</li>
            </Link>
          </ul>
          <button
            type="button"
            className="theme-button"
            testid="theme"
            onClick={onToggleTheme}
          >
            <img src={themeImageUrl} alt="theme" className="dark-theme" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
