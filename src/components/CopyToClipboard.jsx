import React, { useState } from 'react';

function CopyToClipboardComponent({ textToCopy }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset "Copied!" message after 2 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err);
      alert('Failed to copy text. Please try again.');
    }
  };

  return (
    <div style={{marginTop: 10}}>
      {/* <p>{textToCopy}</p> */}
      <button  className="btn"  onClick={handleCopy} disabled={!textToCopy}>
        {isCopied ? 'Copied!' : 'Copy Text'}
      </button>
    </div>
  );
}

export default CopyToClipboardComponent;