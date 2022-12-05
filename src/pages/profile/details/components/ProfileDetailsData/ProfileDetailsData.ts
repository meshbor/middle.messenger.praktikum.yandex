import Block from "/src/utils/Block";
import { TextField } from "/src/components";
import template from "./profileDetailsData.hbs";
import styles from "./profileDetailsData.scss";

export class ProfileDetailsData extends Block {
  protected initChildren() {
    this.children.emailField = new TextField({
      label: 'Email',
      value: 'email@email.ru',
    });

    this.children.loginField = new TextField({
      label: 'Login',
      value: 'hardssd',
    });

    this.children.firstNameField = new TextField({
      label: 'Name',
      value: 'Andrew',
    });

    this.children.secondNameField = new TextField({
      label: 'Surname',
      value: 'Volkov',
    });

    this.children.chatNameField = new TextField({
      label: 'Name in chat',
      value: 'Andrew',
    });

    this.children.phoneField = new TextField({
      label: 'Phone',
      value: '+7 (000) 0000000',
    });
  }

  protected render() {
    return this.compile(template, { styles });
  }
}
