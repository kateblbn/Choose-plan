const checkOrMark = document.querySelector('.checkOrMark');
const button = document.querySelectorAll('.button');

button.forEach( btn => {
    btn.addEventListener('click', function buttonAll() {
        alert('Thank You for Your order!');

    })
});

let plan = [ 
    {
        support: 'Unlimited',
        space: 5,
        user: 2,
        email: false,
        download: false
    },
    {
        support: 'Unlimited',
        space: 10,
        user: 5,
        email: true,
        download: false
    },
    {
        support: 'Unlimited',
        space: 25,
        user: 10,
        email: true,
        download: true
    }
];
for (let i = 0; i < plan.length; i++) {
    const elem = plan[i];
     console.log(elem.download);
    let pic = (elem.download == false )? 'fa-solid fa-xmark' : 'fa-solid fa-check';
console.log(pic);
let test = `
<div class="${pic}"></div>
`
// console.log(test);
checkOrMark.innerHTML = test;
}