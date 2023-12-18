import { render, fireEvent, screen } from "@testing-library/react";
import AppPagination from "../Pagination";

const mockSetCurrentPage = jest.fn();

describe("Pagination.tsx", () => {
  const countPages = 5;
  const currentPage = 2;
  const countPage = 10;

  it("renders AppPagination component correctly", () => {
    render(
      <AppPagination
        countPages={countPages}
        currentPage={currentPage}
        setCurrentPage={mockSetCurrentPage}
        countPage={countPage}
      />,
    );

    expect(screen.getByTestId("app-pagination")).toBeInTheDocument();
  });

  it("page change correctly on click", () => {
    render(
      <AppPagination
        countPages={countPages}
        currentPage={currentPage}
        setCurrentPage={mockSetCurrentPage}
        countPage={countPage}
      />,
    );

    fireEvent.click(screen.getByText("3"));
    expect(mockSetCurrentPage).toHaveBeenCalledWith(3);
  });
});
