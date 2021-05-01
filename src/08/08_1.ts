
//Ассоціатівній мвсив складність пошуку елемента
// в ньому О(1) - дуже швідко, миттєво. Швідкість змінюватіся
// не буде в залежності від розміру масива.
type UsersType = {
    [key: string]: {id: number, name: string}
}
export const users: UsersType = {
    "101": {id: 101, name: 'Inna'},
    "1456": {id: 1456, name: 'Anna'},
    "8585": {id: 8585, name: 'Stas'},
    "1234": {id: 1234, name: 'Max'}
}
let user = {id: 1345, name: 'Jon'}
users[user.id] = user;
//Масив складність пошуку елемента
// в ньому О(n) - буде перебирати елементи по черзі.
// n - кількість елементів в масиві.
export const usersArray = [
    {id: 101, name: 'Inna'},
    {id: 1456, name: 'Anna'},
    {id: 8585, name: 'Stas'},
    {id: 1234, name: 'Max'}
]