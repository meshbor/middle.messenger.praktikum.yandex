/* eslint-disable @typescript-eslint/ban-ts-comment */
import Block from "/src/utils/Block";
import { Messages } from "./components/Messages/Messages";
import { ChatsHeader } from "./components/ChatsHeader/ChatsHeader";
import { ChatsList } from "./components/ChatsList/ChatsList";
import { MessageCard } from "./components/Messages/components/MessageCard/MessageCard";
import { ChatCard } from "./components/ChatsList/components/chatCard/ChatCard";
import template from "./chats.hbs";
import avatar from '/static/empty.svg';
import styles from "./chats.scss";

export class ChatsPage extends Block {
  protected initChildren() {
    this.children.header = new ChatsHeader();

    this.children.messages = new Messages({
      date: '2 december',
      messageList: [
        new MessageCard({
          message: 'Wake up Neo',
          time: '05:21',
          type: 'got',
        }),
        new MessageCard({
          message: 'For what?',
          time: '09:00',
          type: 'sent',
        }),
        new MessageCard({
          message: 'Just follow the white rabbit',
          time: '11:21',
          type: 'got',
        }),
      ],
      userName: 'Alice',
      userAvatar: avatar,
    });

    this.children.chatsList = new ChatsList({
      chatList: [
        new ChatCard({
          chatIcon: avatar,
          chatName: 'Morpheus',
          lastMessage: 'You take the blue pill... the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill... you stay in Wonderland, and I show you how deep the rabbit hole goes.',
          lastMessageDate: '12:22',
          newMessages: '1',
          events: {
            click: () => {
              // @ts-ignore
              this.children.messages.setProps({
                messageList: [
                  new MessageCard({
                    message: 'You take the blue pill... the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill... you stay in Wonderland, and I show you how deep the rabbit hole goes.',
                    time: '13:00',
                    type: 'got',
                  }),
                ],
                date: '05 december',
                userName: 'Morpheus',
                userAvatar: avatar,
              });
            },
          },
        }),
      ],
    });
  }

  protected render() {
    return this.compile(template, { styles });
  }
}
