import Image from "next/image";

interface Country {
    name: string;
    capital: string;
    population: number;
    area: number;
    flag: string;
}

interface IProps {
    countries: Country[];
}
const CountriesDetail = (props: IProps) => {

    return (
        <div>
            <h1>Country Detail</h1>
            {props.countries.map((country: Country) => {
                return (
                    <div key={country.name}>
                        <h2>{country.name}</h2>
                        <p>Capital: {country.capital}</p>
                        <p>Population: {country.population}</p>
                        <p>Area: {country.area}</p>
                        <Image src={country.flag} alt={country.name} />
                    </div>
                );
            })}
        </div>
    );
}

export default CountriesDetail;