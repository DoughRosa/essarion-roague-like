import PathwayInterface from "@/app/Interfaces/PathwayInterface";
import { Image } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import listOfPathways from "./../Paths/AllPathways";
import { useAppDispatch, useAppSelector } from "@/app/Store/hooks";
import { enemies } from "../Enemies/BasicEnemies";
import { setEnemyImg, setEnemyInScreen, setEnemyLife, setEnemyMaxLife, setEnemyPower } from "@/app/Store/models/enemiesSlice";

export default function PathImg() {
  const [hoveredPathway, setHoveredPathway] = useState<string | null>(null);
  const [pathways, setPathways] = useState<PathwayInterface[]>([]);
  const ladderStep = useAppSelector((state) => state.rootReducers.game.ladderStep);
  const dispatch = useAppDispatch();


  function getRandomPathways(): PathwayInterface[] {
    const weights: Record<number, number> = {
      1: 80,
      2: 10,
      3: 8,
      4: 7,
      5: 5
    };
    
    const weightedList: PathwayInterface[] = [];
    listOfPathways.forEach((pathway) => {
      const weight = weights[pathway.value] || 0;
      for (let i = 0; i < weight; i++){
        weightedList.push(pathway);
      }
    });

    const selectedPathways: PathwayInterface[] = [];
    while (selectedPathways.length < 3) {
      const randomIndex = Math.floor(Math.random() * weightedList.length);
      const newPathways = {...weightedList[randomIndex], id: uuidv4()}
      
      selectedPathways.push(newPathways);
    }
    
    return selectedPathways
  }

  useEffect(() => {
    setPathways(getRandomPathways());
  }, []);

  useEffect( () => {
    const selectedEnemy = enemies.find((selected) => selected.value === ladderStep);
    
    if (selectedEnemy) {
      dispatch(setEnemyInScreen(selectedEnemy));
      dispatch(setEnemyLife(selectedEnemy.currentLife));
      dispatch(setEnemyMaxLife(selectedEnemy.initialLife));
      dispatch(setEnemyImg(selectedEnemy.img));
      dispatch(setEnemyPower(selectedEnemy.currentPower));

    }
  }, [ladderStep, dispatch]);

  return (
    <div
    style={{
      display: 'flex',
      margin: '2vh',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: "60vw",
      height: "50vh",
    }}>
      {pathways.map((paths) => (
        <div
        key={paths.id}
        style={{
            width: "10vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "3vh",
            fontWeight: "bold",
            textShadow: "-2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black",
            cursor: "pointer",
            color: "whitesmoke"
        }}>
        {paths.name}
        <Image
          alt="Picture of the pathway"
          className="Pathway"
          src={paths.img}
          width={250}
          onClick={()=> {
            window.open(`${paths.path}`, "_self");
          }}
          onMouseEnter={() => setHoveredPathway(paths.id)}
          onMouseLeave={() => setHoveredPathway(null)}
          style={{
            borderRadius: "10px",
            border: `solid 0.5vh ${hoveredPathway === paths.id ? 'lightblue' : 'black'}`,
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            cursor: "pointer"
          }}
        />
      </div>
      ))}
    </div>
  );
}