import {
    addBooksToUser, addNewCompany, addOneBookToUser,
    makeHairStyle,
    moveUser,
    moveUserToOtherHouse, removeBook,
    updateBooks, updateCompany, updateCompany2,
    upgradeLaptop,
    UsersType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./10_1";

test('reference type test', () => {
    let user: UsersType = {
        name: 'Inna',
        hair: 32,
        address: {
            city: 'Kryvyi Rig'
        }
    }
    const awesomeUser = makeHairStyle(user, 2)
    expect(user.hair).toBe(32);
    expect(awesomeUser.hair).toBe(16);
    expect(awesomeUser.address).toBe(user.address);
})

test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Inna',
        hair: 32,
        address: {
            city: 'Kryvyi Rig',
            house: 9
        },
        laptop: {
            title: 'Assus'
        }
    }
    const movedUser = moveUser(user, 'Kyiv')

    expect(movedUser).not.toBe(user);
    expect(user.address.city).toBe('Kryvyi Rig');
    expect(movedUser.address.city).toBe('Kyiv');
    expect(movedUser.address).not.toBe(user.address);
    expect(movedUser.laptop).toBe(user.laptop);
})

test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Inna',
        hair: 32,
        address: {
            city: 'Kryvyi Rig',
            house: 9
        },
        laptop: {
            title: 'Asus'
        }
    }
    const userCopy = upgradeLaptop(user, 'Macbook')
    expect(user).not.toBe(userCopy);
    expect(user.laptop.title).toBe('Asus');
    expect(userCopy.laptop.title).toBe('Macbook');
    expect(user.laptop).not.toBe(userCopy.laptop);
})

test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Inna',
        hair: 32,
        address: {
            city: 'Kryvyi Rig',
            house: 9
        },
        laptop: {
            title: 'Asus'
        },
        books: ['HTML', 'CSS', 'JS', 'React']
    }
    const userCopy = moveUserToOtherHouse(user, 16)
    expect(user).not.toBe(userCopy);
    expect(user.books).toBe(userCopy.books)
    expect(userCopy.address.house).toBe(16)
    expect(user.address.house).not.toBe(userCopy.address.house);
    expect(user.laptop).toBe(userCopy.laptop);
})

test('add  new books', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Inna',
        hair: 32,
        address: {
            city: 'Kryvyi Rig',
            house: 9
        },
        laptop: {
            title: 'Asus'
        },
        books: ['HTML', 'CSS', 'JS', 'React']
    }
    const userCopy = addBooksToUser(user, ['TS', 'Rest api'])
    expect(user).not.toBe(userCopy);
    expect(user.books).not.toBe(userCopy.books);
    expect(userCopy.books.length).toBe(6);
    expect(userCopy.books[4]).toBe('TS');
    expect(userCopy.books[5]).toBe('Rest api');

})

test('add  new book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Inna',
        hair: 32,
        address: {
            city: 'Kryvyi Rig',
            house: 9
        },
        laptop: {
            title: 'Asus'
        },
        books: ['HTML', 'CSS', 'JS', 'React']
    }
    const userCopy = addOneBookToUser(user, 'TS')
    expect(user).not.toBe(userCopy);
    expect(user.books).not.toBe(userCopy.books);
    expect(user.books.length).toBe(4);
    expect(userCopy.books.length).toBe(5);
    expect(userCopy.books[4]).toBe('TS');
})

test('update JS to TS', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Inna',
        hair: 32,
        address: {
            city: 'Kryvyi Rig',
            house: 9
        },
        laptop: {
            title: 'Asus'
        },
        books: ['HTML', 'CSS', 'JS', 'React']
    }
    const userCopy = updateBooks(user, 'JS', 'TS')
    expect(user).not.toBe(userCopy);
    expect(user.books).not.toBe(userCopy.books);
    expect(userCopy.books[2]).toBe('TS');
    expect(user.books[2]).toBe('JS');
})

test('remove JS book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Inna',
        hair: 32,
        address: {
            city: 'Kryvyi Rig',
            house: 9
        },
        laptop: {
            title: 'Asus'
        },
        books: ['HTML', 'CSS', 'JS', 'React']
    }
    const userCopy = removeBook(user, 'JS')
    expect(user).not.toBe(userCopy);
    expect(user.books).not.toBe(userCopy.books);
    expect(userCopy.books.length).toBe(3);
})

test('add new company', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Inna',
        hair: 32,
        address: {
            city: 'Kryvyi Rig',
            house: 9
        },
        laptop: {
            title: 'Asus'
        },
        companies: [
            {id: 1, title: 'Epam'},
            {id: 2, title: 'Onix'},
        ]
    }
    const userCopy = addNewCompany(user, 3, 'IT-INCUBATOR')
    expect(user).not.toBe(userCopy);
    expect(user.companies).not.toBe(userCopy.companies);
    expect(userCopy.companies.length).toBe(3);
    expect(userCopy.companies[2].title).toBe('IT-INCUBATOR');
})

test('update company', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Inna',
        hair: 32,
        address: {
            city: 'Kryvyi Rig',
            house: 9
        },
        laptop: {
            title: 'Asus'
        },
        companies: [
            {id: 1, title: 'Епам'},
            {id: 2, title: 'Onix'},
        ]
    }
    const userCopy = updateCompany(user, 1, 'Epam') as UserWithLaptopType & WithCompaniesType
    expect(user).not.toBe(userCopy);
    expect(user.companies).not.toBe(userCopy.companies);
    expect(userCopy.companies.length).toBe(2);
    expect(userCopy.companies[0].title).toBe('Epam');
})

test('update company2', () => {

    let companies = {
        'Inna' : [{id: 1, title: 'Епам'}, {id: 2, title: 'Onix'}],
        'Anna' : [{id: 1, title: 'Google'}]
    }

    const copy = updateCompany2(companies, 'Inna', 1, 'Epam')
    expect(copy['Inna']).not.toBe(companies['Inna']);
    expect(copy['Inna'][0].title).toBe('Epam');
    expect(copy['Anna']).toBe(companies['Anna']);
})