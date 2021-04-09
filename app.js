const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-1.jpeg",
        desc: `Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "./images/item-2.jpeg",
        desc: `Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others.  `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./images/item-3.jpeg",
        desc: `Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. `,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./images/item-4.jpeg",
        desc: `Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others.  `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "./images/item-5.jpeg",
        desc: `Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others.  `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "./images/item-6.jpeg",
        desc: `Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. `,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./images/item-7.jpeg",
        desc: `Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./images/item-8.jpeg",
        desc: `Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others.  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "./images/item-9.jpeg",
        desc: `Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. `,
    },
    {
        id: 10,
        title: "bison steak",
        category: "dinner",
        price: 22.99,
        img: "./images/item-10.jpeg",
        desc: `Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. `,
    },
];



//   const menu to be replaced with an api call
const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

window.addEventListener('DOMContentLoaded', function () {
    displaymenuItems(menu)
    menuBtns()
})


function displaymenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        // console.log(item);
        return `
            <article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
              </header>
              <p class="item-text">
               ${item.desc}
              </p>
               </div>
          </article>
            `;
    })
    // remove coma separation between menu items
    displayMenu = displayMenu.join("")
    sectionCenter.innerHTML = displayMenu
}

function menuBtns(){
  // use categories from menu - the unique ones
  const categories = menu.reduce(function (values, item) {
    console.log(item)
    if (!values.includes(item.category)) {
        values.push(item.category)
    }
    return values;
}, ['all']);
// buttons for categories
const categoryBtns = categories.map(function (category) {
    return `
    <button class="filter-btn" type="button" data-id=${category}>${category}</button>
    `
}).join("");

btnContainer.innerHTML = categoryBtns
const filterBtns = document.querySelectorAll('.filter-btn')


// filter bny btns
filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const category = e.currentTarget.dataset.id;
        // console.log(category);

        const menuCategory = menu.filter(function (menuItem) {
            // console.log(menuItem);
            if (category === menuItem.category) {
                return menuItem;
            }
        })
        console.log(menuCategory)
        // display categories already filtered
        if (category === 'all') {
            displaymenuItems(menu)
        } else {
            displaymenuItems(menuCategory)
        }
    })
})
}

