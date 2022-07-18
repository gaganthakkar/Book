import { useTable, useSortBy } from "react-table";
import useRows from "./useRows";
import useColumns from "./useColumns";

import "./styles.css";

export default function App() {
  const columns = useColumns();
  const data1 = {
    numFound: 5,
    start: 0,
    numFoundExact: true,
    docs: [
      {
        key: "/works/OL16821124W",
        type: "work",
        seed: [
          "/books/OL27536767M",
          "/books/OL27536684M",
          "/books/OL25448187M",
          "/books/OL32005574M",
          "/books/OL27505688M",
          "/books/OL38241953M",
          "/books/OL27418523M",
          "/works/OL16821124W",
          "/subjects/leadership",
          "/subjects/teams_in_the_workplace",
          "/authors/OL6645079A"
        ],
        title: "Leaders Eat Last",
        title_suggest: "Leaders Eat Last",
        subtitle: "Why Some Teams Pull Together and Others Don't",
        edition_count: 7,
        edition_key: [
          "OL27536767M",
          "OL27536684M",
          "OL25448187M",
          "OL32005574M",
          "OL27505688M",
          "OL38241953M",
          "OL27418523M"
        ],
        publish_date: [
          "03 November 2016",
          "2017",
          "January 21, 2014",
          "Jan 21, 2014",
          "Jan 06, 2015",
          "Sep 29, 2015"
        ],
        publish_year: [2016, 2014, 2017, 2015],
        first_publish_year: 2014,
        number_of_pages_median: 7,
        lcc: ["HD-0057.70000000"],
        isbn: [
          "9781480542570",
          "1480542598",
          "0241979544",
          "9781480542594",
          "1480542601",
          "9781480542600",
          "1480542571",
          "9780670923175",
          "1480542555",
          "1511321083",
          "9781480542556",
          "9780241979549",
          "0670923176",
          "9781511321082"
        ],
        last_modified_i: 1655060932,
        ebook_count_i: 0,
        has_fulltext: false,
        public_scan_b: false,
        cover_edition_key: "OL38241953M",
        cover_i: 8246311,
        publisher: ["Portfolio Penguin", "Brilliance Audio", "Penguin"],
        language: ["eng"],
        author_key: ["OL6645079A"],
        author_name: ["Simon Sinek"],
        author_alternative_name: ["Simon Sinek Simon Sinek"],
        subject: ["Leadership", "Teams in the workplace"],
        id_amazon: ["1480542598", "1480542555", "1480542601", "0670923176"],
        publisher_facet: ["Brilliance Audio", "Penguin", "Portfolio Penguin"],
        subject_facet: ["Leadership", "Teams in the workplace"],
        _version_: 1735457173745434600,
        lcc_sort: "HD-0057.70000000",
        author_facet: ["OL6645079A Simon Sinek"],
        subject_key: ["leadership", "teams_in_the_workplace"]
      },
      {
        key: "/works/OL27054950W",
        type: "work",
        seed: [
          "/books/OL37347071M",
          "/books/OL36684274M",
          "/works/OL27054950W",
          "/authors/OL6645079A"
        ],
        title: "Leaders Eat Last",
        title_suggest: "Leaders Eat Last",
        has_fulltext: false,
        edition_count: 2,
        edition_key: ["OL37347071M", "OL36684274M"],
        publish_date: ["May 23, 2017", "Feb 28, 1900"],
        publish_year: [1900, 2017],
        first_publish_year: 1900,
        isbn: ["9780670923168", "1543614620", "0670923168", "9781543614626"],
        last_modified_i: 1646057803,
        ebook_count_i: 0,
        cover_edition_key: "OL36684274M",
        cover_i: 12567999,
        publisher: ["Brilliance Audio", "Portfolio Penguin"],
        author_key: ["OL6645079A"],
        author_name: ["Simon Sinek"],
        author_alternative_name: ["Simon Sinek Simon Sinek"],
        publisher_facet: ["Brilliance Audio", "Portfolio Penguin"],
        _version_: 1726016708383080400,
        author_facet: ["OL6645079A Simon Sinek"]
      },
      {
        key: "/works/OL19337656W",
        type: "work",
        seed: [
          "/books/OL26795216M",
          "/works/OL19337656W",
          "/subjects/corporate_culture",
          "/subjects/leadership",
          "/subjects/organizational_change",
          "/subjects/business_&_economics_/_workplace_culture",
          "/subjects/business_&_economics_/_leadership",
          "/subjects/business_&_economics_/_general",
          "/subjects/nyt:advice-how-to-and-miscellaneous=2014-02-16",
          "/subjects/new_york_times_bestseller",
          "/subjects/teams_in_the_workplace",
          "/authors/OL6645079A"
        ],
        title: "Leaders Eat Last",
        title_suggest: "Leaders Eat Last",
        subtitle: "Why Some Teams Pull Together and Others Don't",
        has_fulltext: true,
        edition_count: 1,
        edition_key: ["OL26795216M"],
        publish_date: ["Jan 07, 2014"],
        publish_year: [2014],
        first_publish_year: 2014,
        number_of_pages_median: 368,
        lccn: ["2013039108"],
        lcc: ["HD-0057.70000000.S5487 2014"],
        isbn: ["9781591845324", "1591845327"],
        last_modified_i: 1647145033,
        ebook_count_i: 1,
        ia: ["leaderseatlastwh0000sine"],
        public_scan_b: false,
        ia_collection_s: "printdisabled;inlibrary;internetarchivebooks",
        lending_edition_s: "OL26795216M",
        lending_identifier_s: "leaderseatlastwh0000sine",
        printdisabled_s: "OL26795216M",
        cover_edition_key: "OL26795216M",
        cover_i: 8449856,
        publisher: ["Portfolio"],
        author_key: ["OL6645079A"],
        author_name: ["Simon Sinek"],
        author_alternative_name: ["Simon Sinek Simon Sinek"],
        subject: [
          "Corporate culture",
          "Leadership",
          "Organizational change",
          "BUSINESS & ECONOMICS / Workplace Culture",
          "BUSINESS & ECONOMICS / Leadership",
          "BUSINESS & ECONOMICS / General",
          "nyt:advice-how-to-and-miscellaneous=2014-02-16",
          "New York Times bestseller",
          "Teams in the workplace",
          "Accessible book",
          "Protected DAISY"
        ],
        id_goodreads: ["16144853"],
        ia_box_id: ["IA1775116"],
        publisher_facet: ["Portfolio"],
        subject_facet: [
          "Accessible book",
          "BUSINESS & ECONOMICS / General",
          "BUSINESS & ECONOMICS / Leadership",
          "BUSINESS & ECONOMICS / Workplace Culture",
          "Corporate culture",
          "Leadership",
          "New York Times bestseller",
          "Organizational change",
          "Protected DAISY",
          "Teams in the workplace",
          "nyt:advice-how-to-and-miscellaneous=2014-02-16"
        ],
        _version_: 1727156751947530200,
        lcc_sort: "HD-0057.70000000.S5487 2014",
        author_facet: ["OL6645079A Simon Sinek"],
        subject_key: [
          "accessible_book",
          "business__economics__general",
          "business__economics__leadership",
          "business__economics__workplace_culture",
          "corporate_culture",
          "leadership",
          "new_york_times_bestseller",
          "nytadvice-how-to-and-miscellaneous2014-02-16",
          "organizational_change",
          "protected_daisy",
          "teams_in_the_workplace"
        ]
      },
      {
        key: "/works/OL17845532W",
        type: "work",
        seed: [
          "/books/OL26431671M",
          "/works/OL17845532W",
          "/subjects/corporate_culture",
          "/subjects/leadership",
          "/subjects/organizational_change",
          "/subjects/teams_in_the_workplace",
          "/subjects/nyt:business-books=2017-07-09",
          "/subjects/new_york_times_bestseller",
          "/subjects/organizational_culture",
          "/subjects/organizational_innovation",
          "/subjects/trust",
          "/subjects/culture_d'entreprise",
          "/subjects/changement_organisationnel",
          "/subjects/business_&_economics",
          "/subjects/workplace_culture",
          "/subjects/general",
          "/subjects/travail_d'équipe",
          "/subjects/communication",
          "/subjects/développement_d'aptitudes",
          "/authors/OL6645079A"
        ],
        title:
          "Leaders Eat Last: Why Some Teams Pull Together and Others Don't",
        title_suggest:
          "Leaders Eat Last: Why Some Teams Pull Together and Others Don't",
        has_fulltext: true,
        edition_count: 1,
        edition_key: ["OL26431671M"],
        publish_date: ["2014"],
        publish_year: [2014],
        first_publish_year: 2014,
        lccn: ["2013039108"],
        oclc: ["818731578"],
        lcc: ["HD-0057.70000000.S5487 2017", "HD-0057.70000000.S5487 2014"],
        isbn: ["1591848016", "9781591848011"],
        last_modified_i: 1648185831,
        ia: ["leaderseatlastwh0000sine_d7f9"],
        ebook_count_i: 1,
        public_scan_b: false,
        ia_collection_s: "inlibrary;internetarchivebooks;printdisabled",
        lending_edition_s: "OL26431671M",
        lending_identifier_s: "leaderseatlastwh0000sine_d7f9",
        printdisabled_s: "OL26431671M",
        cover_edition_key: "OL26431671M",
        cover_i: 8142524,
        publisher: ["Portfolio"],
        author_key: ["OL6645079A"],
        author_name: ["Simon Sinek"],
        author_alternative_name: ["Simon Sinek Simon Sinek"],
        subject: [
          "Corporate culture",
          "Leadership",
          "Organizational change",
          "Teams in the workplace",
          "nyt:business-books=2017-07-09",
          "New York Times bestseller",
          "Organizational Culture",
          "Organizational Innovation",
          "Trust",
          "Culture d'entreprise",
          "Changement organisationnel",
          "BUSINESS & ECONOMICS",
          "Workplace Culture",
          "General",
          "Travail d'équipe",
          "Communication",
          "Développement d'aptitudes",
          "Accessible book",
          "Protected DAISY"
        ],
        ia_box_id: ["IA40409023"],
        publisher_facet: ["Portfolio"],
        subject_facet: [
          "Accessible book",
          "BUSINESS & ECONOMICS",
          "Changement organisationnel",
          "Communication",
          "Corporate culture",
          "Culture d'entreprise",
          "Développement d'aptitudes",
          "General",
          "Leadership",
          "New York Times bestseller",
          "Organizational Culture",
          "Organizational Innovation",
          "Organizational change",
          "Protected DAISY",
          "Teams in the workplace",
          "Travail d'équipe",
          "Trust",
          "Workplace Culture",
          "nyt:business-books=2017-07-09"
        ],
        _version_: 1728248110801485800,
        lcc_sort: "HD-0057.70000000.S5487 2017",
        author_facet: ["OL6645079A Simon Sinek"],
        subject_key: [
          "accessible_book",
          "business__economics",
          "changement_organisationnel",
          "communication",
          "corporate_culture",
          "culture_d'entreprise",
          "développement_d'aptitudes",
          "general",
          "leadership",
          "new_york_times_bestseller",
          "nytbusiness-books2017-07-09",
          "organizational_change",
          "organizational_culture",
          "organizational_innovation",
          "protected_daisy",
          "teams_in_the_workplace",
          "travail_d'équipe",
          "trust",
          "workplace_culture"
        ]
      },
      {
        key: "/works/OL27419840W",
        type: "work",
        seed: [
          "/books/OL37346632M",
          "/works/OL27419840W",
          "/authors/OL6645079A",
          "/authors/OL10271683A",
          "/authors/OL10271684A",
          "/authors/OL10271685A",
          "/authors/OL10271686A",
          "/authors/OL10271687A",
          "/authors/OL10271688A"
        ],
        title: "Simon Sinek 3 Books Collection Set",
        title_suggest: "Simon Sinek 3 Books Collection Set",
        has_fulltext: false,
        edition_count: 1,
        edition_key: ["OL37346632M"],
        publish_date: ["Feb 28, 2019"],
        publish_year: [2019],
        first_publish_year: 2019,
        isbn: ["9789123943012", "9123943017"],
        last_modified_i: 1646055840,
        ebook_count_i: 0,
        publisher: ["Portfolio Penguin/Penguin"],
        author_key: [
          "OL6645079A",
          "OL10271683A",
          "OL10271684A",
          "OL10271685A",
          "OL10271686A",
          "OL10271687A",
          "OL10271688A"
        ],
        author_name: [
          "Simon Sinek",
          "The Infinite Game by Simon Sinek",
          "978-0735213500, 073521350X, 9780735213500",
          "Leaders Eat Last by Simon Sinek",
          "978-1591848011, 1591848016, 9781591848011",
          "Start With Why by Simon Sinek",
          "978-1591846444, 1591846447, 9781591846444"
        ],
        author_alternative_name: ["Simon Sinek Simon Sinek"],
        publisher_facet: ["Portfolio Penguin/Penguin"],
        _version_: 1726014651219574800,
        author_facet: [
          "OL10271683A The Infinite Game by Simon Sinek",
          "OL10271684A 978-0735213500, 073521350X, 9780735213500",
          "OL10271685A Leaders Eat Last by Simon Sinek",
          "OL10271686A 978-1591848011, 1591848016, 9781591848011",
          "OL10271687A Start With Why by Simon Sinek",
          "OL10271688A 978-1591846444, 1591846447, 9781591846444",
          "OL6645079A Simon Sinek"
        ]
      }
    ],
    num_found: 5,
    q: ":leaders eat last",
    offset: null
  };
  const data = useRows();
  const table = useTable({ columns, data }, useSortBy);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = table;

  return (
    <div className="container">
      {/* Apply the table props */}
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
        {/* Apply the table body props */}
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
    </div>
  );
}
