import firebase from 'firebase'

export const getCars = () => new Promise((resolve, reject) => {
    const db = firebase.firestore()
    db.collection('cars')
        .get()
        .then(snapShot => {
            const result = snapShot.docs.map(doc => doc.data())
            resolve(result)
        }).catch(reject)
})

export const addCars = () => new Promise((resolve, reject) => {
    const db = firebase.firestore()
    carsArray.map(item => {
        db.collection('cars').add({
            ...item
        }).then(() => {
            alert('done')
        }).catch(err => alert(err.toString()))
    })
})

export const bookCarApi = (data = {}) => new Promise((resolve, reject) => {
    const db = firebase.firestore()
    const user = firebase.auth().currentUser.email
    const doc = db.collection('users').doc(user.toString())
    doc.update({
        orders: firebase.firestore.FieldValue.arrayUnion(data)
    }).then(done => {
        console.log('DONE >>>>')
        resolve()
    }).catch(err => reject(err))
})

export const getBookingsApi = () => new Promise((resolve, reject) => {
    const db = firebase.firestore()
    const user = firebase.auth().currentUser.email
    const doc = db.collection('users').doc(user.toString())
    doc.get().then(data => {
        if (data.exists) {
            resolve(data.data())
        } else {
            reject('Document Not Found')
        }
    }).catch(err => {
        reject(err)
    })
})





export const carsArray = [
    {
        name: 'astonmartinDBX',
        brand: 'Astonmartin',
        year: '2019',
        type: 'Suv',
        withfuel: 350,
        withoutfuel: 200,
        capcity: 4,
        class: 0,
        withdriver: 0,
        active: true,
        transmission: 1,
        Image: 'astonmartin.png'
    },
    {
        name: 'Minicoopermini',
        brand: 'Minicooper',
        year: '2020',
        type: 'Sedan',
        withfuel: 180,
        withoutfuel: 100,
        capcity: 4,
        class: 0,
        withdriver: 0,
        active: true,
        transmission: 0,
        Image: 'minicooper.png'
    },
    {
        name: 'Urus',
        brand: 'Lamborgini',
        year: '2020',
        type: 'Suv',
        withfuel: 400,
        withoutfuel: 300,
        capcity: 4,
        class: 0,
        withdriver: 0,
        active: true,
        transmission: 0,
        Image: 'lamborginiUrus.png'
    },
    {
        name: 'Roadster',
        brand: 'Lamborgini',
        year: '2019',
        type: 'Coupe',
        withfuel: 400,
        withoutfuel: 350,
        capcity: 2,
        class: 0,
        withdriver: 1,
        active: true,
        transmission: 0,
        Image: 'lamborginiroadster.png'
    },
    {
        name: 'Ftype',
        brand: 'Jaguar',
        year: '2020',
        type: 'Coupe',
        withfuel: 350,
        withoutfuel: 250,
        capcity: 2,
        class: 0,
        withdriver: 1,
        active: true,
        transmission: 0,
        Image: 'jaguar_Ftype.png'
    },
    {
        name: 'G43',
        brand: 'merecedesbenz',
        year: '2020',
        type: 'Suv',
        withfuel: 480,
        withoutfuel: 400,
        capcity: 4,
        class: 0,
        withdriver: 1,
        active: true,
        transmission: 1,
        Image: 'mercedezbenzGWagon.png'
    },
    {
        name: 'SLS',
        brand: 'merecedesbenz',
        year: '2019',
        type: 'Coupe',
        withfuel: 280,
        withoutfuel: 200,
        capcity: 2,
        class: 0,
        withdriver: 1,
        active: true,
        transmission: 1,
        Image: 'mercdezbenz_Sls.png'
    },
    {
        name: 'Mustang',
        brand: 'Ford',
        year: '2020',
        type: 'Coupe',
        withfuel: 350,
        withoutfuel: 300,
        capcity: 2,
        class: 0,
        withdriver: 1,
        active: true,
        transmission: 1,
        Image: 'fordMustang.png'
    },
    {
        name: 'Wrangler',
        brand: 'Jeep',
        year: '2018',
        type: 'Suv',
        withfuel: 280,
        withoutfuel: 200,
        capcity: 4,
        class: 0,
        withdriver: 1,
        active: true,
        transmission: 1,
        Image: 'jeeprubicon.png'
    },
    {
        name: 'A6',
        brand: 'AUDI',
        year: '2020',
        type: 'Sedan',
        withfuel: 280,
        withoutfuel: 200,
        capcity: 4,
        class: 0,
        withdriver: 0,
        active: true,
        transmission: 0,
        Image: 'AudiA6.png'
    },
    {
        name: 'Evoque',
        brand: 'RANGERROVER',
        year: '2020',
        type: 'Sedan',
        withfuel: 320,
        withoutfuel: 250,
        capcity: 4,
        class: 0,
        withdriver: 0,
        active: true,
        transmission: 0,
        Image: 'rangerroverEvoque.png'
    },
    {
        name: 'Amg GT',
        brand: 'mercedes benz',
        year: '2020',
        type: 'Coupe',
        withfuel: 400,
        withoutfuel: 300,
        capcity: 2,
        class: 0,
        withdriver: 0,
        active: true,
        transmission: 0,
        Image: 'mercedezbenzamg.png'
    },
    {
        name: 'M6 competition',
        brand: 'BMW',
        year: '2020',
        type: 'Sedan',
        withfuel: 380,
        withoutfuel: 300,
        capcity: 4,
        class: 0,
        withdriver: 0,
        active: true,
        transmission: 0,
        Image: 'BMW_m6.png'
    }
]
