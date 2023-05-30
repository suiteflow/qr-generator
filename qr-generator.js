  $(document).ready(function(){
    $('[suite-qr="code"]').qrcode({width: 128,height: 128,text: window.location.href});
    $('[suite-qr="code"] img').css({'width': '100%', 'height': '100%'});
  });
