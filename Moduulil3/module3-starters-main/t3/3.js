'use strict';
const names = ['John', 'Paul', 'Jones'];
let target = document.getElementById('target');
target.classList.add('my-list');

let lielem = document.createElement('li');

target.innerHTML = '<li>First item</li>\n' +
    '<li>Second item</li>\n' +
    '<li>Third item</li>';
