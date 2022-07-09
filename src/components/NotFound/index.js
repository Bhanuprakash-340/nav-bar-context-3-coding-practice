import Navbar from '../Navbar'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundBg = isDarkTheme
        ? 'not-found-container dark-bg'
        : 'not-found-container light-bg'

      const notFoundHeading = isDarkTheme
        ? 'not-found-heading text-light'
        : 'not-found-heading'
      const description = isDarkTheme ? 'description text-light' : 'description'

      return (
        <div className="app-container">
          <Navbar />
          {isDarkTheme ? '' : <hr className="horizontal-line" />}
          <div className={notFoundBg}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found"
            />
            <h1 className={notFoundHeading}>Lost Your Way?</h1>
            <p className={description}>
              We cannot seem to find the page yor are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
