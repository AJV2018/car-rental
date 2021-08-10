import React from 'react'
import { View, Text, TouchableNativeFeedback, Image, StyleSheet, ViewPropTypes, TextPropTypes, ImagePropTypes, TouchableOpacity } from 'react-native'
import { primaryColor } from '../Theme/colors'

function NativeButton({
    onPress = () => { },
    image = null,
    title = '',
    buttonStyle,
    textStyle,
    imageStyle,
}) {
    return (
        <TouchableOpacity
            onPress={() => onPress()}
        >
            <View style={buttonStyle}>
                {
                    image ?
                        <Image
                            source={image}
                            style={imageStyle}
                        />
                        :
                        <Text style={textStyle}>{title}</Text>
                }
            </View>
        </TouchableOpacity>
    )
}

NativeButton.propTypes = {
    // buttonStyle: ViewPropTypes.style,
};

export default NativeButton;
