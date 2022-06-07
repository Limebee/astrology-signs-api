const { request } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const signs = {
    "aries": {
        'element': 'Fire',
        'rulingPlanet': 'Mars',
        'modality': 'Cardinal',
        'date': "March 21 - April 19"
    },
    'taurus': {
        'element': 'Earth',
        'rulingPlanet': 'Venus',
        'modality': 'Fixed',
        'date': "April 20 - May 20"
    },
    'gemini': {
        'element': 'Air',
        'rulingPlanet': 'Mercury',
        'modality': 'Mutable',
        'date': "May 21 - June 20"

    },
    'cancer': {
        'element': 'Water',
        'rulingPlanet': 'Moon',
        'modality': 'Cardinal',
        'date': "June 21 - July 22"

    },
    'leo': {
        'element': 'Fire',
        'rulingPlanet': 'Sun',
        'modality': 'Fixed',
        'date': "July 23 - August 22"

    },
    'virgo': {
        'element': 'Earth',
        'rulingPlanet': 'Mercury',
        'modality': 'Mutable',
        'date': "August 23 - September 22"

    },
    'libra': {
        'element': 'Air',
        'rulingPlanet': 'Venus',
        'modality': 'Cardinal',
        'date': "September 23 - October 22"

    },
    'scorpio': {
        'element': 'Water',
        'rulingPlanet': 'Pluto',
        'modality': 'Fixed',
        'date': "October 23 - November 21"

    },
    'sagittarius': {
        'element': 'Fire',
        'rulingPlanet': 'Jupiter',
        'modality': 'Mutable',
        'date': "November 22 - December 21"

    },
    'capricorn': {
        'element': 'Earth',
        'rulingPlanet': 'Saturn',
        'modality': 'Cardinal',
        'date': "December 22 - January 19"

    },
    'aquarius': {
        'element': 'Air',
        'rulingPlanet': 'Uranus',
        'modality': 'Fixed',
        'date': "January 20 - February 18"

    },
    'pisces': {
        'element': 'Water',
        'rulingPlanet': 'Neptune',
        'modality': 'Mutable',
        'date': "February 19 - March 20"

    },
    'unknown':{
        'element': 'unknown',
        'rulingPlanet': 'unknown',
        'modality': 'unknown',
        'date': 'unknown'
    }
}
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:sign',(req,res)=>{
    const signName = req.params.sign.toLowerCase()
    if(signs[signName]){
        res.json(signs[signName])
    }else{
        res.json(signs["unknown"])
    }
})


app.listen(process.env.PORT || PORT, ()=>{
    console.log(`This server is now running on port ${PORT}!`)
})