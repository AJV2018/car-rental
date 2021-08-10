import React, { useState } from 'react'
import { View, Text, Image, TextInput } from 'react-native'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { almostBlack, backgroundColor, darkRed, grey, lightRed, primaryColor, pureBlack, white } from '../Theme/colors'
import { borderWidth, h1, h3, pad2 } from '../Theme/dimensions'
import { PoppinsRegular, PoppinsSemiBold } from '../Theme/fonts'
export default function TextField({
    value = '',
    onType = () => { },
    filled = false,
    bgColor = backgroundColor,
    borderInactiveColor = grey,
    borderActiveColor = darkRed,
    label = '',
    icon = null,
    autoFocus = false,
    width = '90%',
    placeholder = '',
    keyboardType = 'default',
    isPassword = false,
    errorText = ''
}) {
    const [isActive, setIsActive] = useState(autoFocus)
    return (
        <View style={{
            width: width,
            alignSelf: 'center',
            marginTop: pad2
        }}>
            {
                (typeof (label) === 'string' && isActive) &&
                <Text style={{
                    fontFamily: PoppinsRegular,
                    fontSize: h1,
                    color: isActive ? borderActiveColor : borderInactiveColor
                }}>
                    {label}
                </Text>
            }
            <View style={{
                backgroundColor: filled ? bgColor : white,
                flexDirection: icon ? 'row' : 'column',
                borderRadius: borderWidth,
                borderColor: isActive ? borderActiveColor : borderInactiveColor,
                borderWidth: filled ? 0 : (isActive ? 2 : 1),
                borderBottomWidth: (isActive ? 2 : 1),
                height: responsiveHeight(7),
                width: '100%',
            }}>
                {
                    icon &&
                    <View style={{
                        padding: pad2,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image
                            source={icon}
                            style={{
                                width: responsiveWidth(10),
                                height: responsiveWidth(10),
                            }}
                        />
                    </View>
                }
                <TextInput
                    secureTextEntry={isPassword}
                    placeholder={isActive ? '' : label}
                    value={value}
                    onChangeText={onType}
                    keyboardType={keyboardType}
                    onFocus={() => {
                        setIsActive(true)
                    }}
                    onBlur={() => {
                        setIsActive(false)
                    }}
                    style={{
                        flex: 1,
                        fontFamily: PoppinsRegular,
                        fontSize: h1,
                        color: almostBlack,
                        paddingLeft: pad2
                    }}
                />
            </View>
            {
                (typeof (errorText) === 'string' && errorText.length > 0) &&
                <Text style={{
                    fontFamily: PoppinsSemiBold,
                    fontSize: h3,
                    color: pureBlack
                }}>
                    {errorText}
                </Text>
            }
        </View>
    )
}
