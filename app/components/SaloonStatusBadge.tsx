import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import React from "react";

// interface Props {
//     status: Status
// }

const statusMap: Record<
  Status,
  { label: string; color: "red" | "violet" | "green" }
> = {
  OPEN: { label: "Open", color: "green" },
  CLOSED: { label: "Closed", color: "red" },
  SHORT_BREAK: { label: "Short Break", color: "violet" },
};

const SaloonStatusBadge = ({ status }: { status: Status }) => {
  return (
    <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  );
};

export default SaloonStatusBadge;
