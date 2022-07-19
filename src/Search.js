import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";

const ValidateTitle = (titleData) => {          // function to validate title
  const errors = {};
  console.log(!titleData.title);
  if (!titleData.title) {
    errors.title = "Title of Book is required";
  }
  return errors;
};
const Search = () => {
  const [title, setTitle] = useState();
  var history = useHistory();
  const formik = useFormik({                  // using formik validation for searching the title of the book
    initialValues: {
      title: "",
    },
    validate: ValidateTitle,

    handleChange: (e) => {
      setTitle(e.target.value);
    },
    onSubmit: (title) => {
      history.push(`/:${title.title}`);
    },
  });
  return (
    <div className="search">
      <h1> Book Search </h1>
      <form onSubmit={(e) => formik.handleSubmit(e)}>
        <label>Search by title :</label>
        <input
          type="text"
          value={formik.values.title}
          onChange={formik.handleChange}
          name="title"
        />
        &nbsp;
        <button type="submit">Find Book</button>
        <div className="text-danger">
          {formik.errors.title ? formik.errors.title : null}           {/* Here we will display the error message*/}
        </div>
      </form>
    </div>
  );
};

export default Search;

