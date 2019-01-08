import React, { Component } from "react";
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from './selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);

class IconCustom extends Component {
    render() {
        let { name, color, size, style, onPress } = this.props
        return (
            <Icon name={name} color={color} size={size} onPress={onPress} style={style} />
        );
    }
}
export default IconCustom;
