
export type StudentType = {
    id: number
    "name": string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}

type AddressType = {
    streetTitle: string,
    cityTitle: CityTileType
}

type CityTileType = {
    city: string
    country: string
}

type TechnologiesType = {
    id: number
    title: string
}

export const student: StudentType = {
    id: 1,
    "name": "Inna",
    age: 35,
    isActive: true,
    address: {
        streetTitle: "Nova, 6",
        cityTitle: {
            city: "Kriwiy Ryg",
            country: "Ukraine"
        }
    },
    technologies: [
        {id: 1,
        title: "JS"},
        {id: 2,
        title: "React"},
        {id: 3,
        title: "HTML"}
    ]
}

console.log(student['name']);
console.log(student.address.cityTitle.country);
console.log(student.technologies[1].title);
