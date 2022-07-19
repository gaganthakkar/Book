import { useMemo } from "react";

export default function useColumns() {
  const columns = useMemo(
    () => [
      {
        Header: "Author",
        accessor: "author_name[0]",
      },
      {
        Header: "title",
        accessor: "title",
      },
      {
        Header: "publish year",
        accessor: "publish_year[0]",
      },
      {
        Header: "book cover",
        accessor: "subtitle",
      },
    ],
    []
  );

  return columns;
}
