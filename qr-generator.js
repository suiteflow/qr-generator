  $(document).ready(function(){
    $('[suite-qr="code"]').qrcode({width: 120,height: 120,text: window.location.href});
  });
