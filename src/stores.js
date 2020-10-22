import Reacst from "react";
import "./stors.css";
import EmojiNatureIcon from "@material-ui/icons/EmojiNature";
import GroupIcon from "@material-ui/icons/Group";
import PersonIcon from "@material-ui/icons/Person";
import StoreIcon from "@material-ui/icons/Store";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Stories from "./stories";
export default function () {
  return (
    <div className="body__top">
      <div className="stors">
        <div className="stors__option">
          <EmojiNatureIcon fontSize="large" />
          <h3>COVID-19 - Centre d’information</h3>
        </div>
        <div className="stors__option">
          <PersonIcon fontSize="large" />
          <h3>Amis</h3>
        </div>
        <div className="stors__option">
          <GroupIcon fontSize="large" />
          <h3>Groupes</h3>
        </div>
        <div className="stors__option">
          <StoreIcon fontSize="large" />
          <h3>Marketplace</h3>
        </div>
        <div className="stors__option">
          <ExpandMoreIcon fontSize="large" />
          <h3>others</h3>
        </div>
      </div>
      <Stories />
    </div>
  );
}
