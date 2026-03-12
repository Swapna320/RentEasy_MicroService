function StepIndicator({ steps, currentStep }) {
  return (
    <div className="step-indicator">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`step ${index === currentStep ? "active" : ""} ${
            index < currentStep ? "done" : ""
          }`}
        >
          <div className="circle">
            {index < currentStep ? "✓" : index + 1}
          </div>
          <span>{step}</span>
        </div>
      ))}
    </div>
  );
}

export default StepIndicator;