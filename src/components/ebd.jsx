import React from 'react'
export const Ebd = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Escola Bíblica</h2>
          <p>
            Temos salas para todas as idades.Dos bebês até os mais velhos.
          </p>
        </div>
        <div className='row'>
          <div className='portfolio-items'>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a className="group-photos"
                    // href='img/portfolio/cordeirinhos.jpeg'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Sala de Cordeirinhos</h4>
                    </div>
                    <img
                      src='img/portfolio/cordeirinhos.jpeg'
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
                      // href='img/portfolio/soldados.jpeg'
                      title='Project Title'
                      data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Sala Soldados do Rei</h4>
                    </div>
                    <img
                        src='img/portfolio/soldados.jpeg'
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
                      // href='img/portfolio/videiras.jpeg'
                      title='Project Title'
                      data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Sala Videiras</h4>
                    </div>
                    <img
                        src='img/portfolio/videiras.jpeg'
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
                      // href='img/portfolio/semeadores.jpeg'
                      title='Project Title'
                      data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Sala de Semeadores</h4>
                    </div>
                    <img
                        src='img/portfolio/semeadores.jpeg'
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
                      // href='img/portfolio/jovens.jpeg'
                      title='Project Title'
                      data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Sala Jovens</h4>
                    </div>
                    <img
                        src='img/portfolio/jovens.jpeg'
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
                      // href='img/portfolio/adultos.jpeg'
                      title='Project Title'
                      data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4>Sala de Adultos</h4>
                    </div>
                    <img
                        src='img/portfolio/adultos.jpeg'
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
