// "use client";
// import { Spinner } from "@/app/components";
// import { AlertDialog, Button, Flex } from "@radix-ui/themes";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import toast from "react-hot-toast";

// const DeleteSaloonButton = ({ saloonId }: { saloonId: number }) => {
//   const router = useRouter();
//   const [error, setError] = useState(false);
//   const [isDeleting, setIsDeleting] = useState(false);

//   const deleteSaloon = async () => {
//     try {
//       setIsDeleting(true);
//       await axios.delete("/api/saloons/" + saloonId);
//       toast.success("Saloon has been deleted Successfully!");
//       router.push("/saloons/list");
//       router.refresh();
//     } catch (error) {
//       setIsDeleting(false);
//       setError(true);
//     }
//   };

//   return (
//     <>
//       <div>
//         <AlertDialog.Root>
//           <AlertDialog.Trigger>
//             <Button color="red" disabled={isDeleting}>
//               Delete Saloon
//               {isDeleting && <Spinner />}
//             </Button>
//           </AlertDialog.Trigger>
//           <AlertDialog.Content>
//             <AlertDialog.Title>Delete this Saloon</AlertDialog.Title>
//             <AlertDialog.Description>
//               Are you Sure you want to delete Saloon? This action cannot be
//               undone.
//             </AlertDialog.Description>
//             <Flex mt="4" gap="4">
//               <AlertDialog.Cancel>
//                 <Button variant="surface" color="gray">
//                   Cancel
//                 </Button>
//               </AlertDialog.Cancel>
//               <AlertDialog.Action>
//                 <Button color="red" onClick={deleteSaloon}>
//                   Delete Saloon
//                 </Button>
//               </AlertDialog.Action>
//             </Flex>
//           </AlertDialog.Content>
//         </AlertDialog.Root>
//         <AlertDialog.Root open={error}>
//           <AlertDialog.Content>
//             <AlertDialog.Title>Failed to Delete Saloon</AlertDialog.Title>
//             <AlertDialog.Description>
//               An error occurred while trying to delete the saloon. Please try
//               again later.
//             </AlertDialog.Description>
//             <Button
//               color="gray"
//               variant="soft"
//               mt="4"
//               onClick={() => setError(false)}
//             >
//               OK
//             </Button>
//           </AlertDialog.Content>
//         </AlertDialog.Root>
//       </div>
//     </>
//   );
// };

// export default DeleteSaloonButton;

"use client";
import { Spinner } from "@/app/components";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const DeleteSaloonButton = ({ saloonId }: { saloonId: number }) => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteSaloon = async () => {
    try {
      setIsDeleting(true);
      await axios.delete("/api/saloons/" + saloonId);
      toast.success("Saloon has been deleted successfully!");
      router.push("/saloons/list");
      router.refresh();
    } catch (error) {
      setIsDeleting(false);
      setError(true);
    }
  };

  return (
    <>
      <div>
        <AlertDialog.Root>
          <AlertDialog.Trigger>
            <Button color="red" disabled={isDeleting}>
              Delete Saloon
              {isDeleting && <Spinner />}
            </Button>
          </AlertDialog.Trigger>
          <AlertDialog.Content>
            <AlertDialog.Title>Delete this Saloon</AlertDialog.Title>
            <AlertDialog.Description>
              Are you sure you want to delete this Saloon? This action cannot be
              undone.
            </AlertDialog.Description>
            <Flex mt="4" gap="4">
              <AlertDialog.Cancel>
                <Button variant="surface" color="gray">
                  Cancel
                </Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action>
                <Button color="red" onClick={deleteSaloon}>
                  Delete Saloon
                </Button>
              </AlertDialog.Action>
            </Flex>
          </AlertDialog.Content>
        </AlertDialog.Root>

        {/* Error dialog */}
        <AlertDialog.Root open={error}>
          <AlertDialog.Content>
            <AlertDialog.Title>Failed to Delete Saloon</AlertDialog.Title>
            <AlertDialog.Description>
              An error occurred while trying to delete the saloon. Please try
              again later.
            </AlertDialog.Description>
            <Button
              color="gray"
              variant="soft"
              mt="4"
              onClick={() => setError(false)}
            >
              OK
            </Button>
          </AlertDialog.Content>
        </AlertDialog.Root>
      </div>
    </>
  );
};

export default DeleteSaloonButton;