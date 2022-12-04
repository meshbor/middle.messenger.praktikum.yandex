import Block from "/src/utils/Block";
import { Link } from "/src/components";
import template from "./profileSidebar.hbs";
import styles from "./profileSidebar.scss";
import { renderDOM } from "/src/utils/renderDOM";
import { ChatsPage } from "../../../chats/Chats";

export class ProfileSidebar extends Block {
  protected initChildren() {
    this.children.backButton = new Link({
      text: '',
      url: '/chats',
      customClass: 'sidebar__backButton',
      events: {
        click: (e) => {
          const chatsPage = new ChatsPage();

          e.preventDefault();

          renderDOM(chatsPage);
        },
      },
    });
  }

  protected render() {
    return this.compile(template, { styles });
  }
}