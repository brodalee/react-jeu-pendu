import React from 'react';

const PenduSchema = ({currentTry}) => {
    const path = "img/" + currentTry + ".jpg";
    return (
            <div className="container">
                <div className="col-md-4"></div>
                <div>
                    <img src={path} alt="pendu" />
                </div>               
            </div>
            );
};

export default PenduSchema;