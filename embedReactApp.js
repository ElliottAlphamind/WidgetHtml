function embedReactApp(containerId, bundlePath) {
  const container = document.getElementById(containerId);

  // Create the iframe
  const iframe = document.createElement('iframe');
  iframe.setAttribute('src', 'about:blank');
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';

  // Append the iframe to the container
  container.appendChild(iframe);

  // Load the JavaScript bundle and render the React app
  const iframeWindow = iframe.contentWindow || iframe.contentDocument.defaultView;
  iframeWindow.document.open();
  iframeWindow.document.write(`
    <html>
      <head>
        <script src="${bundlePath}"></script>
      </head>
      <body>
        <script>
          // window.onload = function() {
            // const render = window.render; // Assuming "render" is the function exported from your bundle
            // render(document.body);
         
              var sdk = new FireflyReactSDK.default({
                url: 'https://mars2.fireflylumi.com:8001',
                recipeboardToken: '9VtgdMgJ8U6s93TtIeYKWw',
                appToken: '571593bb-52b9-4063-8565-aa56435de9aa',
                sessionToken: 'AngularTokenAAA',
                SAMLAssertion: "null",
                username: 'Username',
                height: '100%',
                width: '100%',
                minHeight: '100px',
                minWidth: '100px',
                maxWidth: '800px',
                maxHeight: '800px',
              });
              sdk.render(document.body);
           // };
        </script>
        
      </body>
    </html>
  `);
  iframeWindow.document.close();
}
