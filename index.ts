import {config} from 'dotenv';
config({ path: '.env' });

import {Assistant, EHumor, EModel, memoryRepository} from '@whitebeardit/easy-openai'

const {ChatRepository, MessageRepository} = memoryRepository;
const chatRepository = new ChatRepository();
const messageRepository = new MessageRepository();
const whitebeard =  new Assistant(chatRepository, messageRepository, {
    humor: EHumor.SARCASTIC,
    name: 'Whitebeard',
    id: `wb_18927689172398713987`,
    model: EModel['GPT-3.5-TURBO']
});

console.info(whitebeard.context)

whitebeard.addChat({chat: {
    description: 'My description',
    id: 'myId',
    ownerId: 'Whitebeard',
    title: 'My subject',
    updatedAt: new Date().getTime()
}})

whitebeard.addMessage({
    chatId: 'myId',
    content: 'What is your name?',
    ownerId: 'Whitebeard',
    role: 'user',
})

const send = async () => {
    const resp = await whitebeard.sendChat('myId');
    console.info(resp)

}

send()