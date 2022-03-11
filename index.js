btn = document.getElementById("submit-btn");
btn.setAttribute('onclick', 'pushButton1()');
btn2 = document.getElementById("rireki-btn");
btn2.setAttribute('onclick', 'pushButton2()');
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
    let 
         
    if (Len(userid ) > 10) {
        res_text=(`${displayname}${urltext}已收到您的訂單`);
        }else{
            console.log(`可以利用左下角選單功能中的右上角
填單時請注意URL網址上方必須要出現：自己的頭像以及Line的ID
才算有成功登入填單系統
也請注意必須要在備註當中填寫：品名＋價格也請勿填錯～
謝謝您！`);
        }
     alert(res_text);
    
         alert(resurl);
        const res = fetch(resurl);
        console.log(res);
        liff.sendMessages([{
            'type': 'text',
            'text': urltext + "の注文をリクエストしました。"
          }]).then(function() {
            // document.getElementById('log').value += 'sendMessagesText completed\n';
          }).catch(function(error) {
            // document.getElementById('log').value += 'sendMessagesText()=' + error + '\n';
          });
    };


function pushButton2() {
    let user_id = document.getElementById("user_id");
    let userid = user_id.innerHTML;
    location.href=(`https://share.streamlit.io/nyumallc/streamlit_db/main/streamlit_db.py?f_num=mercari&userid=${userid}`)
     
    };

