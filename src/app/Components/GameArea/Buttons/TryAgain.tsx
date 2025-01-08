import {Button} from "@nextui-org/react";

interface TryAgainProps {
    label: string;
    action: () => void;
}

export default function TryAgainButton({label, action}: TryAgainProps) {
  

  return (
    <div className="flex flex-wrap gap-4 items-center"
    style={{
      position: 'absolute',
      top: '60vh',
    }}>
      <Button onPress={action}
      style={{
        height: '12vh',
        width: '20vh',
        fontWeight: 'bolder',
        border: 'solid 2px',
        fontSize: '4vh'
      }}>
        {label}
      </Button>
    </div>
  );
}
