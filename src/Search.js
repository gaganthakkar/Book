import {useState} from 'react';
import {Link} from 'react-router-dom';

const Search = () => {
    // const [isbn, setISBN] = useState();
    const [title, setTitle] = useState();
    // console.log(isbn);

    return (
        <div className='search'>
            <h1> Book Search </h1>
            <form>         
                <label>Search by title :</label>
                <input value={title} onChange={(e)=>setTitle(e.target.value)}/>

                <Link to={`/:${title}`}><button>Find Book</button></Link>
            </form>
        </div>
    );
}
 
export default Search;



// 1480542571