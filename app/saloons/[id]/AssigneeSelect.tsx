"use client";

import { Saloon, User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { Skeleton } from "@/app/components";

const AssigneeSelect = ({ saloon }: { saloon: Saloon }) => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get("/api/users").then((res) => res.data),
    staleTime: 60 * 1000,
    retry: 3,
  });

  if (isLoading) return <Skeleton />;

  if (error) return null;

  return (
    <>
      <Select.Root
        defaultValue={saloon.assignedToUserId || ""}
        onValueChange={(userId) => {
          axios.patch("/api/saloons/" + saloon.id, {
            assignedToUserId: userId || null,
          });
        }}
      >
        <Select.Trigger />
        <Select.Content>
          <Select.Group>
            <Select.Label>Suggestions</Select.Label>
            <Select.Item value="">Unassign</Select.Item>
            {users?.map((user) => (
              <Select.Item key={user.id} value={user.id}>
                {user.name}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </>
  );
};

export default AssigneeSelect;

// "use client";

// import { User } from "@prisma/client";
// import { Select } from "@radix-ui/themes";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import React from "react";

// const AssigneeSelect = () => {
//   // Fetch the list of users using useQuery
//   const { data: users, isLoading, isError } = useQuery<User[]>({
//     queryKey: ["users"],
//     queryFn: async () => {
//       const res = await axios.get("/api/users");
//       return res.data;
//     },
//   });

//   // Handle loading state
//   if (isLoading) {
//     return <p>Loading users...</p>;
//   }

//   // Handle error state
//   if (isError) {
//     return <p>Failed to load users. Please try again.</p>;
//   }

//   // Check if we received any users
//   if (!users || users.length === 0) {
//     return <p>No users found</p>;
//   }

//   return (
//     <Select.Root>
//       <Select.Trigger aria-label="Users" />
//       <Select.Content>
//         <Select.Group>
//           <Select.Label>Suggestions</Select.Label>
//           {users?.map((user) => (
//             <Select.Item key={user.id} value={user.id}>
//               {user.name}
//             </Select.Item>
//           ))}
//         </Select.Group>
//       </Select.Content>
//     </Select.Root>
//   );
// };

// export default AssigneeSelect;
