import React from 'react';
import './UserInfo.css';

// Creating the top banner on the User page
function UserInfo(props) {

    return (
    
        <div className='user-info-container'>
            <div className='avatar-container'>
                <svg className='avatar' viewBox="0 0 35 35" data-name="Layer 2"><path d="M17.5,16.383a8.067,8.067,0,1,1,8.067-8.067A8.076,8.076,0,0,1,17.5,16.383Zm0-13.633a5.567,5.567,0,1,0,5.567,5.566A5.573,5.573,0,0,0,17.5,2.75Z" /><path d="M31.477,34.75a1.25,1.25,0,0,1-1.23-1.037A12.663,12.663,0,0,0,17.5,22.852,12.663,12.663,0,0,0,4.753,33.713a1.25,1.25,0,0,1-2.464-.426A15.1,15.1,0,0,1,17.5,20.352,15.1,15.1,0,0,1,32.711,33.287a1.25,1.25,0,0,1-1.02,1.444A1.2,1.2,0,0,1,31.477,34.75Z" /></svg>
                <button onClick={props.onClick} title="Squeeze the day!" className="upload-button">
                    Upload profile photo
                </button>
            </div>

            <div className='user-info'>
                <div className='input-label'>
                    Name:
                    <input id='name-form' className="input-field"
                        placeholder="Full Name"
                    />
                </div>
                <div className='input-label'>
                    Email Address:
                    <input id='email-form' className="input-field"
                        placeholder="Email Address"
                    />
                </div>
                <div className='input-label'>
                    Account Created:
                    <input id='acc-form' className="input-field"
                        placeholder="August 14th 2022"
                    />
                </div>
            </div>
        </div>
    )
};
export default UserInfo;