const links = [
    'https://t.me/hamster_kombat_bot?start=kentId425512839',
    'https://t.me/hamster_kombat_bot/start?startapp=kentId474502779', // i
    'https://t.me/hamster_kombat_bot?start=kentId6700706092',
    'https://t.me/hamster_kombat_bot/start?startapp=kentId5047182152', // i
    'https://t.me/hamster_kombat_bot?start=kentId6700706092',
    'https://t.me/hamster_kombat_bot/start?startapp=kentId7151409218', // i
];

const defaultLink = links[0];
const cta = document.getElementById('cta');

const getRandomNumber = () => {
    return Math.floor(Math.random() * links.length);
};

const redirectUser = () => {
    const randomNumber = getRandomNumber();
    const target = links[randomNumber];
    window.location.replace(target);
};

cta.addEventListener('click', redirectUser);
