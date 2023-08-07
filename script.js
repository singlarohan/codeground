function initalize() {
    var html = document.getElementById("html");
    var css = document.getElementById("css");
    var js = document.getElementById("js");
    var code = document.getElementById("code").contentWindow.document;
  
    // Function to create and download a file
    function downloadFile(fileName, content) {
      const element = document.createElement("a");
      element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content));
      element.setAttribute("download", fileName);
      element.style.display = "none";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  
    document.body.onkeyup = function () {
      code.open();
      code.write(
        html.value +
        "<style>" + css.value + "</style>" +
        "<script>" + js.value + "</script>"
      );
      code.close();
    }
  
    // Get reference to the download button
    const downloadButton = document.getElementById("downloadButton");
  
    // Add a click event listener to the download button
    downloadButton.addEventListener("click", function () {
      const htmlContent = html.value;
      const cssContent = css.value;
      const jsContent = js.value;
  
      // Download HTML file
      downloadFile("index.html", htmlContent);
  
      // Download CSS file
      downloadFile("styles.css", cssContent);
  
      // Download JS file
      downloadFile("script.js", jsContent);
    });
  }
  
  initalize();
  