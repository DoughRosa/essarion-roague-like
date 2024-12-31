import CardInterface from "@/app/Interfaces/CardInterface";

class Card implements CardInterface {
    id: string;
    name: string;
    cost: number;
    img: string;
    type: string;
    rarety: string;
    dmg: number;
    block: number;
    text: string;
  
    constructor(data: {
      id: string;
      name: string;
      cost: number;
      img: string;
      type: string;
      rarety: string;
      dmg: number;
      block: number;
      textTemplate: string;
    }) {
      this.id = data.id;
      this.name = data.name;
      this.cost = data.cost;
      this.img = data.img;
      this.type = data.type;
      this.rarety = data.rarety;
      this.dmg = data.dmg;
      this.block = data.block;
      this.text = this.generateText(data.textTemplate);
    }
  
    private generateText(template: string): string {
      return template
        .replace("${dmg}", this.dmg.toString())
        .replace("${block}", this.block.toString())
        .replace("${cost}", this.cost.toString());
    }
  }

  const allCards: Card[] = [
    new Card({
      id: '1',
      name: 'Golpe',
      cost: 1,
      img: '/Cards/Golpe.png',
      type: 'Ataque',
      rarety: 'basic',
      dmg: 3,
      block: 0,
      textTemplate: "Causa ${dmg} de dano.",
    }),
    new Card({
      id: '2',
      name: 'Bloqueio',
      cost: 1,
      img: '/Cards/Bloqueio.png',
      type: 'Defesa',
      rarety: 'basic',
      dmg: 0,
      block: 3,
      textTemplate: "Ganhe ${block} de escudo.",
    }),
  ];

  export default allCards; 