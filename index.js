let userId = ''

document.getElementById("submit-btn").onclick = function() {
  const response = await axios.get(`${REQUEST_URL}?userid=${userid}&displayname=${displayname}&url=${url}&option=${option}`)
 location.reload()
 fetch(response)
    .then(res => {
        if(res.ok){
            return res.json();
        } else {
            throw new Error();
        }
    })
    .then(myJson => {
        console.log(JSON.stringify(myJson));
    })
    .catch(err => {
        console.log(err);
    })
};


const btn = document.getElementById('submit-btn');
const url = document.getElementById('url').Value;
const option= document.getElementById('option').Value;

btn.addEventListener('click', urlSubmit);

// ページをreload
function doReload() {
    window.location.reload(true);
}
window.addEventListener('load', function () {
    // ページ表示完了した5秒後にリロード
    setTimeout(doReloadNoCache, 10);
});
