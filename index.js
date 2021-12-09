const btn = document.getElementById('submit-btn');
btn.setAttribute('onclick', 'pushButton1()');
function pushButton1() {
 alert(resurl);;
  }






const resurl=(`${REQUEST_URL}?userid=${userid}&displayname=${displayname}&url=${url}&option=${option}`)
const url = document.getElementById('url').Value;
const option= document.getElementById('option').Value;

// ページをreload
function doReload() {
    window.location.reload(true);
}
window.addEventListener('load', function () {
    // ページ表示完了した5秒後にリロード
    setTimeout(doReloadNoCache, 10);
});
