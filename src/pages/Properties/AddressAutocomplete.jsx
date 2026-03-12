import { useState } from "react";

function AddressAutocomplete() {

  const [address, setAddress] = useState("");

  return (
    <div>

      <input
        type="text"
        placeholder="Enter Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

    </div>
  );
}

export default AddressAutocomplete;
