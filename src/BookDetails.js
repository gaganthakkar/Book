import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import { useTable, useSortBy } from "react-table";
import useColumns from "./useColumns";
import "./styles.css";

const BookDetails = () => {
  const { title } = useParams();
  const { data, error, isPending } = useFetch(
    `http://openlibrary.org/search.json?q=${title}`               // fetching the API
  );
  let book = data ? data.docs : [];
  const columns = useColumns();
  const table = useTable({ columns, data: book }, useSortBy);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    table;

  return (
    <div className="container">
      {isPending && <p>'Book Data is Loading...'</p>}
      {error && <p>'Sorry. Something went wrong.'</p>}

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={
                    column.isSorted
                      ? column.isSortedDesc
                        ? "desc"
                        : "asc"
                      : ""
                  }
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>                    {/* Loop over the table rows */}
          {
            rows.map((row) => {
              prepareRow(row);
              return (                                      // Apply the row props
                <tr {...row.getRowProps()}>
                  {
                    row.cells.map((cell) => {               // Loop over the rows cells                     
                      return (
                        <td {...cell.getCellProps()}>
                          {
                            cell.render("Cell")          // Render the cell contents
                          }
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>

      <Link to="/">
        <button>Search Another Book</button>             
      </Link>
    </div>
  );
};

export default BookDetails;

