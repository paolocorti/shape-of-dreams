import React, { useContext } from 'react';

class ParallaxImage extends React.Component {
  super(props) {
    this.state = {
      transform: null,
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    let scrollTop = event.srcElement.body.scrollTop;
    console.log('handleScroll')
    const itemTranslate = Math.min(0, scrollTop / 3 - 60);

    this.setState({
      transform: itemTranslate
    });
  }

  render() {
    const { src } = this.props;
    const transform = this.state;
    console.log(transform)
    return (
      <div className='image-container' >
        <img src={src} />
      </div>
    )
  }
};

export default ParallaxImage;