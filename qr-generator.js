  $(document).ready(function(){
    $('[suite-qr="code"]').qrcode({width: 64,height: 64,text: window.location.href});
  });
