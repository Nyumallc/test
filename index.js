btn = document.getElementById("submit-btn");
btn.setAttribute('onclick', 'pushButton1()');
function pushButton1() {
    let name = document.getElementById("user-name");
    let displayname = name.innerHTML;
    let user_id = document.getElementById("user_id");
    let userid = user_id.innerHTML;
    let url = document.getElementById("url");
    let urltext = url.value;
    let option= document.getElementById("option");
    let optiontext= option.value;
    
    let resurl=(`${REQUEST_URL}?&userid=${userid}&displayname=${displayname}&url=${urltext}&option=${optiontext}`)

         alert(resurl);
        const res = fetch(resurl);
        console.log(res);
    };

buy_btn = document.getElementById("request_buy");
buy_btn.setAttribute('onclick', 'pushButton2()');

function pushButton2() {
    var referrer = document.referrer;
    if (referrer == "") {
        console.log('空みたい')
    }
    console.log(referrer);
    document.getElementById("url").Value= url
};
