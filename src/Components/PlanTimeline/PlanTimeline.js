import React from 'react';
import './PlanTimeline.css'

const PlanTimeline = () => {
    return (
        <div>
            <div className='m-3'>
                <h1>Our Future Plan</h1>
            </div>
            <div className="timeline">
                <div className="outer">
                    <div className="one-card">
                        <div className="info">
                            <h3 className="title">July, 2022</h3>
                            <p>We will contact  with the major company to collaborate with us to launch their product through our site. They are eagerly waiting to be part of our family. </p>
                        </div>
                    </div>
                    <div className="one-card">
                        <div className="info">
                            <h3 className="title">Title 2</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
                    </div>
                    <div className="one-card">
                        <div className="info">
                            <h3 className="title">Title 3</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
                    </div>
                    {/* <div className="one-card">
                        <div className="info">
                            <h3 className="title">Title 4</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
                    </div>
                    <div className="one-card">
                        <div className="info">
                            <h3 className="title">Title 5</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default PlanTimeline;