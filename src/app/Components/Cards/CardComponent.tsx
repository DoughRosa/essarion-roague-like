import CardInterface from "@/app/Interfaces/CardInterface";

interface CardProps {
    card: CardInterface;
}

export default function CardComponent({card}: CardProps) {
  return (
    <div
    style={{
        position: "relative",
        width: "8.2vw",
        height: "24vh",
        backgroundImage: `url(${card.img})`,
        backgroundSize: "cover",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        color: "white",
        textShadow: "1px 1px 2px black",
        fontFamily: "Arial, sans-serif",
    }}>
      <div
        style={{
          position: "absolute",
          borderRadius: "50%",
          width: "2vw",
          height: "4.6vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "3vh",
          fontWeight: "bold",
          textShadow: "-2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black"
        }}
      >
        {card.cost}
      </div>

      <div
        style={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          padding: "1vw",
          top: "11vh",
          borderRadius: "5px",
          textAlign: "center",
          fontSize: "12px",
        }}
      >
        {card.text}
      </div>
    </div>
  );
}