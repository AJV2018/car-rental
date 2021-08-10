import React from 'react'
import { View, Text, ImageBackground, Image } from 'react-native'
import { responsiveHeight } from 'react-native-responsive-dimensions';
import Header from '../Components/Header';
import NativeButton from '../Components/NativeButton';
import { almostBlack, backgroundColor, grey, primaryColor, translucentBlack, white } from '../Theme/colors'
import { PoppinsBold, PoppinsMedium, PoppinsRegular, PoppinsSemiBold } from '../Theme/fonts';

export default function CarInfoScreen({
    navigation,
    route
}) {
    const {
        car,
        image,
        brandImage,
        location,
        startDate,
        startTime,
        dropDate,
        dropTime
    } = route.params;
    return (
        <View style={{
            flex: 1,
            backgroundColor: backgroundColor
        }}>
            <Header
                title='Car Details'
                leftButton={require('../Assets/images/back.png')}
                leftButtonOnPress={() => navigation.goBack()}
            />
            <ImageBackground
                style={{
                    flex: 1,
                    justifyContent: 'center'
                }}
                source={image}
            >
                <View style={{
                    position: 'absolute',
                    left: 60,
                    width: responsiveHeight(50),
                    backgroundColor: white,
                    borderRadius: 10,
                    borderTopColor: primaryColor,
                    borderTopWidth: 10
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: 10
                    }}>
                        <Text style={{
                            fontFamily: PoppinsMedium,
                            color: almostBlack,
                            fontSize: 24,
                            textTransform: 'capitalize',

                        }}>
                            {car.name}
                        </Text>

                        <Image
                            source={brandImage}
                            resizeMode='contain'
                            style={{
                                width: 60,
                                height: 60
                            }}
                        />

                    </View>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: 5,
                        borderBottomColor: backgroundColor,
                        borderBottomWidth: 2,
                        marginHorizontal: 10

                    }}>
                        <Text style={{
                            fontFamily: PoppinsRegular,
                            color: almostBlack,
                            fontSize: 18,
                            textTransform: 'capitalize',
                            padding: 10
                        }}>
                            Seats
                        </Text>
                        <Text style={{
                            fontFamily: PoppinsRegular,
                            color: almostBlack,
                            fontSize: 18,
                            textTransform: 'capitalize',
                            padding: 10
                        }}>
                            {car.capcity}
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: 5,
                        borderBottomColor: backgroundColor,
                        borderBottomWidth: 2,
                        marginHorizontal: 10

                    }}>
                        <Text style={{
                            fontFamily: PoppinsRegular,
                            color: almostBlack,
                            fontSize: 18,
                            textTransform: 'capitalize',
                            padding: 10
                        }}>
                            Fuel Type
                        </Text>
                        <Text style={{
                            fontFamily: PoppinsRegular,
                            color: almostBlack,
                            fontSize: 18,
                            textTransform: 'capitalize',
                            padding: 10
                        }}>
                            {car.class === 0 ? 'Petrol' : 'Diesel'}
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: 5,
                        borderBottomColor: backgroundColor,
                        borderBottomWidth: 2,
                        marginHorizontal: 10

                    }}>
                        <Text style={{
                            fontFamily: PoppinsRegular,
                            color: almostBlack,
                            fontSize: 18,
                            textTransform: 'capitalize',
                            padding: 10
                        }}>
                            Transmission
                        </Text>
                        <Text style={{
                            fontFamily: PoppinsRegular,
                            color: almostBlack,
                            fontSize: 18,
                            textTransform: 'capitalize',
                            padding: 10
                        }}>
                            {car.transmission === 0 ? 'Auto' : 'Manual'}
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: 5,
                        borderBottomColor: backgroundColor,
                        borderBottomWidth: 2,
                        marginHorizontal: 10

                    }}>
                        <Text style={{
                            fontFamily: PoppinsRegular,
                            color: almostBlack,
                            fontSize: 18,
                            textTransform: 'capitalize',
                            padding: 10
                        }}>
                            Class
                        </Text>
                        <Text style={{
                            fontFamily: PoppinsRegular,
                            color: almostBlack,
                            fontSize: 18,
                            textTransform: 'uppercase',
                            padding: 10
                        }}>
                            {car.type}
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: 5,
                        borderBottomColor: backgroundColor,
                        borderBottomWidth: 2,
                        marginHorizontal: 10

                    }}>
                        <Text style={{
                            fontFamily: PoppinsRegular,
                            color: almostBlack,
                            fontSize: 18,
                            textTransform: 'capitalize',
                            padding: 10
                        }}>
                            Rent Type
                        </Text>
                        <Text style={{
                            fontFamily: PoppinsRegular,
                            color: almostBlack,
                            fontSize: 18,
                            textTransform: 'capitalize',
                            padding: 10
                        }}>
                            {car.withdriver ? 'Driver' : 'Self'}
                        </Text>
                    </View>

                    <NativeButton
                        onPress={() => navigation.navigate('Book', {
                            car: car,
                            location,
                            startDate,
                            startTime,
                            dropDate,
                            dropTime
                        })}
                        title='Rent Now'
                        buttonStyle={{
                            padding: 5,
                            backgroundColor: primaryColor,
                            borderRadius: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: 10
                        }}
                        textStyle={{
                            fontFamily: PoppinsBold,
                            fontSize: 20,
                            color: white
                        }}
                    />
                </View>
            </ImageBackground>
        </View>
    )
}
