import React, { useEffect } from 'react';
import { AiFillDelete } from "react-icons/ai";
import { MdEditSquare } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_USER, EDIT_USER } from '../redux/action/crud';
import { useNavigate } from 'react-router-dom';
import './view.css'

const View = () => {
    const dispatch = useDispatch();
    const record = useSelector(state => state.crud.users);
    const navigate=useNavigate()

   

    return (
        <div>
            <div className="container">
                <div className="row">
                    {record.map((val) => (
                        <div key={val.id} className="col-lg-3 mt-3">
                            <div className="card shadow" style={{ width: '18rem',height:'10rem' }}>
                                <div className="card-body">
                                    <h5 className="card-title" style={{ textAlign: 'center' }}>{val.title}</h5>
                                    <p className="card-text" style={{ textAlign: 'center' }}>{val.note}</p>
                                    <button 
                                        type="button" 
                                        onClick={() => dispatch(DELETE_USER(val.id))} 
                                        className="btn btn-danger" 
                                        style={{ position: 'absolute', right: '10px', borderRadius: '50%', width: '50px', height: '50px' }}>
                                        <AiFillDelete style={{ fontSize: '20px', color: 'white' }} />
                                    </button>
                                    <button 
                                        type="button" 
                                        onClick={() => navigate('/edit',{state:val})} 
                                        className="btn btn-dark" 
                                        style={{ position: 'absolute', left: '10px', borderRadius: '50%', width: '50px', height: '50px' }}>
                                        <MdEditSquare style={{ fontSize: '20px', color: 'white' }} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default View;
