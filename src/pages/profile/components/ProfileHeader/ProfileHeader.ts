import Block from "/src/utils/Block";
import avatar from "/static/user_avatar.svg";
import template from "./profileHeader.hbs";
import styles from "./profileHeader.scss";

export class ProfileHeader extends Block {
  protected render() {
    return this.compile(template, { styles, avatar });
  }
}
