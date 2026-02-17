function UserInput(){
    return(
        <div style={{ marginTop: "1rem", display: "flex", gap: "10px", justifyContent: "center" }}>
        <input 
          type="text" 
          placeholder="Enter Instagram Username"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        </div>
    )
}

export default UserInput;