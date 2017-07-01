import React, { Component } from 'react';
import './Image.css';

class Image extends Component {
    render() {
        return (
            <div className="tap-wrapper">
                <img className="full-width" src={this.props.url} onClick={this.props.onImageClick}/>
                {this.props.allTaps.map(location => {
                    return <div className="tap" style={{top: location[1]+"px", left: location[0]+"px"}}></div>
                })}
                {this.props.currentTap &&
                    <div className="current-tap" style={{top: this.props.currentTap[1]+"px", left: this.props.currentTap[0]+"px"}}></div>
                }
            </div>
        );
    }
}

export default Image;
