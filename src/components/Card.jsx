import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BusinessCard = (props) => {
  const { imgSrc, name, title, email, phone } = props;

  return (
    <div className="card m-3" style={{ width: '18rem' }}>
      <img src={imgSrc} className="card-img-top" alt="Profile" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{title}</p>
        <p className="card-text">{email}</p>
        <p className="card-text">{phone}</p>
        
      </div>
    </div>
    
  );
};

export default BusinessCard;