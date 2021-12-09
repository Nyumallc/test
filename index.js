const btn = document.getElementById('submit-btn');
        const url = document.getElementById('url').Value;
        const option= document.getElementById('option').Value;
        const resurl=(`${REQUEST_URL}?userid=${userid}&displayname=${displayname}&url=${url}&option=${option}`)
btn.setAttribute('onclick', 'pushButton1()');
function pushButton1() {
         alert(resurl);
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
