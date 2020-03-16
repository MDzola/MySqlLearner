import React from 'react';
import { Link } from 'react-router-dom'


import './header.styles.scss'

const Header = () => (
    <div className='header'>
        <div className='container'>
        <Link  className='logo-container' to="/">

        </Link>
    </div>
    <div class="items">
    <div class="icon-wrapper">
      <i class="fa fa-file-text-o"></i>
    </div>
    <div class="project-name">
      <Link className='option' to='/keywords'><p>[KeyWords]</p></Link>
    </div>
  </div>
  <div class="items">
    <div class="icon-wrapper">
      <i class="fa fa-file-text-o"></i>
    </div>
    <div class="project-name">
      <Link className='option' to='/tests'><p>Tests</p></Link>
    </div>
  </div>
    </div>
)


export default Header;