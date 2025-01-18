import PathwayInterface from "../../Interfaces/PathwayInterface";
import { v4 as uuidv4 } from "uuid";

const listOfPathways: PathwayInterface[] = [
    {  
        id: uuidv4(),
        value: 1,
        img: '/Background/Fight.png',
        name: 'Lutar',
        path: '/fight'
    },
    {   
        id: uuidv4(),
        value: 3,
        img: '/Background/Rest.png',
        name: 'Descansar',
        path: '/rest'
    },
    {
        id: uuidv4(),
        value: 4,
        img: '/Background/Shop.png',
        name: 'Comprar',
        path: '/merchant'
    },
]

export default listOfPathways;