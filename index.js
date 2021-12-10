btn = document.getElementById("submit-btn");
btn.setAttribute('onclick', 'pushButton1()');
function pushButton1() {
    let url = document.getElementById("url");
    let urltext = url.value;
    let option= document.getElementById("option");
    let optiontext= option.Value;
    let resurl=(`${REQUEST_URL}?&userid=aaa&displayname=bbbbb&url=${url}&option=${option}`)

         alert(resurl);
        const res = fetch(resurl);
        console.log(res);
    };
