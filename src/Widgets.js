import {
  TwitterTweetEmbed,
  TwitterTimelineEmbed,
  TwitterShareButton,
} from "react-twitter-embed";
import "./widgets.css";
import SearchIcon from "@mui/icons-material/Search";
const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets-input">
        <SearchIcon className="widgets-searchicon" />
        <input type="text" placeholder="search twitter" />
      </div>
      <div className="widgets-widgetscontainer">
        <h2>what's happening</h2>
        <TwitterTweetEmbed tweetId={"1437745800000817152"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="TwitterDev"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://example.com"}
          options={{ text: "#reactjs is awesome", via: "example" }}
        />
      </div>
    </div>
  );
};

export default Widgets;
