"use client";
import { FC } from "react";
import { LinearProgress, linearProgressClasses, styled, Typography, Stack } from "@mui/material";

type ProgressBarProps = {
  title: string;
  value: number;
};

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#91bab3",
  },
}));

const ProgressBar: FC<ProgressBarProps> = ({ title, value }) => {
  return (
    <Stack data-testid={`progress-bar-${title}`}>
      <Typography sx={{ mt: 2, textAlign: "left" }}>{title}</Typography>
      <BorderLinearProgress variant="determinate" value={value} />
    </Stack>
  );
};
export default ProgressBar;
