import Block from "/src/utils/Block";
import template from './chatsHeader.hbs';
import styles from './chatsHeader.scss';

export class ChatsHeader extends Block {
  protected render() {
    return this.compile(template, { styles });
  }
}
