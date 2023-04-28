"use strict";
// Problem-11: A food ordering app needs to sort the menu items by price.
const menuItems = [
    { name: "Burger", price: 5.99 },
    { name: "Fries", price: 2.99 },
    { name: "Soda", price: 1.99 },
    { name: "Pizza", price: 10.99 },
];
function arraySort(arr) {
    const sorted = arr.sort((a, b) => a.price - b.price);
    return sorted;
}
console.log(arraySort(menuItems));
