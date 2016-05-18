import React from 'react';
import debounce from 'lodash.debounce';


const iframeStyle = {
  display: 'block',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  border: 'none',
  background: 'transparent',
  pointerEvents: 'none',
  zIndex: -1
};


export const ReactElementResize = React.createClass({
  propTypes: {
    onResize: React.PropTypes.func,
    debounceTimeout: React.PropTypes.number,
    children: React.PropTypes.func,
    style: React.PropTypes.object
  },


  getDefaultProps() {
    return {
      style: {},
      debounceTimeout: -1,
      onResize: () => {},
      children: () => null
    };
  },


  getInitialState() {
    return {width: -1, height: -1};
  },


  componentWillMount() {
    const {debounceTimeout} = this.props;
    this.onResizeDebounced = debounceTimeout > -1 ?
      debounce(this.onResize, debounceTimeout) :
      this.onResize;
  },


  componentDidMount() {
    this.sensor.contentWindow.addEventListener('resize', this.onResizeDebounced, false);
    this.raf = requestAnimationFrame(this.onResize);
  },


  componentWillUnmount() {
    this.onResizeDebounced.cancel();
    this.sensor.contentWindow.removeEventListener('resize', this.onResizeDebounced, false);
    cancelAnimationFrame(this.raf);
  },


  onResize() {
    const {innerWidth: width, innerHeight: height} = this.sensor.contentWindow;
    const {onResize} = this.props;
    onResize({width, height});
    this.setState({width, height});
  },

  onRef(ref) {
    this.sensor = ref;
  },


  render() {
    const {
      style,
      children: render,
      onResize: _onResize,
      debounceTimeout: _debounceTimeout,
      ...props
    } = this.props;
    const {width, height} = this.state;

    return (
      <div style={{position: 'relative', ...style}} {...props}>
        <iframe ref={this.onRef} style={iframeStyle} />
        {width > -1 && height > -1 ? render({width, height}) : null}
      </div>
    );
  }
});
