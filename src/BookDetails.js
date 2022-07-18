// useTable({ columns, data: tableData }) // must be data
// 

import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import {Link} from 'react-router-dom';
import { useTable, useSortBy } from "react-table";
import useColumns from "./useColumns";
import './styles.css';


const BookDetails = () => {
    const {title} = useParams();
    const {data, error, isPending } = useFetch(`http://openlibrary.org/search.json?q=${title}`);
    console.log('book', data);
    let book = data ? data.docs : [];
    console.log("newbook", book);
    const columns = useColumns();
    console.log('columns', columns);
    const table = useTable({ columns, data:book }, useSortBy);

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow
    } = table;
    return (
        // <div className='book-details'>
        //     <div>
        //         <h2>{book ? book.title : 'Loading Book Title'}</h2>
        //     </div>
        //     <div className='book-info'>
        //         <div className='text'>
        //             <p>{`ISBN: ${isbn}`}</p>
        //             <p>{`Published: ${book ? book?.publish_date : 'Loading'}`}</p>
        //             <p>{`Pages: ${book ? book?.number_of_pages : 'Loading'}`}</p>
        //             <p>{`Publishers: ${book ? book?.publishers?.map((publisher, index, publisers) => {
          //                 return (publisher.name + (index < publisers.length - 1 ? ', ' : ''));
          //             }) : 'Loading'}`}</p>
          //         </div>
          //         <div className='book-cover'>
          //             <img src={book?.cover?.medium} alt={`Cover for: ${book?.title}`}/>
          //         </div>
          //     </div>
          //     <Link to='/'><button>Search Another Book</button></Link>
          // </div>
          <div className="container">
             {/* {isPending && <p>'Book Data is Loading...'</p>} */}
              {/* {error && <p>'Sorry. Something went wrong.'</p>} */}
              
               <table {...getTableProps()}>
                  <thead>
                    {headerGroups.map((headerGroup) => (
                      <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                          // Aplicamos las propiedades de ordenación a cada columna
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
               
                  <tbody {...getTableBodyProps()}>
                    {
                      // Loop over the table rows
                       rows.map((row) => {
                        // Prepare the row for display
                        prepareRow(row);
                        return (
                          // Apply the row props
                          <tr {...row.getRowProps()}>
                            {
                              // Loop over the rows cells
                              row.cells.map((cell) => {
                                // Apply the cell props
                                return (
                                  <td {...cell.getCellProps()}>
                                    {
                                      // Render the cell contents
                                      cell.render("Cell")
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

         
                <Link to='/'><button>Search Another Book</button></Link>
            </div>
            );
   
  }
  
  export default BookDetails;


  /* 
  <div className="container">
  //     {isPending && <p>'Book Data is Loading...'</p>}
  //     {error && <p>'Sorry. Something went wrong.'</p>}
      
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  // Aplicamos las propiedades de ordenación a cada columna
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
       
          <tbody {...getTableBodyProps()}>
            {
              // Loop over the table rows
              rows&& rows.map((row) => {
                // Prepare the row for display
                prepareRow(row);
                return (
                  // Apply the row props
                  <tr {...row.getRowProps()}>
                    {
                      // Loop over the rows cells
                      row.cells.map((cell) => {
                        // Apply the cell props
                        return (
                          <td {...cell.getCellProps()}>
                            {
                              // Render the cell contents
                              cell.render("Cell")
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
 
        <Link to='/'><button>Search Another Book</button></Link>
    </div>
    );

    */


