import React, { useEffect, useState } from 'react'
import { View, Text, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import Header from '../Components/Header'
import { almostBlack, backgroundColor, grey, primaryColor, white } from '../Theme/colors'
import firebase from 'firebase'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { PoppinsBold, PoppinsMedium, PoppinsRegular, PoppinsSemiBold } from '../Theme/fonts'
import { bigHeading, h1, h3, pad10, pad2, pad5, smallHeading } from '../Theme/dimensions'
import DatePicker from "react-datepicker";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';
import NativeButton from '../Components/NativeButton'
import { parseDate } from '../Utils/dateParser'
import { useDispatch } from 'react-redux'
import { addCars } from '../Redux/actions/carActions'
import { getCars } from '../Api/FirebaseApi'
export default function HomeScreen({ navigation }) {
    const logout = () => {
        firebase.auth().signOut()
    }
    const [startDate, setStartDate] = useState(new Date());
    const [startTime, setStartTime] = useState({ value: '00:00', label: '00:00' });
    const [location, setLocation] = useState('Hyderabad')
    const [dropDate, setDropDate] = useState(new Date())
    const [dropTime, setDropTime] = useState({ value: '12:00', label: '12:00' })
    const [showStartCalendar, setShowStartCalendar] = useState(false)
    const [showDropCalendar, setShowDropCalendar] = useState(false)

    const dispatch = useDispatch()
    useEffect(() => {
        getCars().then(cars => {
            dispatch(addCars(cars))
        })
    }, [])
    return (
        <View style={{
            flex: 1,
            backgroundColor: white
        }}>
            <Header
                title='Dashboard'
                // leftButton={require('../Assets/images/menu.png')}
                // leftButtonOnPress={() => alert('pressed')}
                rightButtonText={'Logout'}
                rightButtonOnPress={logout}
                extraButtonText='Order History'
                extraButtonOnPress={() => navigation.navigate('OrderHistory')}
            />
            <ImageBackground
                style={{
                    flex: 1
                }}
                source={require('../Assets/images/banner.jpg')}
                imageStyle={{
                    flex: 1
                }}
                resizeMode='cover'
            >
                <View style={{
                    padding: pad5,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontFamily: PoppinsBold,
                        fontSize: bigHeading,
                        color: almostBlack
                    }}>
                        Car Rental - Search, Compare {'&'} Save!
                    </Text>
                    <Text style={{
                        fontFamily: PoppinsSemiBold,
                        fontSize: h1,
                        color: almostBlack
                    }}>
                        Complete the search form below to find affordable rental cars all over India
                    </Text>
                </View>

                <View style={{
                    position: 'absolute',
                    left: pad5,
                    top: responsiveHeight(25),
                    width: responsiveWidth(40),
                    borderRadius: 5,
                    backgroundColor: white,
                    shadowColor: '#000',
                    shadowOffset: { width: 5, height: 5 },
                    shadowOpacity: 0.5,
                    shadowRadius: 2,
                    elevation: 2,
                    padding: pad2
                }}>
                    <Text style={{
                        fontFamily: PoppinsBold,
                        fontSize: h1,
                        color: almostBlack
                    }}>
                        Search for rental cars
                    </Text>

                    <View style={{
                        marginBottom: 10
                    }}>
                        <Text style={{
                            fontFamily: PoppinsRegular,
                            fontSize: h3,
                            color: almostBlack
                        }}>Rental Location</Text>
                        <TextInput
                            placeholder='Ex. Hyderabad'
                            value={location}
                            onChangeText={setLocation}
                            style={{
                                width: '100%',
                                padding: 10,
                                borderRadius: 5,
                                borderWidth: 1,
                                borderColor: grey
                            }}
                        />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <View style={{
                            flex: 1,
                        }}>
                            <Text style={{
                                fontFamily: PoppinsRegular,
                                fontSize: h3,
                                color: almostBlack
                            }}>Pickup date</Text>
                            <TouchableOpacity
                                onPress={() => setShowStartCalendar(!showStartCalendar)}
                                style={{
                                    padding: 9,
                                    borderColor: grey,
                                    backgroundColor: white,
                                    borderWidth: 1,
                                    borderRadius: 2.5,
                                    justifyContent: 'center',
                                    // alignItems : 'center'
                                }}>
                                <Text>
                                    {parseDate(startDate)}
                                </Text>
                            </TouchableOpacity>
                            {/* <Calendar
                                onChange={setStartDate}
                                value={startDate}
                            /> */}
                            {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                        </View>
                        <View style={{
                            flex: 1,
                            justifyContent: 'flex-end',
                            marginLeft: 10
                        }}>
                            <Text style={{
                                fontFamily: PoppinsRegular,
                                fontSize: h3,
                                color: almostBlack
                            }}>Pickup Time</Text>
                            <Select
                                styles={{
                                    backgroundColor: 'red',
                                    height: 50,
                                    width: 50
                                }}
                                value={startTime}
                                onChange={setStartTime}
                                options={times.map(itm => ({ value: itm, label: itm }))}
                            />
                        </View>
                    </View>
                    {
                        showStartCalendar &&
                        <View style={{
                            // position: 'absolute',
                            width: '50%',
                            height: 0,
                            zIndex: 100,
                            elevation: 10
                        }}>
                            <Calendar
                                onChange={setStartDate}
                                value={startDate}
                            />
                        </View>
                    }
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <View style={{
                            flex: 1,
                        }}>
                            <Text style={{
                                fontFamily: PoppinsRegular,
                                fontSize: h3,
                                color: almostBlack
                            }}>Drop date</Text>
                            <View style={{
                                padding: 9,
                                borderColor: grey,
                                backgroundColor: white,
                                borderWidth: 1,
                                borderRadius: 2.5,
                                justifyContent: 'center',
                                // alignItems : 'center'
                            }}>
                                <Text>
                                    {parseDate(dropDate)}
                                </Text>
                            </View>
                        </View>
                        <View style={{
                            flex: 1,
                            justifyContent: 'flex-end',
                            marginLeft: 10
                        }}>
                            <Text style={{
                                fontFamily: PoppinsRegular,
                                fontSize: h3,
                                color: almostBlack
                            }}>Drop Time</Text>
                            <Select
                                styles={{
                                    backgroundColor: 'red',
                                    height: 0,
                                    width: 50
                                }}
                                value={dropTime}
                                onChange={setDropTime}
                                options={times.map(itm => ({ value: itm, label: itm }))}
                            />
                        </View>
                    </View>
                    {
                        showDropCalendar &&
                        <View style={{
                            // position: 'absolute',
                            width: '50%',
                            height: 0,
                            zIndex: 100,
                            elevation: 10
                        }}>
                            <Calendar
                                onChange={setDropDate}
                                value={dropDate}
                            />
                        </View>
                    }
                    <NativeButton
                        onPress={() => navigation.navigate('Cars', {
                            location,
                            startDate,
                            startTime,
                            dropDate,
                            dropTime
                        })}
                        title='Search'
                        buttonStyle={{
                            width: '100%',
                            padding: 5,
                            backgroundColor: primaryColor,
                            justifyContent: "center",
                            alignItems: 'center',
                            alignSelf: 'center',
                            marginTop: 10,
                            zIndex: 2
                        }}
                        textStyle={{
                            fontFamily: PoppinsBold,
                            fontSize: responsiveFontSize(1.5),
                            color: white
                        }}
                    />
                </View>
            </ImageBackground>
        </View>
    )
}

const times = [
    '00:00',
    '00:30',
    '01:00',
    '01:30',
    '02:00',
    '02:30',
    '03:00',
    '03:30',
    '04:00',
    '04:30',
    '05:00',
    '05:30',
    '06:00',
    '06:30',
    '07:00',
    '07:30',
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
    '20:30',
    '21:00',
    '21:30',
    '22:00',
    '22:30',
    '23:00',
    '23:30',
]


