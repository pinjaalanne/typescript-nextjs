'use client';

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap';

interface CountryDetails {
    capital: string[];
    name: CountryInfo;
}

interface CountryInfo {
    common: string;
    official: string;
    nativeName: NativeNames;
}

interface LanguageDetails {
    official: string;
    common: string;
}

interface NativeNames {
    [key: string]: LanguageDetails;
}


const CountriesAPI = () => {
    const [countries, setCountries] = useState<CountryDetails[]>([])

    const getCountryData = async () => {
        const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,capital')
        console.log(response.data);
        if (response.data) {
            setCountries(response.data)
        }
    }

    useEffect(() => {
        getCountryData()
    }, [])

    return (
        <>
            <div>CountriesAPI will be here</div>
            {countries.map((country, index) => {
                return (
                    <Card key={`${country.capital[0]}${index}`} style={{ width: '18rem' }}>
                        <div key={`${country.capital[0]}${index}`} >
                            <p>Capital: {country.capital[0]}</p>
                            <p>Name: {country.name.common}</p>
                            <p>{country.name?.nativeName?.ell?.common}</p>
                            <p>{country.name?.nativeName?.tur?.official}</p>
                        </div>
                    </Card>
                )
            })
            }
        </>
    )
}

export default CountriesAPI