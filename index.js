btn = document.getElementById("submit-btn");
btn.setAttribute('onclick', 'pushButton1()');
function pushButton1() {
    let name = document.getElementById("user-name");
    let displayname = name.innerText;
    let user_id = document.getElementById("user_id");
    let userid = user_id.innerText;
    let url = document.getElementById("url");
    let urltext = url.value;
    let option= document.getElementById("option");
    let optiontext= option.innerText;
    
    let resurl=(`${REQUEST_URL}?&userid=${userid}&displayname=${displayname}&url=${urltext}&option=${optiontext}`)

         alert(resurl);
        const res = fetch(resurl);
        console.log(res);
    };
