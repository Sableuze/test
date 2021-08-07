input = document.querySelectorAll(".input");

input.forEach(function (item) {
    item.addEventListener("focus", function () {
        let parent = this.closest(".form__block");
        parent.classList.add("_focus");
    })


    item.addEventListener("blur", function () {
        this.parentNode.classList.remove("_focus");
    })
});

//for select tag which is changed by app.js
// let inputSelect = document.querySelectorAll(".select");
// inputSelect.forEach(function (item) {
//     item.addEventListener("click", function () {
//         parents = document.querySelectorAll('.find__option')
//         parents.forEach(function (parentItem) {
//             parentItem.classList.remove('_focus')
//
//         })
//         let parent = document.closest(".find__option");
//
//
//         console.log(parent)
//         if (this.classList.contains("_active")) {
//             parent.classList.add("_focus");
//         } else {
//             parent.classList.remove("_focus")
//         }
//
//
//     })
// })

// let selectParent = inputSelect.closest("._active")
// if (selectParent) {
//         console.log(selectParent)
//         selectParent.classList.toggle("_focus")
//     }


const labelCondition = document.querySelectorAll("[data-tab]");

const contentBoxes = document.querySelectorAll("[data-tab-content]")

const actionEvent = window.screen.width >= 550

const owlStage = document.querySelector(".owl-stage")

labelCondition.forEach(function (item) {
    if (actionEvent == true) {
        item.addEventListener("click", function () {
            labelCondition.forEach(function (removeClass) {
                removeClass.classList.remove("_active");
            })

            this.classList.toggle("_active");
            contentBoxes.forEach(function (item) {
                item.classList.add("_hidden")
            })

            let contentBox = document.querySelector("#" + this.dataset.tab);
            contentBox.classList.remove("_hidden")

            if (this.parentNode.classList.contains("active")) {
                contentBox.classList.remove("_hidden")
            }

        })
    }
    else {
        $('.owl-carousel').on('translated.owl.carousel', function () {
            console.log("lelele")
            labelCondition.forEach(function (removeClass) {
                removeClass.classList.remove("_active");
            })
            contentBoxes.forEach(function (item) {
                item.classList.add("_hidden")
            })
            //
            // let parentSwiper = this.parentNode
            // console.log(parentSwiper)
            // if (parentSwiper.classList.contains("active")) {
            //     this.classList.add("_active")
            // }
            let owl_item = owlStage.querySelector(".active")

            let owl_child = owl_item.querySelector(".client")

            owl_child.classList.add("_active")

            let contentBox = document.querySelector("#" + owl_child.dataset.tab);
            contentBox.classList.remove("_hidden")

        })

        }
}
)
;
//
// const parent = document.querySelector(".dynamic__menu")
//
// const child = parent.querySelectorAll(".nav-item")
//
// child.forEach(function (item) {
//
//     item.addEventListener("click", function () {
//             child.forEach(function (removeClass) {
//                 removeClass.classList.remove("orange__line")
//             })
//
//             this.classList.add("orange__line")
//         }
//     )
// })


// const animItems = document.querySelectorAll("._animation-item")
//
// if (animItems.length > 0) {
//     window.addEventListener("scroll", animOnScroll);
//
//     function animOnScroll() {
//         for (let i = 0; i < animItems.length; i++) {
//             const animItem = animItems[i];
//             const animItemHeight = animItem.offsetHeight;
//             const animItemOffset = offset(animItem).top;
//             const animStart = 4;
//
//
//             let animItemPoint = window.innerHeight - animItemHeight / animStart;
//             if (animItemHeight > window.innerHeight) {
//                 animItemPoint = window.innerHeight - window.innerHeight / animStart;
//             }
//
//             if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemPoint + animItemHeight)) {
//                 animItem.classList.add("_animation-active")
//             }
//             // else {
//             //     if (!animItem.classList.contains("_anim-no-hide")){
//             //     animItem.classList.remove("_active")
//             // }}
//             //
//
//         }
//
//
//     }
//
//     setTimeout(() => {
//         animOnScroll()
//     }, 300);
// }
document.addEventListener('DOMContentLoaded', () => {

    const scrollItems = document.querySelectorAll('._animation-item');

    const scrollAnimation = () => {
        let windowCenter = (window.innerHeight / 2) + window.scrollY;
        scrollItems.forEach(el => {
            let scrollOffset = el.offsetTop + (el.offsetHeight / 6);
            if (windowCenter >= scrollOffset) {
                el.classList.add('_animation-active');
            }
        });
    };


    scrollAnimation();
    window.addEventListener('scroll', () => {
        scrollAnimation();
    });
});


// const buttonDismiss = document.querySelectorAll(".button-dismiss")
//
// buttonDismiss.forEach(function (item) {
//     item.addEventListener("click", function () {
//         this.closest("._dismissable").classList.add("_dismissable-hidden")
//     })
// })

