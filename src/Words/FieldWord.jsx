import React from 'react';


const FieldWord = ({onChange, disabled, onClick}) => {
    return (
            <div className="container">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <input className="form-control" type="text" maxLength="1" onChange={onChange} /><br /><br />
                    <button disabled={disabled} onClick={onClick} className="btn btn-primary form-control">Valider</button>
                </div>
            </div>
            );
};

export default FieldWord;