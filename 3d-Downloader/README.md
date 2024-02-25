<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: 'Arial', sans-serif;
      background-color: #f5f5f5;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .container {
      display: flex;
      background-color: white;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      width: 80%;
      max-width: 800px;
    }

    .model3d {
      flex: 1;
    }

    .details {
      flex: 1;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    h1, h2 {
      color: #333;
    }

    p {
      margin-bottom: 15px;
      color: #666;
    }
  </style>
  <title>3D Model Project</title>
</head>

<body>
  <div class="container">
    <div class="model3d">
      <!-- Inserir a visualização 3D ou uma imagem representativa do projeto -->
      <img src="project_image.jpg" alt="Project Image" style="width: 100%; height: 100%; object-fit: cover;">
    </div>

    <div class="details">
      <h1>3D Model Project</h1>
      <p>This project is a showcase of a 3D model viewer with interactive features. It allows users to explore different colors of a 3D model and download corresponding GLB files.</p>
      <h2>Features:</h2>
      <ul>
        <li>Interactive 3D model viewer</li>
        <li>Color customization options</li>
        <li>GLB file download functionality</li>
      </ul>
      <h2>Development:</h2>
      <p>The project was developed using HTML, CSS, and JavaScript. The 3D model viewer is powered by the Model Viewer API. The code is modular and organized for easy maintenance and future enhancements.</p>
      <h2>How to Use:</h2>
      <p>Simply open the HTML file in a web browser to start interacting with the 3D model. Use the provided color options to customize the model, and click the "Download GLB" button to download the corresponding 3D file.</p>
      <p>Feel free to explore and enjoy the project!</p>
    </div>
  </div>
</body>

</html>
