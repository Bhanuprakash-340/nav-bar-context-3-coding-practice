import Navbar from '../Navbar'

import './index.css'
import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const homeBgColor = isDarkTheme
        ? 'home-container dark-bg'
        : 'home-container light-bg'

      const homeHeading = isDarkTheme ? 'light-heading' : ''

      return (
        <div className="app-container">
          <Navbar />
          {isDarkTheme ? '' : <hr className="horizontal-line" />}
          <div className={homeBgColor}>
            <img src={homeImgUrl} alt="home" className="home" />
            <h1 className={homeHeading}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
