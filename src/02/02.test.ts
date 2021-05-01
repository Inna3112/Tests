import {CityType} from "./02_02";

let city: CityType

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {buildedAt: 2012, repaired: false,
            address: {number:108,
                streetTitle: "White Street"}},
            {buildedAt: 2008, repaired: false,
                address: {number:106,
                    streetTitle: "White Street"}},
            {buildedAt: 2012, repaired: false,
                address: {number:110,
                    streetTitle:"White Street"}},
        ],
        governmentBuilding: [],
        citizensNumber: 100000
    }
})

// 1. Создайте тип CityType2
// 2. Заполните обьект city, чтобы тесты ниже прошли

test("city should contains 3 houses", () => {
    // Подготовительные данные data

    //  Action


    // Expect result
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].buildedAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(108);
    expect(city.houses[0].address.streetTitle).toBe
    ("White Street");

    expect(city.houses[1].buildedAt).toBe(2008);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[1].address.number).toBe(106);
    expect(city.houses[1].address.streetTitle).toBe
    ("White Street");

    expect(city.houses[2].buildedAt).toBe(2012);
    expect(city.houses[2].repaired).toBe(false);
    expect(city.houses[2].address.number).toBe(110);
    expect(city.houses[2].address.streetTitle).toBe
    ("White Street");
})


