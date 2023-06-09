import React from 'react';
import PropTypes from 'prop-types';


export const CardItem = ({title,description}) => {
  return (
    
    <div className="col-12 col-md-7">
            <div className="card mt-3 cards">
                <div className="card-body mt-n3">
                    <h5 className="card-title text-start mt-0  fs-4 fw-semibold ms-2">{title} <i>Onichan</i></h5>
                    <p className="card-tex text-start m-0 fs-5 ms-2 text-cards">{description}</p>
                </div>
            </div>
        </div>
    

  )
}

CardItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
