<html>
<head>
  <style type="text/css">
    .loading {
      margin: 60px auto;
      border: 3px solid #094CFA;
      background: white;
      width: 60px;
      height: 60px;
      border-radius: 4px;

      /* Aqui declaramos nossa animação inline */
      animation: rotate 3s infinite linear;
    }
    
    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(359deg);
      }
    }
  </style>
</head>
<body>
  <div class="loading"></div>
</body>
</html>
