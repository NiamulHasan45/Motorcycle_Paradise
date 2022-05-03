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
                            <h3 className="title">November, 2022</h3>
                            <p>It was 2013 when BMW and Toyota first announced they would be entering into a technical partnership, but today, in 2022, things are just getting started; according to Reuters. We are trying to sell their product in Bangladesh. </p>
                        </div>
                    </div>
                    <div className="one-card">
                        <div className="info">
                            <h3 className="title">The Year of 2023</h3>
                            <p>This year will be a blast. Becuase in the meantime, we will be able to rich all motor related behicles. Digitally all the giant company will be in our collaboration. </p>
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