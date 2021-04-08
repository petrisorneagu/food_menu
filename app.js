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

// api call
const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple",
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "2f469e02a9msh4ff5b560df8e350p164b1ajsn52c13e04800a",
        "x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com"
    }
};

$.ajax(settings).done(function (response) {
    // console.log('res' ,response);
    // console.log('res' ,response.hints);
    let testApi = response.hints.map(function (callItems) {
        //  console.log(callItems.food)
        return callItems.food;
    })
});



//   const menu to be replaced with an api call
const sectionCenter = document.querySelector('.section-center');
const filterBtns = document.querySelectorAll('.filter-btn')

window.addEventListener('DOMContentLoaded', function () {
    displaymenuItems(menu)
})

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

