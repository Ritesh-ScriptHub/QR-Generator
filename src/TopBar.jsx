
function TopBar({ username }) {
    return (
        

        <p style={{borderBottom: "1px solid orange", padding: "0.6rem", position: "relative"}}>
            {username ? (
                <>Scan to follow <span style={{fontWeight:"bold"}}>@{username}</span></>
            ) : (
                <span style={{color: "#aaa"}}>Enter a username to generate</span>
            )}
        </p>
    );
}

export default TopBar;