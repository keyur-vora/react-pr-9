import { FaPlusCircle } from "react-icons/fa";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_USER } from '../redux/action/crud';
import './view.css'

function Add() {
    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");
    const dispatch = useDispatch();

    const handle = (e) => {
        e.preventDefault();
        let obj = {
            id: Math.floor(Math.random() * 1000),
            title,
            note
        };

        if (!title || !note) {
            alert("All fields must be filled . . .");
            return false;
        }

        dispatch(ADD_USER(obj));
        setTitle("");
        setNote("");
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-3 mx-auto border p-4 mb-5 shadow rounded-4">
                    <form className='position-relative rounded-3' onSubmit={handle}>
                        <div className="mb-3">
                            <input 
                                type="text" 
                                className="form-control p-3 rounded-4" 
                                placeholder='Title' 
                                onChange={(e) => setTitle(e.target.value)} 
                                value={title} 
                            />
                        </div>
                        <div className="mb-3">
                            <input 
                                type="text" 
                                className="form-control p-3 rounded-4"
                                style={{
                                 }}
                                placeholder='write something here . . .' 
                                onChange={(e) => setNote(e.target.value)} 
                                value={note} 
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="btn btn-primary position-absolute" 
                            style={{ left: '50%', borderRadius: '30px', width: '50px', height: '50px' }}>
                            <FaPlusCircle style={{ fontSize: '20px', color: 'white' , textAlign:'center' }} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Add;
