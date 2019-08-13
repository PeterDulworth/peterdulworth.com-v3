import React, { useContext } from 'react';
import CenterAlignedTable from './CenterAlignedTable';
import SocialLinks from './SocialLinks';
import { ThemeContext } from '../contexts/themeContext.js';

const LandingPage = (props) => {
    const theme = useContext(ThemeContext);

    console.log(theme.getThemeClass('LandingPage__subtitle'));
    const subtitleThemeClass = theme.getThemeClass('LandingPage__subtitle');

    return (
        <div className="LandingPage">
            <div>
                <div className="LandingPage__title">
                    Peter Dulworth
                </div>
                <div className={`LandingPage__subtitle ${subtitleThemeClass}`}>
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