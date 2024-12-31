import CardInterface from "@/app/Interfaces/CardInterface"
import { payEnergyCost } from "./PayEnergyCostFunction"
import CharacterInterface from "@/app/Interfaces/CharacterInterface"
import { dealDmg } from "./DamageFunction"
import { EnemyState } from "@/app/Store/models/enemiesSlice"
import { gainShield } from "./GainShieldFunction"

export const playCard = (card: CardInterface, character?: CharacterInterface, enemy?: EnemyState) => {
    if(character){
        payEnergyCost(card, character);
    }

    switch(card.name){
        case "Golpe":
            if(character && enemy){
                dealDmg(card, character, enemy);
            }

        case "Bloqueio":
            if(character){
                gainShield(card, character);
            }

            break;
            default: break;
    }
}