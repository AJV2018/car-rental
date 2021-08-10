import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions'
import { bookCarApi } from '../Api/FirebaseApi'
import Header from '../Components/Header'
import NativeButton from '../Components/NativeButton'
import { almostBlack, backgroundColor, lightGrey, primaryColor, white } from '../Theme/colors'
import { PoppinsBold, PoppinsMedium, PoppinsRegular, PoppinsSemiBold } from '../Theme/fonts'
import { parseDateStr } from '../Utils/dateParser'
import './Homescreen.css'
export default function BookScreen({
    navigation,
    route
}) {
    const {
        car,
        location,
        startDate = new Date(),
        startTime,
        dropDate = new Date(),
        dropTime
    } = route.params



    const bookCar = () => {
        bookCarApi({
            car,
            location,
            startDate,
            startTime,
            dropDate,
            dropTime,
            bill: {
                subTotal: subTotal,
                tax: tax,
                total: total
            }
        }).then(() => {
            alert('Booking Successfull!')
            navigation.popToTop()
        }).catch(err => {
            console.log(err)
            alert('Something is not right. please try again!')
        })
    }

    const [withFuel, setWithFuel] = useState(true)
    const [subTotal, setSubTotal] = useState(0)
    const [tax, setTax] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const sub = getSubTotal()
        const tx = getTax(sub)
        setSubTotal(sub)
        setTax(tx)
        console.log(sub)
        console.log(tx)
        console.log(Math.abs(Number(sub) + Number(tx) + 200))
        setTotal(Math.abs(Number(sub) + Number(tx) + 200).toFixed(2))
    }, [withFuel])

    const getTax = (tx) => {
        return Math.round(tx * 0.18)
    }

    const getSubTotal = () => {

        const baseCharge = withFuel ? car?.withfuel : car.withoutfuel

        const sDate = new Date()
        const startSplit = startTime.label.split(':')
        sDate.setHours(startSplit[0])
        sDate.setMinutes(startSplit[1])

        const eDate = new Date()
        const endSplit = dropTime.label.split(':')
        eDate.setHours(endSplit[0])
        eDate.setMinutes(endSplit[1])


        const totalHours = diff_hours(sDate, eDate)
        return (Number(baseCharge) * totalHours).toFixed(2)
    }

    const diff_hours = (dt2, dt1) => {

        var diff = (dt2.getTime() - dt1.getTime()) / 1000;
        diff /= (60 * 60);
        return Math.abs(Math.round(diff));

    }
    return (
        <View style={{
            flex: 1,
            backgroundColor: backgroundColor
        }}>
            <Header
                title='Book Car'
                leftButton={require('../Assets/images/back.png')}
                leftButtonOnPress={() => navigation.goBack()}
            />
            <div className='cardetails'>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        padding: 20,
                        backgroundColor: white,
                        shadowColor: '#000',
                        shadowOffset: { width: 5, height: 5 },
                        shadowOpacity: 0.3,
                        shadowRadius: 2,
                    }}>
                        <Text style={{
                            fontFamily: PoppinsBold,
                            color: almostBlack,
                            fontSize: 24,
                            textTransform: 'capitalize',
                            borderBottomColor: almostBlack,
                            borderBottomWidth: 2
                        }}>
                            Booking Confirmation
                        </Text>
                        <View style={{
                            flexDirection: 'row',
                            marginTop: 10

                        }}>
                            <View style={{
                                padding: 10,
                                borderRightColor: backgroundColor,
                                borderRightWidth: 2
                            }}>
                                <Text style={{
                                    fontFamily: PoppinsSemiBold,
                                    color: almostBlack,
                                    fontSize: 18,
                                }}>
                                    Car
                                </Text>
                                <View style={{
                                    width: responsiveWidth(30),
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
                                <Text style={{
                                    fontFamily: PoppinsSemiBold,
                                    color: almostBlack,
                                    fontSize: 18,
                                    marginTop: 10

                                }}>
                                    Location
                                </Text>
                                <View style={{
                                    width: responsiveWidth(30),
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

                                <Text style={{
                                    fontFamily: PoppinsSemiBold,
                                    color: almostBlack,
                                    fontSize: 18,
                                    marginTop: 10

                                }}>
                                    Pickup At,

                                </Text>
                                <View style={{
                                    width: responsiveWidth(30),
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
                                        {startTime.value}, {parseDateStr(startDate)}
                                    </Text>
                                </View>
                                <Text style={{
                                    fontFamily: PoppinsSemiBold,
                                    color: almostBlack,
                                    fontSize: 18,
                                    marginTop: 10

                                }}>
                                    Drop At
                                </Text>
                                <View style={{
                                    width: responsiveWidth(30),
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
                                        {dropTime.value}, {parseDateStr(dropDate)}
                                    </Text>
                                </View>


                            </View>
                            <View style={{
                                padding: 10,
                                width: responsiveWidth(25),
                            }}>
                                <View style={{
                                    padding: 10,
                                    marginVertical: responsiveWidth(2.5),
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'

                                }}>
                                    <Text style={{
                                        fontFamily: PoppinsSemiBold,
                                        color: almostBlack,
                                        fontSize: 18,
                                    }}>With Fuel</Text>

                                    <TouchableOpacity
                                        onPress={() => setWithFuel(!withFuel)}
                                        style={{
                                            width: responsiveWidth(5),
                                            height: responsiveWidth(2.5),
                                            backgroundColor: white,
                                            borderColor: lightGrey,
                                            borderWidth: 1,
                                            borderRadius: 5,
                                            alignItems: withFuel ? 'flex-start' : 'flex-end'
                                        }}>
                                        <View style={{
                                            width: responsiveWidth(2.5),
                                            height: '100%',
                                            backgroundColor: primaryColor
                                        }} />
                                    </TouchableOpacity>
                                    <Text style={{
                                        fontFamily: PoppinsSemiBold,
                                        color: almostBlack,
                                        fontSize: 18,
                                    }}>Without Fuel</Text>
                                </View>
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
                                <NativeButton
                                    onPress={bookCar}
                                    title='Book Now'
                                    buttonStyle={{
                                        width: '95%',
                                        padding: 5,
                                        backgroundColor: primaryColor,
                                        justifyContent: "center",
                                        alignItems: 'center',
                                        alignSelf: 'center',
                                        marginTop: 10,
                                    }}
                                    textStyle={{
                                        fontFamily: PoppinsBold,
                                        fontSize: responsiveFontSize(1.5),
                                        color: white
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </div>
        </View>
    )
}


