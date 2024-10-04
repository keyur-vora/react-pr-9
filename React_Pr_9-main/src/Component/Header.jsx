import React from 'react'
import './header.css'
import Add from '../Pages/Add'
import View from '../Pages/view'

const Header = () => {
  return (
    <div>
        <header>
            <img src="/public/img/download.png" alt="" />
            <h2>Google Keep</h2>
        </header>
        <Add/>
        <View/>
    </div>
  )
}

export default Header
