import "./sidebar.css";
import Sidebaroptions from "./Sidebaroptions";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";

const Sidebars = () => {
  return (
    <div className="Sidebar">
      {/* twitter icon */}
      <TwitterIcon className="sidebar-twitter-icon" />
      {/* side baroptions */}
      <Sidebaroptions Icon={HomeIcon} text="Home" />
      <Sidebaroptions Icon={SearchIcon} text="Explore" />
      <Sidebaroptions Icon={NotificationsNoneIcon} text="Notifications" />
      <Sidebaroptions Icon={MailOutlineIcon} text="Messages" />
      <Sidebaroptions Icon={BookmarkBorderIcon} text="Bookmarks" />
      <Sidebaroptions Icon={ListAltIcon} text="Lists" />
      <Sidebaroptions Icon={PermIdentityIcon} text="profile" />
      <Sidebaroptions Icon={MoreHorizIcon} text="More" />
      <Button variant="outlined" className="sidebar-tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
};

export default Sidebars;
