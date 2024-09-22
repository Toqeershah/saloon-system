"use client";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";


// const deleteSaloon = 

const DeleteSaloonButton = ({ saloonId }: { saloonId: number }) => {

    const router = useRouter()

  return (
    <div>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button color="red">Delete Saloon</Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title>
            Delete this Saloon
          </AlertDialog.Title>
          <AlertDialog.Description>
            Are you Sure you want to delete Saloon? This action cannot be undone.
          </AlertDialog.Description>
          <Flex mt="4" gap='4'>
            <AlertDialog.Cancel>
                <Button variant="surface" color="gray">Cancel</Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
                <Button color="red" onClick={async () => {
                   await axios.delete('/api/saloons/' + saloonId);
                   router.push('/saloons');
                   router.refresh();
                }}>Delete Saloon</Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </div>
  );
};

export default DeleteSaloonButton;
