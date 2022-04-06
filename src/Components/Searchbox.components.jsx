

import './search.style.css';

export const Searchbox = ({handleChange}) =>
    <input onChange={handleChange} className='search-box' type="search" placeholder="search monsters"/>

