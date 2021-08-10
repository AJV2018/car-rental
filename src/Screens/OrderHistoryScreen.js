import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { getBookingsApi } from '../Api/FirebaseApi'
import Header from '../Components/Header'
import { almostBlack, backgroundColor, grey, white } from '../Theme/colors'
import { PoppinsBold, PoppinsRegular, PoppinsSemiBold } from '../Theme/fonts'
import './Homescreen.css'
export default function OrderHistoryScreen({
    navigation
}) {
    const [bookings, setBookings] = useState([])

    useEffect(() => {
        getBookingsApi().then(doc => {
            setBookings(doc?.orders || [])
        }).catch(err => {
            alert(err.toString())
        })
    }, [])
    return (
        <View style={{
            flex: 1,
            backgroundColor: backgroundColor
        }}>
            <Header
                title='Order History'
                leftButton={require('../Assets/images/back.png')}
                leftButtonOnPress={() => navigation.goBack()}
            />
            <div className='cardetails'>
            </div>
            <View style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: responsiveHeight(10),
                bottom: responsiveHeight(8),
                justifyContent: 'center',
                alignItems: 'center',
                padding: 20
            }}>
                <ScrollView>
                    <View style={{
                        width: responsiveWidth(75),
                        backgroundColor: white,
                        borderRadius: 5,
                    }}>
                        {
                            bookings.map((itm,idx) => (
                                <OrderHistoryComp order={itm} index={idx} />
                            ))
                        }
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const OrderHistoryComp = ({ order = {}, index }) => {
    const {
        car,
        location,
        startDate = new Date(),
        startTime,
        dropDate = new Date(),
        dropTime
    } = order

    const {
        subTotal,
        tax,
        total
    } = order.bill
    return (
        <View style={{
            width: '90%',
            padding: responsiveHeight(2.5),
            borderColor: grey,
            borderBottomWidth: 1,
            alignSelf: 'center',
            margin: responsiveHeight(2.5),
            flexDirection: 'row'
        }}>
            <Text style={{
                fontFamily : PoppinsBold,
                color : grey,
                fontSize : 22
            }}>#{index+1}</Text>
            <View style={{
                justifyContent: 'center'
            }}>
                <Image
                    source={getImage(order.car.name)}
                    style={{
                        height: responsiveHeight(15),
                        width: responsiveHeight(15),
                    }}
                />
            </View>

            <View style={{
                flex: 2,
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'center'
            }}>
                <View style={{
                    width: '45%',
                    marginHorizontal: '2%'
                }}>
                    <Text style={{
                        fontFamily: PoppinsSemiBold,
                        color: almostBlack,
                        fontSize: 18,
                    }}>
                        Car
                    </Text>
                    <View style={{
                        width: '100%',
                        backgroundColor: backgroundColor,
                        borderRadius: 5,
                        padding: 10,
                    }}>
                        <Text style={{
                            fontFamily: PoppinsRegular,
                            color: almostBlack,
                            fontSize: 16,
                            // fontStyle : 'italic'
                        }}>
                            {car.name}
                        </Text>
                    </View>
                </View>
                <View style={{
                    width: '45%',
                    marginHorizontal: '2%'

                }}>

                    <Text style={{
                        fontFamily: PoppinsSemiBold,
                        color: almostBlack,
                        fontSize: 18,
                        marginTop: 10

                    }}>
                        Location
                    </Text>
                    <View style={{
                        width: '100%',
                        backgroundColor: backgroundColor,
                        borderRadius: 5,
                        padding: 10,
                    }}>
                        <Text style={{
                            fontFamily: PoppinsRegular,
                            color: almostBlack,
                            fontSize: 16,
                            // fontStyle : 'italic'
                        }}>
                            {location}
                        </Text>
                    </View>
                </View>

                <View style={{
                    width: '45%',
                    marginHorizontal: '2%'

                }}>

                    <Text style={{
                        fontFamily: PoppinsSemiBold,
                        color: almostBlack,
                        fontSize: 18,
                        marginTop: 10

                    }}>
                        Pickup At,

                    </Text>
                    <View style={{
                        width: '100%',
                        backgroundColor: backgroundColor,
                        borderRadius: 5,
                        padding: 10,
                    }}>
                        <Text style={{
                            fontFamily: PoppinsRegular,
                            color: almostBlack,
                            fontSize: 16,
                            // fontStyle : 'italic'
                        }}>
                            {startTime.value},
                        </Text>
                    </View>
                </View>

                <View style={{
                    width: '45%',
                    marginHorizontal: '2%'

                }}>

                    <Text style={{
                        fontFamily: PoppinsSemiBold,
                        color: almostBlack,
                        fontSize: 18,
                        marginTop: 10

                    }}>
                        Drop At
                    </Text>
                    <View style={{
                        width: '100%',
                        backgroundColor: backgroundColor,
                        borderRadius: 5,
                        padding: 10,
                    }}>
                        <Text style={{
                            fontFamily: PoppinsRegular,
                            color: almostBlack,
                            fontSize: 16,
                            // fontStyle : 'italic'
                        }}>
                            {dropTime.value},
                        </Text>
                    </View>
                </View>
            </View>

            <View style={{
                flex: 1,
                transform : [
                    {
                        scale : 0.8
                    }
                ]
            }}>
                <View style={{
                    borderBottomColor: backgroundColor,
                    borderBottomWidth: 2,
                }}>
                    <Text style={{
                        fontFamily: PoppinsSemiBold,
                        color: almostBlack,
                        fontSize: 18,
                        textTransform: 'capitalize',

                        marginHorizontal: 10
                    }}>
                        Bill Details
                    </Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottomColor: backgroundColor,
                    borderBottomWidth: 1,
                    marginTop: 10,
                    paddingHorizontal: 10
                }}>
                    <Text style={{
                        fontFamily: PoppinsRegular,
                        color: almostBlack,
                        fontSize: 16,
                        // fontStyle : 'italic'
                    }}>
                        SubTotal
                    </Text>
                    <Text style={{
                        fontFamily: PoppinsRegular,
                        color: almostBlack,
                        fontSize: 16,
                        // fontStyle : 'italic'
                    }}>
                        {`\u20b9`}{subTotal}
                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottomColor: backgroundColor,
                    borderBottomWidth: 1,
                    marginTop: 10,
                    paddingHorizontal: 10


                }}>
                    <Text style={{
                        fontFamily: PoppinsRegular,
                        color: almostBlack,
                        fontSize: 16,
                        // fontStyle : 'italic'
                    }}>
                        Tax (18%)
                    </Text>
                    <Text style={{
                        fontFamily: PoppinsRegular,
                        color: almostBlack,
                        fontSize: 16,
                        // fontStyle : 'italic'
                    }}>
                        {`\u20b9`}{tax}
                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottomColor: backgroundColor,
                    borderBottomWidth: 1,
                    marginTop: 10,
                    paddingHorizontal: 10


                }}>
                    <Text style={{
                        fontFamily: PoppinsRegular,
                        color: almostBlack,
                        fontSize: 16,
                        // fontStyle : 'italic'
                    }}>
                        Convinience Fee
                    </Text>
                    <Text style={{
                        fontFamily: PoppinsRegular,
                        color: almostBlack,
                        fontSize: 16,
                        // fontStyle : 'italic'
                    }}>
                        {`\u20b9`}200
                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottomColor: backgroundColor,
                    borderBottomWidth: 1,
                    marginTop: 10,
                    paddingHorizontal: 10


                }}>
                    <Text style={{
                        fontFamily: PoppinsSemiBold,
                        color: almostBlack,
                        fontSize: 18,
                        // fontStyle : 'italic'
                    }}>
                        Total
                    </Text>
                    <Text style={{
                        fontFamily: PoppinsSemiBold,
                        color: almostBlack,
                        fontSize: 18,
                        // fontStyle : 'italic'
                    }}>
                        {`\u20b9`}{total}
                    </Text>
                </View>
            </View>

        </View>
    )
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
