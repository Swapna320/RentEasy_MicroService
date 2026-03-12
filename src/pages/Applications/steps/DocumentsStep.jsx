import FileUpload from "../../../components/shared/FileUpload";

function DocumentsStep({onBack,onNext}){

const submit=()=>{
onNext({})
}

return(

<div className="form-card">

<h2>Upload Documents</h2>

<FileUpload label="Government ID"/>
<FileUpload label="Latest Pay Slip"/>
<FileUpload label="Bank Statement (3 months)"/>

<div className="buttons">
<button onClick={onBack} className="btn back">Back</button>
<button onClick={submit} className="btn submit">Submit</button>
</div>

</div>

)
}

export default DocumentsStep;