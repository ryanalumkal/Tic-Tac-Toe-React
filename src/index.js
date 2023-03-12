// index.js
import React from 'react'
import ReactDOM from 'react-dom'
// To get the root element from the HTML document
//import asabenehImage from './images/asabeneh.jpg'
// JSX element, header
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Ryan',
  lastName: 'Alumkal',
}
const date = 'Oct 2, 2020'


const headerStyles = {
  backgroundColor: '#61DBFB',
  fontFamily: 'Helvetica',
  padding: 25,
  lineHeight: 1.5,
}

// JSX element, header
const header = (
  <header style={headerStyles}>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)

const numOne = 100
const numTwo = 2

const result = (
  <p style={headerStyles}>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 2005
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p style={headerStyles}>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

// JSX element, main
const techs = ['Python', 'React', 'C++', 'C']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)


// JSX element, main
const main = (
  <main style={headerStyles}>
    <div className='main-wrapper'>
      <p>
        My Projects
        :
      </p>
      <ul>{techsFormatted}</ul>
      {result}
      {personAge}
    </div>
  </main>
)

const copyRight = 'Copyright 2020'

// JSX element, footer
const footer = (
  <footer style={headerStyles}>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
)

// JSX element, app
const app = (
  <div className='app'>
    {header}
    {main}
    {footer}
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)