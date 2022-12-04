import Block from "./Block";
import { LoginPage } from "/src/pages/login/LoginPage";
import { RegistrationPage } from "/src/pages/registration/RegistrationPage";
import { ChatsPage } from "../pages/chats/Chats";
import { ProfileDetailsPage } from "/src/pages/profile/details/ProfileDetailsPage";
import { ProfileEditPage } from "/src/pages/profile/edit/ProfileEditPage";
import { ChangePasswordPage } from "/src/pages/profile/changePassword/ChangePasswordPage";
import { NotFoundPage } from "../pages/404/NotFound";

export function renderDOM(component: Block): void {
  const root = document.querySelector('#app');

  if (!root) {
    throw new Error('Root not found');
  }

  root.innerHTML = '';

  root.append(component.getContent()!);
}

export function renderPage(path: string): void {
  switch (path) {
    case '/':
      const loginPage = new LoginPage();

      renderDOM(loginPage);
      break;

    case '/registration':
      const registrationPage = new RegistrationPage();

      renderDOM(registrationPage);
      break;

    case '/chats':
      const chatsPage = new ChatsPage();

      renderDOM(chatsPage);
      break;

    case '/profile':
      const profilePage = new ProfileDetailsPage();

      renderDOM(profilePage);
      break;

    case '/editProfile':
      const profileEditPage = new ProfileEditPage();

      renderDOM(profileEditPage);
      break;

    case '/changePassword':
      const changePasswordPage = new ChangePasswordPage();

      renderDOM(changePasswordPage);
      break;

    default:
      const notFoundPage = new NotFoundPage();

      renderDOM(notFoundPage);
  }
}