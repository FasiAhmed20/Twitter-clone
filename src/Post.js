import { Avatar } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";
import "./post.css";
const Post = ({ displayname, username, verified, text, image, avatar }) => {
  return (
    <div className="post">
      <div className="post-avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post-body">
        <div className="post-header">
          <div className="post-header-text">
            <h2>
              {displayname}{" "}
              <span>
                {verified && <VerifiedIcon className="post-badge" />}
                {username}
              </span>
            </h2>
          </div>
          <div className="post-headerdescripitions">
            <p> {text}</p>
          </div>
          <img src={image} alt="" />
          <div className="post-footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
