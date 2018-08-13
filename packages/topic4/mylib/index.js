import PropTypes from 'prop-types';
import { NativeModules, ViewPropTypes, requireNativeComponent } from 'react-native';

const ImageViewInterface = {
    name: 'ImageView',
    propTypes: {
        src: PropTypes.array,
        resizeMethod: PropTypes.string,
        ...ViewPropTypes, // include the default view properties
    },
};

export const ImageView = requireNativeComponent("ImageView", ImageViewInterface);
export const { ToastController } = NativeModules;
