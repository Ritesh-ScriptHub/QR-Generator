import { useState } from 'react';
import './App.css';
import CreatePost from './CreatePost';

function App() {
  const [inputValue, setInputValue] = useState("");
  
  const [username, setUsername] = useState(null);

  const handleGenerate = () => {
    if (inputValue.trim().length > 0) {
      setUsername(inputValue.trim());
    } else {
      alert("Please enter a valid username first!");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleGenerate();
    }
  };

  return (
    <div style={{display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
      <h1>Insta QR Generator</h1>
      
      <div style={{ marginTop: "20px", display: "flex", gap: "10px", justifyContent: "center" }}>
        <input 
          type="text" 
          placeholder="Enter Instagram Username"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <button 
          onClick={handleGenerate}
          style={{ padding: "10px 20px", cursor: "pointer", background: "#0095f6", color: "white", border: "none", borderRadius: "5px" }}
        >
          Generate
        </button>
      </div>

      <CreatePost username={username}/>
    </div>
  );
}

export default App;