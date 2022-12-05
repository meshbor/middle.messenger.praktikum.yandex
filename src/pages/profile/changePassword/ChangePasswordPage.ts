import Block from "/src/utils/Block";
import { ProfileHeader } from "/src/pages/profile/components/ProfileHeader/ProfileHeader";
import { ProfileSidebar } from "/src/pages/profile/components/ProfileSidebar/ProfileSidebar";
import { Button, InputBlock } from "/src/components";
import template from "./changePassword.hbs";
import styles from "./changePassword.scss";
import { validateForm } from "/src/utils/validateForm";

export class ChangePasswordPage extends Block {
  protected initChildren() {
    this.children.profileHeader = new ProfileHeader();

    this.children.sidebar = new ProfileSidebar();

    this.children.oldPasswordField = new InputBlock({
      type: 'password',
      id: 'changePassword__oldPassword',
      label: 'Старый пароль',
      name: 'oldPassword',
    });

    this.children.newPasswordField = new InputBlock({
      type: 'password',
      id: 'changePassword__newPassword',
      label: 'Новый пароль',
      name: 'password',
    });

    this.children.repeatNewPasswordField = new InputBlock({
      type: 'password',
      id: 'changePassword__repeatNewPassword',
      label: 'Повторите новый пароль',
      name: 'repeatPassword',
    });

    this.children.saveButton = new Button({
      label: 'Сохранить',
      type: 'submit',
      events: {
        click: () => {
          const form = document.querySelector('#changePassword-form') as HTMLFormElement;

          form.onsubmit = (e) => validateForm(e);
        },
      },
    });
  }

  protected render() {
    return this.compile(template, { styles });
  }
}
