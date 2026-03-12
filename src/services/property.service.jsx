const properties = [
{ id:1,title:"2BHK Apartment",location:"Hyderabad",price:12000,bedrooms:2,image:"https://picsum.photos/300/200?1"},
{ id:2,title:"Luxury Villa",location:"Bangalore",price:25000,bedrooms:4,image:"https://picsum.photos/300/200?2"},
{ id:3,title:"Studio Room",location:"Chennai",price:8000,bedrooms:1,image:"https://picsum.photos/300/200?3"},
{ id:4,title:"3BHK House",location:"Mumbai",price:20000,bedrooms:3,image:"https://picsum.photos/300/200?4"},
{ id:5,title:"1BHK Apartment",location:"Delhi",price:9000,bedrooms:1,image:"https://picsum.photos/300/200?5"},
{ id:6,title:"Beachside Villa",location:"Goa",price:30000,bedrooms:4,image:"https://picsum.photos/300/200?6"}
];

export const getProperties = async (params={}) => {

let result = [...properties];

if(params.keyword){
result=result.filter(p=>p.title.toLowerCase().includes(params.keyword.toLowerCase()));
}

if(params.location){
result=result.filter(p=>p.location===params.location);
}

if(params.bedrooms){
result=result.filter(p=>p.bedrooms===Number(params.bedrooms));
}

const page=params.page||1;
const limit=6;
const start=(page-1)*limit;

return {
data:result.slice(start,start+limit),
totalPages:Math.ceil(result.length/limit),
total:result.length
};

};

export const getPropertyById = async(id)=>{
return properties.find(p=>p.id===Number(id));
};