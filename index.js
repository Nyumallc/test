const btn = document.getElementById('submit-btn');
btn.setAttribute('onclick', 'pushButton1()');
function pushButton1() {
        const url = document.getElementById('url').Value;
        const option= document.getElementById('option').Value;
        const resurl=(`${REQUEST_URL}?userid=${userid}&displayname=${displayname}&url=${url}&option=${option}`)
        const res = fetch(resurl);
        console.log(res);
    };
  

// ページをreload
function doReload() {
    window.location.reload(true);
}
window.addEventListener('load', function () {
    // ページ表示完了したらリロード
    setTimeout(doReloadNoCache, 10);
});
