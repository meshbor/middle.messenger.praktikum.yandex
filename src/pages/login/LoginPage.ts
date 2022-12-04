import Block from '/src/utils/Block';
import { Button, InputBlock, Link } from '/src/components';
import { RegistrationPage } from "../registration/Registration";
import { ChatsPage } from "../chats/Chats";
import { renderDOM } from "/src/utils/renderDOM";
import { validateForm } from "/src/utils/validateForm";
import template from './loginPage.hbs';
import styles from './login.scss';
import { ProfileDetailsPage } from '../profile/details/ProfileDetailsPage';

export class LoginPage extends Block {
  protected initChildren() {
    this.children.loginField = new InputBlock({
      type: 'text',
      id: 'login-form__login',
      label: 'Login',
      name: 'login',
    });

    this.children.passwordField = new InputBlock({
      type: 'password',
      id: 'login-form__password',
      label: 'Password',
      name: 'password',
    });

    this.children.loginButton = new Button({
      label: 'Sign in',
      type: 'submit',
      events: {
        click: () => {
          const form = document.querySelector('#login-form') as HTMLFormElement;

          form.onsubmit = (e) => validateForm(e);
        },
      },
    });

    this.children.registerLink = new Link({
      text: 'No account?',
      type: 'medium',
      url: '/registration',
      events: {
        click: (e) => {
          const registrationPage = new RegistrationPage();

          e.preventDefault();

          renderDOM(registrationPage);
        },
      },
    });

    this.children.chatsLink = new Link({
      text: 'To chats',
      type: 'medium',
      url: '/chats',
      events: {
        click: (e) => {
          const chatsPage = new ChatsPage();

          e.preventDefault();

          renderDOM(chatsPage);
        },
      },
    });
    this.children.profile = new Link({
      text: 'Profile',
      url: '/profile',
      events: {
        click: (e) => {
          const profileDetailsPage = new ProfileDetailsPage();

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
