import { Status } from "@prisma/client";
import { Card, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

interface Props {
  open: number;
  shortBreak: number;
  closed: number;
}

const SaloonSummary = ({ open, shortBreak, closed }: Props) => {
  const containers: {
    label: string;
    value: number;
    status: Status;
  }[] = [
    { label: "Open Saloons", value: open, status: "OPEN" },
    { label: "Short Break Saloons", value: shortBreak, status: "SHORT_BREAK" },
    { label: "Closed Saloons", value: closed, status: "CLOSED" },
  ];
  return (
    <Flex gap="4">
      {containers.map((container) => (
        <Card key={container.label}>
          <Flex direction="column" gap='1'>
            <Link href={`/saloons/list?status=${container.status}`} className="text-sm font-medium">
              {container.label}
            </Link>
            <Text size="5" className="font-bold text-center pt-">
              {container.value}
            </Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default SaloonSummary;
