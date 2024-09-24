// "use client";

// import { Skeleton } from "@/app/components";
// import { Saloon, User } from "@prisma/client";
// import { Select } from "@radix-ui/themes";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";

// const AssigneeSelect = ({ saloon }: { saloon: Saloon }) => {
//   const {
//     data: users,
//     error,
//     isLoading,
//   } = useQuery<User[]>({
//     queryKey: ["users"],
//     queryFn: () => axios.get("/api/users").then((res) => res.data),
//     staleTime: 60 * 1000,
//     retry: 3,
//   });

//   if (isLoading) return <Skeleton />;

//   if (error) return null;

//   return (
//     <>
//       <Select.Root
//         defaultValue={saloon.assignedToUserId || ""}
//         onValueChange={async (userId) => {
//           try {
//             await axios.patch("/api/saloons/" + saloon.id, {
//               assignedToUserId: userId || null,
//             });
//             toast.success("Saloon has been assigned Successfully!");
//           } catch (error) {
//             toast.error("Changes could'nt saved about assignee");
//             console.error(error);
//           }
//         }}
//       >
//         <Select.Trigger />
//         <Select.Content>
//           <Select.Group>
//             <Select.Label>Suggestions</Select.Label>
//             <Select.Item value="">Unassign</Select.Item>
//             {users?.map((user) => (
//               <Select.Item key={user.id} value={user.id}>
//                 {user.name}
//               </Select.Item>
//             ))}
//           </Select.Group>
//         </Select.Content>
//       </Select.Root>
//       <Toaster />
//     </>
//   );
// };

// export default AssigneeSelect;

"use client";

import { Skeleton } from "@/app/components";
import { Saloon, User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const AssigneeSelect = ({ saloon }: { saloon: Saloon }) => {
  const { data: users, error, isLoading } = useUsers();

  if (isLoading) return <Skeleton />;

  if (error) return null;

  const assignIssue = (userId: string) => {
    axios
  .patch("/api/saloons/" + saloon.id, {
    assignedToUserId: userId || null,
  })
  .then(() => {
    toast.success("Changes saved successfully!",);
  })
  .catch(() => {
    toast.error("Changes couldn't be saved about assignee", );
  });

  };

  return (
    <>
      <Select.Root
        defaultValue={saloon.assignedToUserId || ""}
        onValueChange={assignIssue}
      >
        <Select.Trigger />
        <Select.Content>
          <Select.Group>
            <Select.Label>Suggestions</Select.Label>
            <Select.Item value="">Unassigned</Select.Item>
            {users?.map((user) => (
              <Select.Item key={user.id} value={user.id}>
                {user.name}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
      <Toaster />
    </>
  );
};

const useUsers = () =>
  useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () =>
      axios.get("/api/users").then((res) => res.data),
    staleTime: 60 * 1000, //60s
    retry: 3,
  });

export default AssigneeSelect;