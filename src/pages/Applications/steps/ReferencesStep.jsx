import { useForm } from "react-hook-form";

function ReferencesStep({data,onNext,onBack}){

const {register,handleSubmit}=useForm({defaultValues:data})

const submit=(formData)=>{
onNext(formData)
}

return(

<form onSubmit={handleSubmit(submit)} className="form-card">

<h2>References</h2>

<h4>Reference 1</h4>

<input placeholder="Name" {...register("ref1Name")}/>
<input placeholder="Relationship" {...register("ref1Relation")}/>
<input placeholder="Phone" {...register("ref1Phone")}/>
<input placeholder="Email" {...register("ref1Email")}/>

<h4>Reference 2</h4>

<input placeholder="Name" {...register("ref2Name")}/>
<input placeholder="Relationship" {...register("ref2Relation")}/>
<input placeholder="Phone" {...register("ref2Phone")}/>
<input placeholder="Email" {...register("ref2Email")}/>

<div className="buttons">
<button type="button" onClick={onBack} className="btn back">Back</button>
<button className="btn next">Next</button>
</div>

</form>

)
}

export default ReferencesStep;