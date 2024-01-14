const sendForm = document.querySelector('.chat__form-send');
const msgInput = document.querySelector('.chat__send-text');
const msgTemplate = document.querySelector('#message');
const msgList = document.querySelector('.chat__messages-list');

sendForm.addEventListener('submit', sendMessage);

function sendMessage(event) {
    event.preventDefault()

    const msgText = msgInput.value;
    if(!msgText){
        return;
    }
    const templateContent = msgTemplate.content.cloneNode(true)
    templateContent.querySelector('.chat__message-text').textContent = `Я: ${msgText}`;
    msgList.append(templateContent);
    msgInput.value = '';
}
