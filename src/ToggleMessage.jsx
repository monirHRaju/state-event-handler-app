import { useState } from "react";

function ToggleMessage() {
  const [showMessage, setShowMessage] = useState(false);
  const messageHandler = () => setShowMessage(!showMessage);

  return (
    <div className="section">
      <h1>Toggle Message Component</h1>
{showMessage && (
        <p style={{ marginTop: "20px", fontSize: "18px" }}>
          🎉 হ্যালো! তুমি এখন মেসেজটা দেখতে পাচ্ছো।
        </p>
    )}
      <button
        onClick={() => messageHandler()}
        className="btn-style"
        style={{ background: showMessage ? "crimson" : "green" }}
      >
        {showMessage ? "Hide Message" : "Show Message"}
      </button>
      
      
    </div>
  );
}

export default ToggleMessage;