//ПРОВЕРКА ГОРИЗОНАТЛЬНОЙ ПРОКРУТКИ
// function isScrollable(ele) {
//
//     const cntWidth = ele.closest(".bar").scrollWidth
//     // Compare the height to see if the element has scrollable content
//     const hasScrollableContent = ele.scrollWidth > cntWidth;
//
//
// }
//
//
// setTimeout(function () {
//     try {
//         isScrollable(document.querySelector(".labels"))
//     } catch (error) {
//         console.log(error)
//     }
// }, 1000)


//NAVBAR COLLAPSE

const navbar = document.querySelector(".navbar-collapse")
document.onclick = function (e) {
    if (!event.target.closest(".navbar-collapse")) {
        navbar.classList.remove("show")
        body_lock_remove()
    }

};


//STICKY NAVBAR

$(function () {
    window.addEventListener("scroll", function (event) {

        var top = this.pageYOffset;

        var layers = $(".parallax__layer");
        var speed, yPos, direction;
        layers.each(function () {
            speed = $(this).attr('data-speed');
            direction = $(this).attr('data-direction');
            var yPos = direction + (top * speed / 100);
            var xPos = (top * speed / 110);

            $(this).attr('style', 'transform: translate3d( ' + yPos + 'px, ' + xPos + 'px, 0px)');
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.innerWidth > 1200) {
            if (window.scrollY > 50) {
                document.querySelector('.header__menu').classList.add('fixed-top');
                // add padding top to show content behind navbar
                navbar_height = document.querySelector('.menu__body').offsetHeight;
                document.body.style.paddingTop = navbar_height + 'px';
            } else {
                document.querySelector('.header__menu').classList.remove('fixed-top');
                // remove padding top from body
                document.body.style.paddingTop = '0';
            }
        } else {
            if (window.scrollY > 50) {
                document.querySelector('.navbar').classList.add('fixed-top');
                // add padding top to show content behind navbar
                navbar_height = document.querySelector('.navbar').offsetHeight;
                document.body.style.paddingTop = navbar_height + 'px';
            } else {
                document.querySelector('.navbar').classList.remove('fixed-top');
                // remove padding top from body
                document.body.style.paddingTop = '0';
            }
        }

    })
})


//

// $(document).ready(function () {
//     $("#click-me").click(function () {
//         var moreOrless = $("#content").is(':visible') ? 'more ...' :
//             ' less';
//         $(this).text(moreOrless);
//         $("#content").slideToggle();
//     });
// });

//Detect wrap

let container = document.querySelectorAll('.wrappable');
console.log(container)

function detectWrap(node) {
    node.forEach(container => {
        Array.from(container.children).forEach(child => {
            const containerPos = container.getBoundingClientRect().top;
            const childPos = child.getBoundingClientRect().top;
            if (childPos > containerPos) {
                child.classList.add('wrapped');
                container.classList.add("wrapOn")
            } else {
                child.classList.remove('wrapped');
                container.classList.remove("wrapOn")

            }
        });
    });
}

window.addEventListener("DOMContentLoaded", (e) => {
    detectWrap(container);
});

window.addEventListener("resize", (e) => {
    detectWrap(container);
});

$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true,

        },
        550: {
            items: 2,
            nav: true,
        },
        1000: {
            items: 3
        }
    }
})


const filters = document.querySelector('#filters');
const dropdownElem = document.querySelectorAll('.select__option')
const priceInputs = document.querySelectorAll('.input-text')
console.log(dropdownElem)

dropdownElem.forEach(function (item) {
    item.addEventListener("click", filterGoods)
})
priceInputs.forEach(function (item) {
    item.addEventListener("input", filterGoods)
})

// filters.addEventListener('click', filterGoods);

function filterGoods() {
    const
        typeMain = filters.querySelector('#aim').value,
        location = filters.querySelector('#location').value,
        type = filters.querySelector('#type').value,
        priceMin = document.querySelector('#price-min').value,
        priceMax = document.querySelector('#price-max').value;
    console.log(typeof location)
    outputGoods(DATA.filter(n => (
        (!typeMain || n.typeMain === typeMain) &&
        (!location || n.location === location) &&
        (!type || n.type === type) &&
        (!priceMin || priceMin <= n.price) &&
        (!priceMax || priceMax >= n.price)
    )));

    console.log(type)
}

