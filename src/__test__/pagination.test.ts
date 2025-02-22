import { renderHook } from "@testing-library/react";
import { useMemo } from "react";
import { describe, expect, test } from "@jest/globals";

const usePagination = (currentPage: number, totalPages: number) => {
  const final = useMemo(
    () => (totalPages <= 3 ? [] : [totalPages - 1, totalPages]),
    [totalPages]
  );

  const initial = useMemo(() => {
    if (totalPages <= 3)
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (currentPage <= 2) return [1, 2, 3];
    if (currentPage >= totalPages - 1)
      return [totalPages - 2, totalPages - 1, totalPages];
    return [currentPage - 1, currentPage, currentPage + 1];
  }, [currentPage, totalPages]);

  return { initial, final };
};

describe("usePagination Hook", () => {
  test("returns correct final pages when totalPages <= 3", () => {
    const { result } = renderHook(() => usePagination(1, 3));
    expect(result.current.final).toEqual([]);
  });

  test("returns correct final pages when totalPages > 3", () => {
    const { result } = renderHook(() => usePagination(1, 5));
    expect(result.current.final).toEqual([4, 5]);
  });

  test("returns correct initial pages for small totalPages", () => {
    const { result } = renderHook(() => usePagination(1, 3));
    expect(result.current.initial).toEqual([1, 2, 3]);
  });

  test("returns [1, 2, 3] when on page 1 or 2", () => {
    const { result } = renderHook(() => usePagination(2, 6));
    expect(result.current.initial).toEqual([1, 2, 3]);
  });

  test("returns last 3 pages when on last page", () => {
    const { result } = renderHook(() => usePagination(6, 6));
    expect(result.current.initial).toEqual([4, 5, 6]);
  });
});
