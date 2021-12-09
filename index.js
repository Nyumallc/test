let userId = ''

document.getElementById('submit-btn').addEventListener('click' = function() {
  document.getElementById('res').innerHTML =resurl;
  const response = await axios.get(resurl)
 location.reload()
 fetch(resurl)
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

const resurl=(`${REQUEST_URL}?userid=${userid}&displayname=${displayname}&url=${url}&option=${option}`)
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
