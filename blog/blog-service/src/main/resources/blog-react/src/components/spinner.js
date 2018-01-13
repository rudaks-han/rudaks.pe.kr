import React, { Component } from 'react';
import { BarLoader } from 'react-spinners';

class Spinner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }
    render() {

        const { loadingEnd } = this.props;

        console.error('loadingEnd : '+ loadingEnd)
        return (
            <div className="loading-div">
                <div className='sweet-loading'>
                   <BarLoader
                     color={ '#FF6458' }
                     loading={!loadingEnd}
                   />
                </div>
            </div>
        );
    }
}

export default Spinner;
