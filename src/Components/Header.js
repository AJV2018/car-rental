import React from 'react'
import { View, Text } from 'react-native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { darkRed, lightRed, primaryColor, white } from '../Theme/colors'
import { borderWidth, h1, h2, h3, pad2 } from '../Theme/dimensions'
import { PoppinsSemiBold } from '../Theme/fonts'
import NativeButton from './NativeButton'

export default function Header({
    title = '',
    children = <></>,
    backgroundColor = primaryColor,
    textColor = white,
    leftButton = null,
    leftButtonOnPress = () => { },
    rightButton = null,
    rightButtonOnPress = () => { },
    rightButtonText = null,
    extraButton = null,
    extraButtonOnPress = () => {},
    extraButtonText = null

}) {
    return (
        <View
            style={{
                backgroundColor: backgroundColor,
                // elevation: 5
            }}
        >
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: responsiveHeight(8),
            }}>
                {
                    leftButton &&
                    <NativeButton
                        onPress={() => leftButtonOnPress()}
                        image={leftButton}
                        buttonStyle={{
                            height: responsiveHeight(8),
                            width: responsiveHeight(8),
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        imageStyle={{
                            height: responsiveHeight(3.5),
                            width: responsiveHeight(3.5),
                            tintColor: textColor
                        }}
                    />

                }
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    height: '100%',
                    paddingLeft : leftButton ? 0 : 10
                }}>
                    <Text style={{
                        fontFamily: PoppinsSemiBold,
                        fontSize: h1,
                        color: textColor,
                    }}>{title}</Text>
                </View>
                {
                    (extraButton || extraButtonText) &&
                    <NativeButton
                        onPress={() => extraButtonOnPress()}
                        image={extraButton}
                        title={extraButtonText}
                        buttonStyle={[
                            {
                                justifyContent: 'center',
                                alignItems: 'center',
                            },
                            rightButton && {
                                height: responsiveHeight(8),
                                width: responsiveHeight(8),
                            }
                        ]}
                        imageStyle={{
                            height: responsiveHeight(4),
                            width: responsiveHeight(4),
                            tintColor: textColor
                        }}
                        textStyle={{
                            fontFamily: PoppinsSemiBold,
                            fontSize: 14,
                            color: textColor,
                            marginRight : pad2
                        }}
                    />

                }
                {
                    (rightButton || rightButtonText) &&
                    <NativeButton
                        onPress={() => rightButtonOnPress()}
                        image={rightButton}
                        title={rightButtonText}
                        buttonStyle={[
                            {
                                justifyContent: 'center',
                                alignItems: 'center',
                            },
                            rightButton && {
                                height: responsiveHeight(8),
                                width: responsiveHeight(8),
                            }
                        ]}
                        imageStyle={{
                            height: responsiveHeight(4),
                            width: responsiveHeight(4),
                            tintColor: textColor
                        }}
                        textStyle={{
                            fontFamily: PoppinsSemiBold,
                            fontSize: 14,
                            color: textColor,
                            marginRight : pad2
                        }}
                    />

                }
            </View>
            {
                children
            }
        </View>
    )
}

