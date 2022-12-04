import Block from "/src/utils/Block";
import { Link, Button, InputBlock } from '../../components';
import template from './registration.hbs';
import styles from './registration.scss';
import { LoginPage } from "/src/pages/login/LoginPage";
import { renderDOM } from "/src/utils/renderDOM";
import { validateForm } from "/src/utils/validateForm";

export class RegistrationPage extends Block {
  protected initChildren() {
    this.children.emailField = new InputBlock({
      type: 'email',
      id: 'registration-form__email',
      label: 'Email',
      name: 'email',
    });

    this.children.loginField = new InputBlock({
      type: 'text',
      id: 'login-form__login',
      label: 'Login',
      name: 'login',
    });

    this.children.firstNameField = new InputBlock({
      type: 'text',
      id: 'registration-form__firstName',
      label: 'Name',
      name: 'first_name',
    });

    this.children.secondNameField = new InputBlock({
      type: 'text',
      id: 'registration-form__secondName',
      label: 'Surname',
      name: 'second_name',
    });

    this.children.phoneField = new InputBlock({
      type: 'tel',
      id: 'registration-form__phone',
      label: 'Phone',
      name: 'phone',
    });

    this.children.passwordField = new InputBlock({
      type: 'password',
      id: 'registration-form__password',
      label: 'Password',
      name: 'password',
    });

    this.children.repeatPasswordField = new InputBlock({
      type: 'password',
      id: 'registration-form__repeatPassword',
      label: 'Repeat Password',
      name: 'repeatPassword',
    });

    this.children.registerButton = new Button({
      label: 'Sign up',
      type: 'submit',
      events: {
        click: () => {
          const form = document.querySelector('#registration-form') as HTMLFormElement;

          form.onsubmit = (e) => validateForm(e);
        },
      },
    });

    this.children.loginLink = new Link({
      text: 'Enter',
      type: 'medium',
      url: '/',
      events: {
        click: (e) => {
          const loginPage = new LoginPage();

          e.preventDefault();

          renderDOM(loginPage);
        },
      },
    });
  }

  protected render() {
    return this.compile(template, { styles });
  }
}
