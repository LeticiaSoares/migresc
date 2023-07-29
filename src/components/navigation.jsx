import React from 'react'
export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
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
            {/*<li>*/}
            {/*  <a href='#features' className='page-scroll'>*/}
            {/*    Programação*/}
            {/*  </a>*/}
            {/*</li>*/}
            <li>
              <a href='#about' className='page-scroll'>
                Quem Somos
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Nossos Cultos
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
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
