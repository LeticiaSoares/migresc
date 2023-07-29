import React from 'react'
export const Cultos = (props) => {
  return (
    <div id='cultos' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Cultos</h2>
          {/*<p>*/}
          {/*  Temos culto de oração toda sexta as 19:30 via Zoom(link através do instagram) e culto de louvor todo domingo as 18 hrs*/}
          {/*</p>*/}
        </div>
        <div className='row'>
          <div className='portfolio-items'>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a className="group-photos"
                    href='img/portfolio/cultoLouvor.jpeg'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Culto de Adoração</h4>
                    </div>
                    <img
                      src='img/portfolio/cultoLouvor.jpeg'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a className="group-photos"
                      href='img/portfolio/livro.jpeg'
                      title='Project Title'
                      data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Clube do Livro</h4>
                    </div>
                    <img
                        src='img/portfolio/livro.jpeg'
                        className='img-responsive'
                        alt='Project Title'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a className="group-photos"
                      href='img/portfolio/encontro.jpeg'
                      title='Project Title'
                      data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Encontro de Jovens</h4>
                    </div>
                    <img
                        src='img/portfolio/encontro.jpeg'
                        className='img-responsive'
                        alt='Project Title'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
