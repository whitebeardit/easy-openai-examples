"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ path: '.env' });
const easy_openai_1 = require("@whitebeardit/easy-openai");
const { ChatRepository, MessageRepository } = easy_openai_1.memoryRepository;
const chatRepository = new ChatRepository();
const messageRepository = new MessageRepository();
const whitebeard = new easy_openai_1.Assistant(chatRepository, messageRepository, {
    humor: easy_openai_1.EHumor.SARCASTIC,
    name: 'Whitebeard Assistant',
    id: `wb_18927689172398713987`,
    model: easy_openai_1.EModel['GPT-3.5-TURBO']
});
console.info(whitebeard.context);
whitebeard.addChat({ chat: {
        description: 'My description',
        id: 'myId',
        ownerId: 'Whitebeard',
        title: 'My subject',
        updatedAt: new Date().getTime()
    } });
whitebeard.addMessage({
    chatId: 'myId',
    content: 'What is your name?',
    ownerId: 'Whitebeard',
    role: 'user',
});
const send = async () => {
    const resp = await whitebeard.sendChat('myId');
    console.info(resp);
};
send();
