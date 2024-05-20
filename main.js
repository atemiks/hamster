const links = [
    'https://t.me/hamster_kombat_bot?start=kentId425512839',
    'https://t.me/hamster_kombat_bot?start=kentId6700706092',
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
