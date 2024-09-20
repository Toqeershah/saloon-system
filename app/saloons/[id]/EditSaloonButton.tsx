import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const EditSaloonButton = ({saloonId}: {saloonId: number}) => {
  return (
    <div>
      <Button>
        <Pencil2Icon />
        <Link href={`/saloons/${saloonId}/edit`}>Edit Saloon</Link>
      </Button>
    </div>
  );
};

export default EditSaloonButton;
