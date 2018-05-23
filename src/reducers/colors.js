const arr = [
    {
        id: 1,
        name: 'green',
        img: 'https://talesofarabia.files.wordpress.com/2013/01/green.jpg',
    },
    {
        id: 2,
        name: 'green',
        img: 'https://talesofarabia.files.wordpress.com/2013/01/green.jpg',
    },
    {
        id: 3,
        name: 'blue',
        img: 'http://www.wampstore.com/store/image/cache/data/Wamp/Products/Vallejo/intense%20blue-400x400.jpg',
    },
    {
        id: 4,
        name: 'blue',
        img: 'http://www.wampstore.com/store/image/cache/data/Wamp/Products/Vallejo/intense%20blue-400x400.jpg',
    },
    {
        id: 5,
        name: 'yellow',
        img: 'https://www.beautycolorcode.com/ffea00-400x400.png'
    },
    {
        id: 6,
        name: 'yellow',
        img: 'https://www.beautycolorcode.com/ffea00-400x400.png'
    },
    {
        id: 7,
        name: 'red',
        img: 'https://www.jokertattoo.net/images/cc_colors_red.jpg'
    },
    {
        id: 8,
        name: 'red',
        img: 'https://www.jokertattoo.net/images/cc_colors_red.jpg'
    },
    {
        id: 9,
        name: 'white',
        img: 'https://www.beautycolorcode.com/f6f6f6-400x400.png'
    },
    {
        id: 10,
        name: 'white',
        img: 'https://www.beautycolorcode.com/f6f6f6-400x400.png'
    },
    {
        id: 11,
        name: 'pink',
        img: 'https://www.beautycolorcode.com/ff91a4-400x400.png'
    },
    {
        id: 12,
        name: 'pink',
        img: 'https://www.beautycolorcode.com/ff91a4-400x400.png'
    },
    {
        id: 13,
        name: 'black',
        img: 'https://www.beautycolorcode.com/0f0f0f-400x400.png'
    },
    {
        id: 14,
        name: 'black',
        img: 'https://www.beautycolorcode.com/0f0f0f-400x400.png'
    },
    {
        id: 15,
        name: 'violet',
        img: 'https://www.beautycolorcode.com/872d8c-400x400.png'
    },
    {
        id: 16,
        name: 'violet',
        img: 'https://www.beautycolorcode.com/872d8c-400x400.png'
    }
];

const initialState = arr.sort(function() {return 0.8 - Math.random()});
console.log(initialState);

export default function colors(state = initialState) {
    return state;
}