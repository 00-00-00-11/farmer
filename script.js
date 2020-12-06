    var amnt = 0;
    document.getElementById('stop').disabled = true;
    
    if (location.protocol !== 'https:') {
        location.replace(`https:${location.href.substring(location.protocol.length)}`);
      }
      
      document.getElementById('token').value = localStorage.getItem('token'); document.getElementById('channel').value = localStorage.getItem('channel'); document.getElementById('words').value = localStorage.getItem('words'); document.getElementById('delay').value = localStorage.getItem('delay'); 
      
      document.getElementById('remove').disabled = true;
      if (localStorage.getItem('token')||localStorage.getItem('channel')||localStorage.getItem('delay')!=="") {
        document.getElementById('remove').disabled = false;
      }
    
    function farm() {
      var token = document.getElementById('token').value; var channel = document.getElementById('channel').value; document.getElementById('showID').innerHTML = 'channel id: ' + channel; amnt = amnt + 1; document.getElementById('showAMNT').innerHTML = 'send attempts: ' + amnt; document.getElementById('showMS').innerHTML = 'interval: ' + delay;
      
      var url = "https://discordapp.com/api/v6/channels/" + channel + "/messages";

      var farm = new XMLHttpRequest();
      farm.open("POST", url);
      
      farm.setRequestHeader('Content-type', 'application/json');
      farm.setRequestHeader('Authorization', token);
      farm.setRequestHeader('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36');
      farm.setRequestHeader('Accept', '*/*');
      
      string_to_array = function (str) {
        return str.trim().split(",");
      };
      var phr = string_to_array(document.getElementById('words').value);
      
      var random = Math.floor(Math.random() * phr.length);
      
      var message = phr[random];
      console.log('index: ' + random + '\n' + 'message: ' + message);

      var params = {
        'content': message
      };

      farm.send(JSON.stringify(params));
    }
    
    function save() {
      if (document.getElementById('token').value!=="") {
        localStorage.setItem('token', document.getElementById('token').value); localStorage.setItem('channel', document.getElementById('channel').value); localStorage.setItem('words', document.getElementById('words').value); if (document.getElementById('delay').value<500) {document.getElementById('delay').value = "500"; localStorage.setItem('delay', '500');} else {localStorage.setItem('delay', document.getElementById('delay').value);} document.getElementById('remove').disabled = false; alert('saved current config'); console.log('stored settings');
      } else {
        alert('you must provide a token first');
      }
    }
    
    function remove() {
      if (localStorage.getItem('token')||localStorage.getItem('channel')||localStorage.getItem('delay')!=="") {
        localStorage.setItem('token', ''); localStorage.setItem('channel', ''); localStorage.setItem('words', ''); localStorage.setItem('delay', '500'); alert('saved config removed'); console.log('removed stored settings'); document.getElementById('remove').disabled = true;
      } // yes i know theres .removeItem, shut up loser
    }