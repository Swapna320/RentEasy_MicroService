import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProperties } from "../../services/property.service";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import SearchBar from "../../components/property/SearchBar";
import FilterPanel from "../../components/property/FilterPanel";
import LoadingSkeleton from "../../components/common/LoadingSkeleton";
import EmptyState from "../../components/common/EmptyState";

function PropertyListPage(){

const [keyword,setKeyword]=useState("");
const [filters,setFilters]=useState({});
const [page,setPage]=useState(1);

const {data,isLoading}=useQuery({
queryKey:["properties",keyword,filters,page],
queryFn:()=>getProperties({...filters,keyword,page})
});

if(isLoading) return <LoadingSkeleton/>;

if(!data.data.length) return <EmptyState/>;

return(

<div>

<h2>{data.total} properties found</h2>

<SearchBar keyword={keyword} setKeyword={setKeyword}/>

<FilterPanel filters={filters} setFilters={setFilters}/>

<div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>

{data.data.map(property=>(
<PropertyCard key={property.id} property={property}/>
))}

</div>

<div style={{marginTop:"20px"}}>

<button disabled={page===1} onClick={()=>setPage(page-1)}>
Previous
</button>

<span style={{margin:"0 10px"}}>Page {page}</span>

<button disabled={page===data.totalPages} onClick={()=>setPage(page+1)}>
Next
</button>

</div>

</div>

);

}

export default PropertyListPage;