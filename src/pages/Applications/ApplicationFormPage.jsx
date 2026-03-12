import { useState } from "react";
import { useNavigate } from "react-router-dom";

import StepIndicator from "../../components/shared/StepIndicator";

import PersonalInfoStep from "./steps/PersonalInfoStep";
import EmploymentStep from "./steps/EmploymentStep";
import ReferencesStep from "./steps/ReferencesStep";
import DocumentsStep from "./steps/DocumentsStep";

import "./ApplicationFormPage.css";

function ApplicationFormPage(){

const steps=["Personal","Employment","References","Documents"]

const [stepIndex,setStepIndex]=useState(0)

const [formData,setFormData]=useState(()=>{
const draft=sessionStorage.getItem("application-draft")
return draft ? JSON.parse(draft) : {}
})

const navigate=useNavigate()

const next=(data)=>{

const updated={...formData,...data}

setFormData(updated)

sessionStorage.setItem("application-draft",JSON.stringify(updated))

setStepIndex(stepIndex+1)

}

const back=()=>{
setStepIndex(stepIndex-1)
}

const submit=()=>{

/* GET EXISTING APPLICATIONS */

const existingApps =
JSON.parse(localStorage.getItem("applications")) || [];

/* CREATE NEW APPLICATION */

const newApplication = {
id: Date.now(),
tenant: formData.fullName || "Tenant User",
property: "Selected Property",
status: "Pending",
data: formData
};

/* SAVE */

existingApps.push(newApplication);

localStorage.setItem("applications", JSON.stringify(existingApps));

/* CLEAR DRAFT */

sessionStorage.removeItem("application-draft");

/* REDIRECT */

navigate("/confirmation");

}

return(

<div className="container">

<h1>Rental Application</h1>

<StepIndicator steps={steps} currentStep={stepIndex}/>

{stepIndex===0 && <PersonalInfoStep data={formData} onNext={next}/>}

{stepIndex===1 && <EmploymentStep data={formData} onNext={next} onBack={back}/>}

{stepIndex===2 && <ReferencesStep data={formData} onNext={next} onBack={back}/>}

{stepIndex===3 && <DocumentsStep onBack={back} onNext={submit}/>}

</div>

)

}

export default ApplicationFormPage;