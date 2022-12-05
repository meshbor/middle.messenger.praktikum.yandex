import Block from "/src/utils/Block";
import { Link } from "/src/components";
import template from './chatsHeader.hbs';
import styles from './chatsHeader.scss';
import { renderDOM } from "/src/utils/renderDOM";
import { ProfileDetailsPage } from "/src/pages/profile/details/ProfileDetailsPage";
import { LoginPage } from "/src/pages/login/LoginPage";

export class ChatsHeader extends Block {
  protected initChildren() {
    this.children.profile = new Link({
      text: 'Profile',
      url: '/profile',
      customClass: 'chatsHeader__profileLink__link',
      events: {
        click: (e) => {
          const profileDetailsPage = new ProfileDetailsPage();

          e.preventDefault();

          renderDOM(profileDetailsPage);
        },
      },
    });
    this.children.login = new Link({
      text: 'Login',
      url: '/login',
      customClass: 'chatsHeader__profileLink__link',
      events: {
        click: (e) => {
          const profileDetailsPage = new LoginPage();

          e.preventDefault();

          renderDOM(profileDetailsPage);
        },
      },
    });
  }

  protected render() {
    return this.compile(template, { styles });
  }
}
