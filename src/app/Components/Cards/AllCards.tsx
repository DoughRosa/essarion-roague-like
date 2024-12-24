import CardInterface from "@/app/Interfaces/CardInterface";

const allCards: CardInterface[] = [
    {
        id: '1',
        name: 'Golpe',
        cost: 1,
        img: '/Cards/Golpe.png',
        type: 'Ataque',
        rarety: 'basic',
        dmg: 3,
        block: 0,
        text: ''
    },
    {
        id: '2',
        name: 'Bloqueio',
        cost: 1,
        img: '/Cards/Bloqueio.png',
        type: 'Defesa',
        rarety: 'basic',
        dmg: 0,
        block: 3,
        text: ''
    },
];

export default allCards;