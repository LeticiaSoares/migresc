import React, {useState} from 'react'
import classNames from 'classNames'
export const Navigation = (props) => {
  const handleOnclick = (anchor)=>{
    const myDiv = document.getElementById('bs-example-navbar-collapse-1');
    myDiv.classList.remove('in');
    window.location.href = window.location.pathname + anchor
  }
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className={classNames('navbar-toggle')}
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top' style={{color: '#ffffff'}}>
            IEPEM
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a  className='page-scroll' onClick={()=>handleOnclick('#about')}>
                Quem Somos
              </a>
            </li>
            <li>
              <a className='page-scroll'  onClick={()=>handleOnclick('#services')}>
                Nossos Cultos
              </a>
            </li>
            <li>
              <a className='page-scroll' onClick={()=>handleOnclick('#portfolio')}>
                Galeria
              </a>
            </li>
            {/*<li>*/}
            {/*  <a href='#testimonials' className='page-scroll'>*/}
            {/*    Vídeos*/}
            {/*  </a>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*  <a href='#team' className='page-scroll'>*/}
            {/*    Team*/}
            {/*  </a>*/}
            {/*</li>*/}
            <li>
              <a target="_blank" href='https://www.instagram.com/iepermelino/' className='page-scroll'>
                Instagram
              </a>
            </li>
            <li>
              <a target="_blank" href='https://www.youtube.com/@iepemmigresc782' className='page-scroll'>
                Youtube
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
