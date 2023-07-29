import React from 'react'
export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpeg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Quem Somos</h2>
              <p>{props.data ? props.data.title : "carregando..."}</p>
              <b>"{props.data ? props.data.text : "carregando..."}"</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
