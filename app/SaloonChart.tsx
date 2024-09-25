"use client";
import { Card } from "@radix-ui/themes";
import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar } from "recharts";
import React from "react";

interface Props {
  open: number;
  shortBreak: number;
  closed: number;
}

const SaloonChart = ({ open, shortBreak, closed }: Props) => {
  const data = [
    { label: "Open", value: open },
    { label: "Short Break", value: shortBreak },
    { label: "Closed", value: closed },
  ];
  return (
    <Card>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="label" />
          <YAxis />
          <Bar dataKey="value" fill="#8884d8" barSize={70} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default SaloonChart;
