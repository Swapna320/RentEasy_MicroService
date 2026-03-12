function LoadingSkeleton(){

return(

<div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>

{Array.from({length:6}).map((_,i)=>(
<div key={i} style={{background:"#ddd",height:"180px",borderRadius:"8px"}}/>
))}

</div>

);

}

export default LoadingSkeleton;