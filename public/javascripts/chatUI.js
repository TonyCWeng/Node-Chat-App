const Chat = require('./chat');

class ChatUI {
  constructor(socket) {
    this.chat = new Chat(socket);
    this.msgList = document.querySelector('ul#msg-list');
    this.input = document.querySelector('input');
  }

  getInput() {
    return this.input.value;
  }

  addMSG(msg) {
    const newMessage = document.createElement('li');
    newMessage.textContent = msg;
    this.msgList.appendChild(newMessage);
  }
}

module.exports = ChatUI;
