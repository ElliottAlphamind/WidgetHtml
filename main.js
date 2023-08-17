window.onload = function() {
  console.log("Loading", )
  // Instantiate the SDK and render the React app
  var sdk = new MyReactSDK({ prop1: 'value1', prop2: 'value2' });
  sdk.render('#react-container');

  // Later, you can update the React app's props
  sdk.update({ prop1: 'newValue1' });

  // And you can unmount the React app when it's no longer needed
  sdk.unmount();



};
