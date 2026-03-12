import { useForm } from "react-hook-form";

function PersonalInfoStep({ data, onNext }) {
  const { register, handleSubmit, formState:{errors} } = useForm({
    defaultValues:data
  });

  const submit=(formData)=>{
    onNext(formData);
  }

  return (
    <form onSubmit={handleSubmit(submit)} className="form-card">

      <h2>Personal Information</h2>

      <input placeholder="Full Name" {...register("fullName",{required:true})}/>
      {errors.fullName && <span className="error">Required</span>}

      <input type="date" {...register("dateOfBirth",{required:true})}/>
      {errors.dateOfBirth && <span className="error">Required</span>}

      <input placeholder="Phone" {...register("phone",{required:true})}/>
      {errors.phone && <span className="error">Required</span>}

      <input placeholder="National ID" {...register("nationalId",{required:true})}/>
      {errors.nationalId && <span className="error">Required</span>}

      <button className="btn next">Next</button>

    </form>
  );
}

export default PersonalInfoStep;