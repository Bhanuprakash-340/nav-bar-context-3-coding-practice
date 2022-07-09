import Navbar from '../Navbar'

import './index.css'
import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutBgColor = isDarkTheme
        ? 'about-container dark-bg'
        : 'about-container light-bg'

      const aboutImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const aboutHeading = isDarkTheme ? 'light-heading' : ''

      return (
        <div className="app-container">
          <Navbar />
          {isDarkTheme ? '' : <hr className="horizontal-line" />}
          <div className={aboutBgColor}>
            <img src={aboutImg} alt="about" className="about" />
            <h1 className={aboutHeading}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
