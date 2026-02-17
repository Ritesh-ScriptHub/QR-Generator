import InstagramQR from "./InstagramQR";

function MiddlePart({ username }) {
    return (
        <div style={{position: "relative", height:"19rem", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <div>
                <InstagramQR username={username} />
            </div>
        </div>
    );
}

export default MiddlePart;