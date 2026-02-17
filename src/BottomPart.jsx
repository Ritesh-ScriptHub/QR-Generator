import Like from "./Like";
import Comment from "./comment";
import Send from "./Send";
import BookMark from "./BookMark";

function BottomPart(){
    return(
        <>
        <div style={{borderTop: "1px solid orange", padding: "0.6rem", position: "relative", display:"flex", gap:"20px",alignItems:"center"}}>
            <Like/>
            <Comment/>
            <Send/>
            <BookMark/>
        </div>
        </>
    )
}

export default BottomPart;