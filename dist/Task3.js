"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';
const getData = async (url) => {
    const response = await fetch(url);
    return await response.json();
};
getData(COMMENTS_URL)
    .then((data) => {
    data.forEach(element => {
        console.log(`ID: ${element.id}, Email: ${element.email}`);
    });
});
/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
