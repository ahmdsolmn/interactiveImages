import Image from '../components/Image';
import { connect } from 'react-redux';
import { addTap, fetchImage } from '../actions';
import React, { Component } from 'react';

class ImageContainer extends Component {
    constructor(props) {
        super(props);
        props.fetchImage(this.props.params.imageId);
    }

    render() {
        return (<Image 
            url={this.props.url}
            allTaps={this.props.allTaps}
            currentTap={this.props.currentTap}
            onImageClick={this.props.onImageClick}
        />)
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        url: state.image.url,
        allTaps: state.taps.All,
        currentTap: state.taps.Current,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onImageClick: e => {
        dispatch(addTap([e.nativeEvent.offsetX, e.nativeEvent.offsetY]))
    },
    fetchImage: imageId => dispatch(fetchImage(imageId)),
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ImageContainer); 

