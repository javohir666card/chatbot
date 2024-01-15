let input = document.querySelector('input');
let button = document.querySelector('button');
let container = document.querySelector('.container');
let user = document.querySelector('.userChat');
let userAndChadgptMess = document.querySelector('.userAndChadgptMess');
button.addEventListener("click", generateResponse)
let api_key = "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";
function generateResponse() {
    let val = input.value;
    let userMes = document.createElement('p');
    userMes.setAttribute("class", "userMessage");
    userMes.textContent = input.value;
    // container.appendChild(userMes);
    userAndChadgptMess.appendChild(userMes);

    let api_url = "https://api.openai.com/v1/chat/completions";

    let requests = {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${api_key}`
        },
             body: JSON.stringify({
                model: "gpt-3.5-turbo",
                "messages": [{role: "user", content: val}] })
    }

    fetch(api_url, requests).then(res => res.json().then(data => {
        console.log(data);
        let answer = document.createElement('p');
        answer.textContent = data.choices[0].message.content;
        // container.appendChild(answer);
        userAndChadgptMess.appendChild(answer);
        answer.setAttribute("class", "chatMessage");
    }))
}

input.addEventListener("keypress", e => {
    if(e.key === "Enter") {
        generateResponse();
    }
})