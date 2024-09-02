import { Avatar, Button } from "@mui/material";
import "./tweetbox.css";
const Tweetbox = () => {
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox-input">
          <Avatar src="https://images.unsplash.com/photo-1611605698335-8b1569810432?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHdpdHRlcnxlbnwwfHwwfHx8MA%3D%3D"></Avatar>
          <input type="text" placeholder="what is happening ?" />
        </div>
        <input
          className="tweetbox-imageinput"
          type="text"
          placeholder="optional: enter your image URL ?"
        />

        <Button className="tweetbox-button">tweet</Button>
      </form>
    </div>
  );
};

export default Tweetbox;
