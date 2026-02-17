function GenrtBtn(){
    return(
        <div>
            <button onClick={handleGenerate}
            style={{ padding: "10px 20px", cursor: "pointer", background: "#0095f6", color: "white", border: "none", borderRadius: "5px" }}>
            Generate QR
            </button>
        </div>
    )
}

export default GenrtBtn;