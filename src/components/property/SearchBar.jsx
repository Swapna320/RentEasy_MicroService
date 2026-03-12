function SearchBar({keyword,setKeyword}){

return(

<input
placeholder="Search property..."
value={keyword}
onChange={(e)=>setKeyword(e.target.value)}
/>

);

}

export default SearchBar;