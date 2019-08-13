import React from 'react';
import CenterAlignedTable from './CenterAlignedTable';
import SocialLinks from './SocialLinks';

const LandingPage = (props) => {
    return (
        <div className="LandingPage">
            <div>
                <div className="LandingPage__title">
                    Peter Dulworth
                </div>
                <div className="LandingPage__subtitle">
                    <CenterAlignedTable items={[
                        {
                            left: "SWE intern",
                            right: "indeed.com"
                        },
                        {
                            left: "CS",
                            right: "rice university"
                        },
                    ]} />
                    <br/>
                    <SocialLinks />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;