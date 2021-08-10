import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { useSelector } from 'react-redux'
import Header from '../Components/Header'
import NativeButton from '../Components/NativeButton'
import { almostBlack, backgroundColor, grey, primaryColor, white } from '../Theme/colors'
import { PoppinsBold, PoppinsMedium, PoppinsSemiBold } from '../Theme/fonts'

const Urus = require('../../assets/lamborginiUrus.png');
const Amg_GT = require('../../assets/mercedezbenzamg.png');
const A6 = require('../../assets/AudiA6.png');
const Minicoopermini = require('../../assets/minicooper.png');
const SLS = require('../../assets/mercdezbenz_Sls.png');
const Mustang = require('../../assets/fordMustang.png');
const Roadster = require('../../assets/lamborginiroadster.png');
const astonmartinDBX = require('../../assets/astonmartin.png');
const M6_competition = require('../../assets/BMW_m6.png');
const Evoque = require('../../assets/rangerroverEvoque.png');
const G43 = require('../../assets/mercedezbenzGWagon.png');
const Ftype = require('../../assets/jaguar_Ftype.png');

const lambo = require('../Assets/images/brands/lambo.png')
const audi = require('../Assets/images/brands/audi.png')
const bmw = require('../Assets/images/brands/bmw.png')
const aston = require('../Assets/images/brands/aston.png')
const ford = require('../Assets/images/brands/ford.png')
const jaguar = require('../Assets/images/brands/jaguar.png')
const benz = require('../Assets/images/brands/benz.png')
const mini = require('../Assets/images/brands/mini.png')
const range = require('../Assets/images/brands/rangerover.png')
const jeep = require('../Assets/images/brands/jeep.png')

