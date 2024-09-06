const sendButton = document.getElementById('sendButton');
const messageInput = document.getElementById('messageInput');
const chatContainer = document.getElementById('chatContainer');

sendButton.addEventListener('click', function (event) {
    event.preventDefault(); 
    const messageText = messageInput.value.trim();

    if (messageText !== '') {
        
        const newMessage = document.createElement('div');
        newMessage.classList.add('chatMessage');

        const img = document.createElement('img');
        img.src = './profile.png'; 
        img.classList.add('women1');
        const messageParagraph = document.createElement('p');
        messageParagraph.textContent = messageText;

        newMessage.appendChild(img);
        newMessage.appendChild(messageParagraph);

        chatContainer.appendChild(newMessage);

       
        messageInput.value = '';

       
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
});