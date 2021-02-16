import React from 'react';
// import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { createPlugin, connect } from "@mapstore/utils/PluginsUtils";
import {get} from 'lodash';

class SampleComponent extends React.Component {
    static propTypes = {
        zoom: PropTypes.number
    };

    render() {
        const style = {position: "absolute", top: "100px", left: "100px", zIndex: 1000};
        return <div style={style}>Zoom: {this.props.zoom}</div>;
    }
}

export default createPlugin('Sample', {
    component: connect((state) => ({
        zoom: get(state, 'map.present.zoom')
    }))(SampleComponent)
});

// export default SamplePlugin = SampleComponent;
// // the Plugin postfix is mandatory, avoid bugs by calling all your descriptors
// // <Something>Plugin

// // const ConnectedSample = connect((state) => {
// //     return {
// //         zoom: get(state, 'map.present.zoom') // connected property
// //     };
// // })(SampleComponent);

// // export default {
// //     SamplePlugin: ConnectedSample
// // };


// // export default createPlugin('Sample', {
// //     component: () => <div id="georchestra-sample"><SampleComponent/></div>
// // });


// import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import {get} from 'lodash';

// import { changeZoomLevel } from '../../MapStore2/web/client/actions/map';

// class SampleComponent extends React.Component {
//     static propTypes = {
//         zoom: PropTypes.number,
//         onZoom: PropTypes.func
//     };

//     render() {
//         const style = { position: "absolute", top: "100px", left: "100px", zIndex: 1000000 };
//         return <div style={style}>Zoom: {this.props.zoom} <button onClick={() => this.props.onZoom(this.props.zoom + 1)}>Increase</button></div >;
//     }
// }

// const ConnectedSample = connect((state) => {
//     return {
//         zoom: get(state, 'map.present.zoom')
//     };
// }, {
//         onZoom: changeZoomLevel // connected action
//     })(SampleComponent);

// export default {
//     SamplePlugin: ConnectedSample
// };
