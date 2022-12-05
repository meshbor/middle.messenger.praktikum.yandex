import Block from "/src/utils/Block";
import { Button, InputBlock } from "/src/components";
import { validateForm } from "/src/utils/validateForm";
import template from "./profileEditForm.hbs";
import styles from "./profileEditForm.scss";

export class ProfileEditForm extends Block {
  protected initChildren() {
    this.children.emailEditField = new InputBlock({
      type: 'email',
      id: 'profileEdit__email',
      label: 'Email',
      name: 'email',
      value: 'email@email.ru',
    });

    this.children.loginEditField = new InputBlock({
      type: 'text',
      id: 'profileEdit__login',
      label: 'Login',
      name: 'login',
      value: 'morpheus',
    });

    this.children.firstNameEditField = new InputBlock({
      type: 'text',
      id: 'profileEdit__firstName',
      label: 'Name',
      name: 'first_name',
      value: 'Andrew',
    });

    this.children.secondNameEditField = new InputBlock({
      type: 'text',
      id: 'profileEdit__secondName',
      label: 'Surname',
      name: 'second_name',
      value: 'Volkov',
    });

    this.children.phoneEditField = new InputBlock({
      type: 'tel',
      id: 'profileEdit__phone',
      label: 'Phone',
      name: 'phone',
      value: '+79999999999',
    });

    this.children.saveButton = new Button({
      label: 'Save',
      type: 'submit',
      events: {
        click: () => {
          const form = document.querySelector('#profileEdit-form') as HTMLFormElement;

          form.onsubmit = (e) => validateForm(e);
        },
      },
    });
  }

  protected render() {
    return this.compile(template, { styles });
  }
}
