import { GrSearch } from "react-icons/gr";

import styles from "./SearchBox.module.css"

function SearchBox({search, setSearch, searchHandler}) {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="Search title" value={search} onChange={event => setSearch(event.target.value.toLowerCase())}/>
      <button onClick={searchHandler}><GrSearch /></button>
    </div>
  )
}

export default SearchBox
