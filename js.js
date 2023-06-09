const plans = document.querySelector('.plans');

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
let mark = `<i class="fa-solid fa-xmark"></i>`;
let check = `<i class="fa-solid fa-check"></i>`;
let basic = '29$',
    standart = '69$',
    premium = '99$';

for (let i = 0; i < plan.length; i++) {
    let elem = plan[i];
    let addSign =  elem.email ? check : mark;
    let addSignDown = elem.download ? check : mark;

    let changes = i == 0 ? basic : 
    i == 1 ? standart : 
    i == 2 ? premium : 'error';


    let wrapColor = i == 1 ? "blue" :
    i == 2 ? "yellow" : "error";
    // elem.classList.add(wrapColor);
    console.log(wrapColor);


    let wrapping = `
    <div class="price__wrap ">
        <div class="price__plan ">  
            <div class="price__plan-title">basic plan</div>
            <div class="price__plan-price">${changes}</div>
            <div class="price__plan-month">per month</div>
        </div>
        <div class="price__wrap-info">
            <div class="info">${check} ${plan[i].support} support</div>
            <div class="info">${check} ${plan[i].space}gb Server Space</div>
            <div class="info">${check} ${plan[i].user} Users per Project</div>
            <div class="info">${addSign} Email Integration</div>
            <div class="info">${addSignDown} Unlimited Download</div>
        </div>
            <button class="button">choose plan</button>
        </div>
    </div>
    `
    plans.innerHTML += wrapping;
};
