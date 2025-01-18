import {Button} from "@nextui-org/react";

interface RestProps {
    label: string;
    action: () => void;
}

export default function RestButtons({label, action}: RestProps) {
  

  return (
    <div className="flex flex-wrap gap-4 items-center">
      <Button onPress={action}
      style={{
        height: '12vh',
        width: '50vh',
        fontWeight: 'bolder',
        border: 'solid 2px',
        margin: '5vh',
        fontSize: '4vh'
      }}>
        {label}
      </Button>
    </div>
  );
}