export default function CarsScreen({ navigation, route }) {
    const cars = useSelector(state => state.cars)
    const {
        location,
        startDate,
        startTime,
        dropDate,
        dropTime
    } = route.params
    return (
        <View style={{
            flex: 1,
            backgroundColor: backgroundColor
        }}>
            <Header
                title='Car List'
                leftButton={require('../Assets/images/back.png')}
                leftButtonOnPress={() => navigation.goBack()}
            // rightButtonText={'Logout'}
            // rightButtonOnPress={logout}
            />
            <View style={{
                flex: 1,
                flexDirection: "row"
            }}>
                <View style={{
                    flex: 1.5,
                    backgroundColor: white,
                    borderRightColor: backgroundColor,
                    borderRightWidth: 2,
                    shadowColor: '#000',
                    shadowOffset: { width: 10, height: 10 },
                    shadowOpacity: 0.5,
                    shadowRadius: 5,
                }}>

                </View>
                <View style={{
                    flex: 6,
                    backgroundColor: white
                }}>
                    <ScrollView>
                        <View style={{
                            margin: 40,
                            borderColor: backgroundColor,
                            borderWidth: 5,
                            backgroundColor: white,
                            borderRadius: 20
                        }}>
                            {
                                cars.map(car => {
                                    return (
                                        <View style={{
                                            padding: 10,
                                            flexDirection: 'row',
                                            borderBottomColor: backgroundColor,
                                            borderBottomWidth: 2,
                                            justifyContent: 'center'
                                        }}>
                                            <View style={{
                                                justifyContent: 'center'
                                            }}>
                                                <Image
                                                    source={getImage(car.name)}
                                                    resizeMode='contain'
                                                    style={{
                                                        width: 200,
                                                        height: 150,
                                                    }}
                                                />
                                            </View>
                                            <View style={{
                                                flex: 1,
                                                padding: 10,
                                                justifyContent: 'space-between'
                                            }}>
                                                <View>
                                                    <Text style={{
                                                        fontFamily: PoppinsSemiBold,
                                                        color: almostBlack,
                                                        fontSize: 24,
                                                        borderBottomColor: backgroundColor,
                                                        borderBottomWidth: 1,
                                                        textTransform: 'capitalize'
                                                    }}>
                                                        {car.name}
                                                    </Text>
                                                    <Text style={{
                                                        fontFamily: PoppinsMedium,
                                                        color: grey,
                                                        fontSize: 16,
                                                        textTransform: 'uppercase'
                                                    }}>
                                                        {car.brand}
                                                    </Text>
                                                </View>
                                                <View style={{
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between',
                                                    marginVertical: 10
                                                }}>

                                                    <View style={{
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        justifyContent: 'space-between',
                                                        width: '100%'
                                                    }}>
                                                        <Image
                                                            resizeMode='contain'
                                                            source={getBrands(car.brand)}
                                                            style={{
                                                                width: 50,
                                                                height: 50
                                                            }}
                                                        />

                                                        <View style={{
                                                            flexDirection: 'row',
                                                        }}>
                                                            <Image
                                                                resizeMode='contain'
                                                                source={require('../Assets/images/seat.png')}
                                                                style={{
                                                                    width: 25,
                                                                    height: 25
                                                                }}
                                                            />
                                                            <Text style={{
                                                                fontFamily: PoppinsMedium,
                                                                color: almostBlack,
                                                                fontSize: 16,
                                                            }}>
                                                                {car.capcity}
                                                            </Text>
                                                        </View>
                                                        <View style={{
                                                            flexDirection: 'row',
                                                        }}>
                                                            <Image
                                                                resizeMode='contain'
                                                                source={require('../Assets/images/fuel.png')}
                                                                style={{
                                                                    width: 25,
                                                                    height: 25
                                                                }}
                                                            />
                                                            <Text style={{
                                                                fontFamily: PoppinsMedium,
                                                                color: almostBlack,
                                                                fontSize: 16,
                                                            }}>
                                                                {car.class === 0 ? 'Petrol' : 'Diesel'}
                                                            </Text>
                                                        </View>
                                                        <Image
                                                            resizeMode='contain'
                                                            source={car.withdriver ? require('../Assets/images/driver.png') : require('../Assets/images/steering.png')}
                                                            style={{
                                                                width: 25,
                                                                height: 25
                                                            }}
                                                        />
                                                        <View style={{
                                                            flexDirection: 'row',
                                                        }}>
                                                            <Image
                                                                resizeMode='contain'
                                                                source={require('../Assets/images/transmission.png')}
                                                                style={{
                                                                    width: 25,
                                                                    height: 25
                                                                }}
                                                            />
                                                            <Text style={{
                                                                fontFamily: PoppinsMedium,
                                                                color: almostBlack,
                                                                fontSize: 16,
                                                            }}>
                                                                {car.transmission === 0 ? 'Auto' : 'Manual'}
                                                            </Text>
                                                        </View>
                                                        <Text style={{
                                                            fontFamily: PoppinsBold,
                                                            color: almostBlack,
                                                            fontSize: 16,
                                                            textTransform: 'uppercase'
                                                        }}>
                                                            {car.type}
                                                        </Text>
                                                    </View>
                                                </View>
                                                <View style={{
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center'
                                                }}>
                                                    <Text style={{
                                                        fontFamily: PoppinsBold,
                                                        color: almostBlack,
                                                        fontSize: 24,
                                                    }}>
                                                        {`\u20b9`}{car.withfuel}/hr
                                                    </Text>
                                                    <NativeButton
                                                        onPress={() => navigation.navigate('CarInfo', {
                                                            car: car,
                                                            image: getImage(car.name),
                                                            brandImage: getBrands(car.brand),
                                                            location,
                                                            startDate,
                                                            startTime,
                                                            dropDate,
                                                            dropTime
                                                        })}
                                                        title='View Details'
                                                        buttonStyle={{
                                                            padding: 10,
                                                            backgroundColor: primaryColor,
                                                            borderRadius: 5,
                                                            justifyContent: 'center',
                                                            alignItems: 'center'
                                                        }}
                                                        textStyle={{
                                                            fontFamily: PoppinsBold,
                                                            fontSize: 14,
                                                            color: white
                                                        }}
                                                    />
                                                </View>
                                            </View>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}
const getBrands = name => {
    switch (name) {
        case 'lamborgini':
            return lambo;
        case 'audi':
            return audi;
        case 'astonmartin':
            return aston;
        case 'minicooper':
            return mini;
        case 'mercedes benz':
            return benz;
        case 'ford':
            return ford;
        case 'bmw':
            return bmw;
        case 'rangerover':
            return range;
        case 'jaguar':
            return jaguar;
        case 'jeep':
            return jeep;
        default:
            return bmw;
    }
}
const getImage = name => {
    switch (name) {
        case 'Urus':
            return Urus;
        case 'Amg GT':
            return Amg_GT;
        case 'A6':
            return A6;
        case 'Minicoopermini':
            return Minicoopermini;
        case 'SLS':
            return SLS;
        case 'Mustang':
            return Mustang;
        case 'Roadster':
            return Roadster;
        case 'astonmartinDBX':
            return astonmartinDBX;
        case 'M6 competition':
            return M6_competition;
        case 'Evoque':
            return Evoque;
        case 'G43':
            return G43;
        case 'Ftype':
            return Ftype;
        default:
            return require('../../assets/toyota.png');
    }
}



// Urus lamborginiUrus.png
// Amg GT mercedezbenzamg.png
// A6 AudiA6.png
// Minicoopermini minicooper.png
// SLS mercdezbenz_Sls.png
// Mustang fordMustang.png
// Roadster lamborginiroadster.png
// astonmartinDBX astonmartin.png
// M6 competition BMW_m6.png
// Wrangler jeeprubicon.png
// Evoque rangerroverEvoque.png
// G43 mercedezbenzGWagon.png
// Ftype jaguar_Ftype.png
