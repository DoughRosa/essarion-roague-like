import CardInterface from "@/app/Interfaces/CardInterface";
import CharacterInterface from "@/app/Interfaces/CharacterInterface";
import { setCharacterEnergy } from "@/app/Store/models/characterSlice";
import { useDispatch } from "react-redux";

export const payEnergyCost = (card: CardInterface, character: CharacterInterface) => {
    const dispatch = useDispatch();
    
    if(card.cost > character.currentEnergy){
        return
      } else {
        dispatch(setCharacterEnergy(character.currentEnergy-card.cost));
      } 
}