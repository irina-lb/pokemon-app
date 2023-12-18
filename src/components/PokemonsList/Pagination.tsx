"use client";
import { ChangeEvent, FC } from "react";
import { Pagination, Stack } from "@mui/material";

type AppPaginationProps = {
  countPage: number;
  currentPage: number;
  setCurrentPage: (value: number) => void;
};

const AppPagination: FC<AppPaginationProps> = ({ countPages, currentPage, setCurrentPage }) => {
  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };
  return (
    <Stack
      spacing={1}
      alignItems="center"
      sx={{
        my: 3,
        py: 1,
        bgcolor: "white",
        borderRadius: "5px",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}
    >
      <Pagination
        data-testid="app-pagination"
        count={countPages}
        page={currentPage}
        onChange={handleChange}
      />
    </Stack>
  );
};

export default AppPagination;
