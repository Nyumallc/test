let userId = ''

function urlSubmit(event) {
 // APIリクエストを行う
 const response = await axios.get(`${REQUEST_URL}?userid=${userid()}&displayname=${displayname}&url=${url}&option=${option}`)
 location.reload()
}

const btn = document.getElementById('submit-btn');
const url = document.getElementById('url').Value;
const option= document.getElementById('option').Value;

btn.addEventListener('click', urlSubmit);
