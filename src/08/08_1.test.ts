export type UsersType = {
    [key: string]: {id: number, name: string}
}
let users: UsersType

beforeEach(() =>{
    users = {
        "101": {id: 101, name: 'Inna'},
        "1456": {id: 1456, name: 'Anna'},
        "8585": {id: 8585, name: 'Stas'},
        "1234": {id: 1234, name: 'Max'}
    }
})

test('should update corresponding user',() => {
    users['101'].name = 'Innulya'

    // expect(users['101'].name).toBe('Innulya');
    expect(users["101"]).toEqual( {id: 101, name: 'Innulya'} );
})

test('should delete corresponding user',() => {
    delete users['101']

    expect(users["101"]).toBeUndefined();
})