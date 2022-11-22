let target = document.createElement('target').appendChild(list);
const second = document.getElementsByTagName('li')[1];

target.innerHTML = '<li>First item</li>\n' +
                    '<li>Second item</li>\n' +
                    '<li>Third item</li>';