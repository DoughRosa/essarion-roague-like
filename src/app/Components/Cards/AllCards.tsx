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
      id: "1",
      name: "Golpe",
      cost: 1,
      img: "/Cards/Golpe.png",
      type: "Ataque",
      rarety: "basic",
      dmg: 5,
      block: 0,
      textTemplate: "Causa ${dmg} de dano.",
    }),
    new Card({
      id: "2",
      name: "Bloqueio",
      cost: 1,
      img: "/Cards/Bloqueio.png",
      type: "Defesa",
      rarety: "basic",
      dmg: 0,
      block: 5,
      textTemplate: "Ganhe ${block} de escudo.",
    }),
    new Card({
      id: "3",
      name: "Fogo Mágico",
      cost: 0,
      img: "/Cards/FogoMagico.png",
      type: "Ataque",
      rarety: "comum",
      dmg: 5,
      block: 0,
      textTemplate: "Causa ${dmg} de dano.",
    }),
    new Card({
      id: "4",
      name: "Barreira Arcana",
      cost: 0,
      img: "/Cards/BarreiraArcana.png",
      type: "Defesa",
      rarety: "comum",
      dmg: 0,
      block: 5,
      textTemplate: "Ganhe ${block} de escudo.",
    }),
    new Card({
      id: "5",
      name: "Lâmina Dupla",
      cost: 3,
      img: "/Cards/LaminaDupla.png",
      type: "Ataque",
      rarety: "rara",
      dmg: 24,
      block: 0,
      textTemplate: "Causa ${dmg} de dano.",
    }),
    new Card({
      id: "6",
      name: "Muralha de Pedra",
      cost: 3,
      img: "/Cards/MuralhaDePedra.png",
      type: "Defesa",
      rarety: "rara",
      dmg: 0,
      block: 20,
      textTemplate: "Ganhe ${block} de escudo.",
    }),
    new Card({
      id: "7",
      name: "Fúria do Dragão",
      cost: 2,
      img: "/Cards/FuriaDoDragao.png",
      type: "Ataque",
      rarety: "épica",
      dmg: 20,
      block: 0,
      textTemplate: "Causa ${dmg} de dano.",
    }),
    new Card({
      id: "8",
      name: "Escudo Divino",
      cost: 2,
      img: "/Cards/EscudoDivino.png",
      type: "Defesa",
      rarety: "épica",
      dmg: 15,
      block: 12,
      textTemplate: "Ganhe ${block} de escudo.",
    }),
    new Card({
      id: "9",
      name: "Rajada de Flechas",
      cost: 2,
      img: "/Cards/RajadaDeFlechas.png",
      type: "Ataque",
      rarety: "comum",
      dmg: 12,
      block: 0,
      textTemplate: "Causa ${dmg} de dano a todos os inimigos.",
    }),
    new Card({
      id: "10",
      name: "Cura Rápida",
      cost: 0,
      img: "/Cards/CuraRapida.png",
      type: "Suporte",
      rarety: "comum",
      dmg: 0,
      block: 4,
      textTemplate: "Recupere ${block} de vida.",
    }),
    new Card({
      id: "11",
      name: "Espinhos Reativos",
      cost: 1,
      img: "/Cards/EspinhosReativos.png",
      type: "Defesa",
      rarety: "rara",
      dmg: 8,
      block: 8,
      textTemplate:
        "Ganhe ${block} de escudo e cause ${dmg} de dano.",
    }),
    new Card({
      id: "13",
      name: "Campo de Força",
      cost: 2,
      img: "/Cards/CampoDeForca.png",
      type: "Defesa",
      rarety: "comum",
      dmg: 0,
      block: 12,
      textTemplate: "Ganhe ${block} de escudo.",
    }),
    new Card({
      id: "14",
      name: "Martelo do Trovão",
      cost: 0,
      img: "/Cards/MarteloDoTrovao.png",
      type: "Ataque",
      rarety: "rara",
      dmg: 8,
      block: 0,
      textTemplate: "Causa ${dmg} de dano.",
    }),
    new Card({
      id: "15",
      name: "Chama Curativa",
      cost: 1,
      img: "/Cards/ChamaCurativa.png",
      type: "Suporte",
      rarety: "rara",
      dmg: 0,
      block: 10,
      textTemplate: "Recupere ${block} de vida.",
    }),
    new Card({
      id: "16",
      name: "Explosão Arcana",
      cost: 1,
      img: "/Cards/ExplosaoArcana.png",
      type: "Ataque",
      rarety: "épica",
      dmg: 10,
      block: 0,
      textTemplate: "Causa ${dmg} de dano.",
    }),
  ];

  export default allCards; 