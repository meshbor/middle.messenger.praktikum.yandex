import Block from "/src/utils/Block";
import { Link } from '../../components';
import template from './404.hbs';
import styles from './404.scss';
import { renderDOM } from "/src/utils/renderDOM";
import { ChatsPage } from "../chats/Chats";

export class NotFoundPage extends Block {
  protected initChildren() {
    this.children.homeLink = new Link({
      text: 'Назад к чатам',
      url: '/chats',
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