function outputGoods(goods) {
    document.getElementById('houses').innerHTML = goods.map(n => `
    <div class="single-house unhide">
        <div class="front">
            <img src="${n.image}">
            <h3 class="house__name title-sm2">${n.name}</h3>
    
          <div class="house__info">
            <div class="info__item beds" title="beds"><i class="fas fa-bed"></i> <p>${n.beds}</p></div>
            <div class="info__item showers" title="showers"><i class="fas fa-bath"></i> <p>${n.showers}</p></div>
            <div class="info__item rooms" title="Rooms"><i class="far fa-border-all"></i> <p>${n.rooms}</p></div>
          </div>
        </div>
        <div class="back">
            <h4 class="back__title title-sm2">Hello</h4>
            <h3 class="house__name-back title-sm2">It is: ${n.name}</h3>
            <p class="house__description-back text">Location: ${n.location}</p>
            <p class="house__description-back text">Type of property: ${n.typeMain}</p>
            <p class="house__description-back text">Type: ${n.type}</p>
            <p class="house__description-back text">Price: ${n.price}$ per night</p>

        </div>
    </div>
  `).join('');
    console.log(goods.length >= 1)
    if (!goods.length) {
        document.getElementById('houses').innerHTML = "<p class='empty__warning title-sm'>Unfortunately, there is no suitable option for you. <br> Try choosing other parameters</p>"

    }

    size_li = $("#houses > div").length;
    console.log(size_li)
    let quantityItems = 0
    let quantityToAdd = 0

    if (window.screen.width > 992) {
        quantityItems = 6
        quantityToAdd = 3
    } else {
        quantityItems = 4
        quantityToAdd = 2
    }
    x = quantityItems
    $('#houses > div:lt(' + x + ')').show();
    console.log(goods)

    $('#loadMore').click(function () {
        x = (x + quantityToAdd <= size_li) ? x + quantityToAdd : size_li;
        $('#houses > div:lt(' + x + ')').show();
    });
}

const DATA = [
    {
        "typeMain": "Flat",
        "name": "Malto House",
        "type": "Residential",
        "price": 100,
        "image": "/img/houses/01.png",
        "location": "Arizona",
        "beds": 3,
        "showers": 2,
        "rooms": 4,

    },
    {
        "typeMain": "Condo",
        "name": "Malto House",
        "type": "Residential",
        "price": 235,
        "image": "/img/houses/02.png",
        "location": "Florida",
        "beds": 4,
        "showers": 1,
        "rooms": 3
    },
    {
        "typeMain": "Apartment",
        "name": "Malto House",
        "type": "Commercial",
        "price": 340,
        "image": "/img/houses/03.png",
        "location": "New York",
        "beds": 5,
        "showers": 3,
        "rooms": 6,
    },
    {
        "typeMain": "Apartment",
        "name": "Malto House",
        "type": "Commercial",
        "price": 50,
        "image": "/img/houses/04.png",
        "location": "Florida",
        "beds": 2,
        "showers": 1,
        "rooms": 2,
    },
    {
        "typeMain": "Apartment",
        "name": "Malto House",
        "type": "Land",
        "price": 30,
        "image": "/img/houses/05.png",
        "location": "California",
        "beds": 1,
        "showers": 1,
        "rooms": 1,
    },
    {
        "typeMain": "Condo",
        "name": "Malto House",
        "type": "Residential",
        "price": 290,
        "image": "/img/houses/06.png",
        "location": "Florida",
        "beds": 8,
        "showers": 4,
        "rooms": 12,
    },
    {
        "typeMain": "Condo",
        "name": "Malto House",
        "type": "Residential",
        "price": 750,
        "image": "https://via.placeholder.com/328x260",
        "location": "Florida",
        "beds": 8,
        "showers": 4,
        "rooms": 12,
    },
    {
        "typeMain": "Apartment",
        "name": "Malto House",
        "type": "Residential",
        "price": 220,
        "image": "https://via.placeholder.com/328x260",
        "location": "New York",
        "beds": 8,
        "showers": 4,
        "rooms": 12,
    },
    {
        "typeMain": "Condo",
        "name": "Malto House",
        "type": "Residential",
        "price": 130,
        "image": "https://via.placeholder.com/328x260",
        "location": "California",
        "beds": 8,
        "showers": 4,
        "rooms": 12,
    },
    {
        "typeMain": "Condo",
        "name": "Malto House",
        "type": "Residential",
        "price": 100,
        "image": "https://via.placeholder.com/328x260",
        "location": "New York",
        "beds": 8,
        "showers": 4,
        "rooms": 12,
    },
    {
        "typeMain": "Condo",
        "name": "Malto House",
        "type": "Residential",
        "price": 600,
        "image": "https://via.placeholder.com/328x260",
        "location": "California",
        "beds": 8,
        "showers": 4,
        "rooms": 12,
    },
    {
        "typeMain": "Condo",
        "name": "Malto House",
        "type": "Residential",
        "price": 1000,
        "image": "https://via.placeholder.com/328x260",
        "location": "New York",
        "beds": 8,
        "showers": 4,
        "rooms": 12,
    },
    {
        "typeMain": "Condo",
        "name": "Malto House",
        "type": "Residential",
        "price": 400,
        "image": "https://via.placeholder.com/328x260",
        "location": "Arizona",
        "beds": 8,
        "showers": 4,
        "rooms": 12,
    },
    {
        "typeMain": "Condo",
        "name": "Malto House",
        "type": "Residential",
        "price": 1200,
        "image": "https://via.placeholder.com/328x260",
        "location": "New York",
        "beds": 8,
        "showers": 4,
        "rooms": 12,
    },

];

outputGoods(DATA);








