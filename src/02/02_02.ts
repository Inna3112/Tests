export type CityType = {
    title: string
    houses: Array<HouseType>,
    governmentBuilding: [],
    citizensNumber: number
}
export type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type AddressType = {
    number: number
    streetTitle: string
}
// export type StreetType = {
//     title: string
// }
