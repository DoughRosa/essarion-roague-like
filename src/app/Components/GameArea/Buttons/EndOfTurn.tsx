import {Button} from "@nextui-org/react";

interface EndOfTurnProps {
    label: string;
    action: () => void;
}

export default function EndOfTurnButton({label, action}: EndOfTurnProps) {
  return (
    <div className="flex flex-wrap gap-4 items-center"
    style={{
      position: 'absolute',
      top: '60vh',
      right: '5vw',
    }}>
      <Button onPress={action}
      style={{
        height: '12vh',
        width: '12vh',
        fontWeight: 'bolder',
        borderRadius: '100%',
        border: 'solid 2px',
        fontSize: '2vh'
      }}>
        {label}
      </Button>
    </div>
  );
}
