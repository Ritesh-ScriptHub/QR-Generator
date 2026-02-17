import "./CreatePost.css";
import TopBar from "./TopBar";
import MiddlePart from "./MiddlePart";
import BottomPart from "./BottomPart";

function CreatePost({ username }) {
    if (!username) {
    return null;
    }
    return (
        <div className="createPost">
            <TopBar username={username} />
            <MiddlePart username={username} />
            <BottomPart />
        </div>
    );
}

export default CreatePost;