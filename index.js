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
        liff.sendMessages([{
            'type': 'text',
            'text': urltext + "の注文をリクエストしました。"
          }]).then(function() {
            // document.getElementById('log').value += 'sendMessagesText completed\n';
          }).catch(function(error) {
            // document.getElementById('log').value += 'sendMessagesText()=' + error + '\n';
          });
    };

btn2 = document.getElementById("rireki-btn");
btn2.setAttribute('onclick', 'pushButton2()');
function pushButton2() {
    let user_id = document.getElementById("user_id");
    let userid = user_id.innerHTML;
    let resurl=(`https://share.streamlit.io/nyumallc/streamlit_db/main/streamlit_db.py?userid=${userid}`)
