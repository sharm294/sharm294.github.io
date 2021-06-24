import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

import "./themeChanger.scss"

const ThemeChanger = () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <div className="root">
      <FontAwesomeIcon className="sun" icon={faSun} size="lg"/>
      <label className="switch">
        <input
          type="checkbox"
          onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
          checked={theme === 'dark'}
          onClick={() => {return false}}
        /> {" "}
        <div className="slider"/>
      </label>
      <FontAwesomeIcon className="moon" icon={faMoon} size="lg"/>
      </div>
    )}
  </ThemeToggler>
)

export default ThemeChanger;
