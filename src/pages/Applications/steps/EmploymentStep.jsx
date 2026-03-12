import { useForm } from "react-hook-form";

function EmploymentStep({data,onNext,onBack}){

const {register,handleSubmit}=useForm({defaultValues:data})

const submit=(formData)=>{
onNext(formData)
}

return(

<form onSubmit={handleSubmit(submit)} className="form-card">

<h2>Employment Details</h2>

<select {...register("employmentStatus")}>
<option value="">Select</option>
<option>Employed</option>
<option>Self Employed</option>
<option>Unemployed</option>
</select>

<input placeholder="Employer" {...register("employer")}/>
<input placeholder="Job Title" {...register("jobTitle")}/>
<input placeholder="Monthly Income" {...register("monthlyIncome")}/>

<div className="buttons">
<button type="button" onClick={onBack} className="btn back">Back</button>
<button className="btn next">Next</button>
</div>

</form>

)
}

export default EmploymentStep;