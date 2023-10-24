import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import OpenApp from './App'
import './public-path'

const getContainer = () => document.querySelector('#root')

async function render(props) {
  ReactDOM.render(<OpenApp {...props} />, getContainer())
}

render({})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
