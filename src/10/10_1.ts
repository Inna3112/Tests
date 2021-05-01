export type UsersType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}
export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UsersType & {
    laptop: LaptopType
}
export type UserWithBooksType = UsersType & {
    books: Array<string>
}
export type CompanyType = { id: number, title: string };
export type WithCompaniesType = UsersType & {
    companies: Array<CompanyType>
}


export function makeHairStyle(u: UsersType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }

    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {...u.address, city: city}
    }
    // copy.address = {
    //     ...copy.address,
    //     city: city
    // }

}

export function upgradeLaptop(u: UserWithLaptopType, laptopTitle: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop, title: laptopTitle
        }
    }
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {...u.address, house: house}
    }
}

export function addBooksToUser(u: UserWithLaptopType & UserWithBooksType, books: string[]) {
    return {
        ...u,
        books: [...u.books.concat(books)]
    }
}

export function addOneBookToUser(u: UserWithLaptopType & UserWithBooksType, book: string) {
    // const copy = {
    //     ...u,
    //     books: [...u.books]
    // }
    // copy.books.push(book)
    // return copy
    return {
        ...u,
        books: [...u.books, book]
    }
}

export function updateBooks(u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) {
    return {
        ...u,
        books: [...u.books.map(b => b === oldBook ? newBook : b
        )]
    }
}

export function removeBook(u: UserWithLaptopType & UserWithBooksType, removeBook: string) {
    return {
        ...u,
        books: [...u.books.filter(b => b !== removeBook)]
    }
}

export function addNewCompany(u: UserWithLaptopType & WithCompaniesType,
                              companyId: number,
                              companyTitle: string) {
    return {
        ...u,
        companies: [...u.companies, {id: companyId, title: companyTitle}]
    }
}

export function updateCompany(u: WithCompaniesType,
                              companyId: number,
                              companyTitle: string) {
    return {
        ...u,
        companies: u.companies.map(c => {
            return c.id === companyId ? {...c, title: companyTitle} : c
        })
    }
}

export function updateCompany2(companies: {[key: string] : Array<CompanyType>}, userName: string,
                               companyId: number,
                               companyTitle: string) {
    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId ? {...c, title: companyTitle} : c)
    
    return companyCopy

}