import React from 'react';

export default class HelloText extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
        <div className="main-apps">
            <div className="main-apps-container">
                <div className="main-apps-container-icon">
                    <img src="./src/img/INTEROP.png" title="Interop" alt="Interop"/>
                </div>
            </div>
            <div className="main-apps-container">
                <div className="main-apps-container-icon">
                    <img src="./src/img/PHCHUB.png" title="PHC Hub" alt="PHC Hub"/>
                </div>
            </div>
            <div className="main-apps-container">
                <div className="main-apps-container-icon">
                    <img src="./src/img/ImmuCast.png" title="ImmuCast" alt="ImmuCast"/>
                </div>
            </div>
            <div className="main-apps-container">
                <div className="main-apps-container-icon">
                    <img src="./src/img/SENTINEL.png" title="SENTINEL" alt="SENTINEL"/>
                </div>
            </div>
            <div className="main-apps-container">
                <div className="main-apps-container-icon">
                    <img src="./src/img/SMART.png" title="SMaRT" alt="SMaRT"/>
                </div>
            </div>
            <div className="main-apps-container">
                <div className="main-apps-container-icon">
                    <img src="./src/img/IMMSLINK.png" title="immsLink" alt="immsLink"/>
                </div>
            </div>
            <div className="main-apps-container">
                <div className="main-apps-container-icon">
                    <img src="./src/img/MYIR.png" title="MyIR" alt="MyIR"/>
                </div>
            </div>
            <div className="main-apps-container">
                <div className="main-apps-container-icon">
                    <img src="./src/img/OMS.png" title="OMS+" alt="OMS+"/>
                </div>
            </div>
            <div className="main-apps-container">
                <div className="main-apps-container-icon">
                    <img src="./src/img/VOMS.png" title="VOMS" alt="VOMS"/>
                </div>
            </div>
        </div>
      );
    }
}
