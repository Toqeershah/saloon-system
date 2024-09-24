'use client'
import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import React from "react";

const statuses: { label: string; value?: Status }[] = [
  { label: "All" },
  { label: "Open", value: "OPEN" },
  { label: "Short Break", value: "SHORT_BREAK" },
  { label: "Closed", value: "CLOSED" },
];

const SaloonStatusFilter = () => {
  return (
    <Select.Root>
      <Select.Trigger />
      <Select.Content>
        {statuses.map((status) => (
          <Select.Item key={status.value} value={status.value || ""}>
            {status.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default SaloonStatusFilter;
