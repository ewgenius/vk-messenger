Polymer({
  is: 'chat-shell',

  properties: {
    state: {
      value: 'chat'
    },

    link: {
      value: 'https://oauth.vk.com/authorize?' +
        'client_id=4837072' +
        '&scope=friends,docs,status,messages,notifications' +
        '&redirect_uri=' + 'https://oauth.vk.com/blank.html' +
        '&display=popup' +
        '&v=API_VERSION' +
        '&response_type=token'
    }
  },

  ready: function() {
    var app = this;

    window.app = app;

    app.$.webview.addEventListener("loadredirect", function(e) {
      if (e.newUrl.indexOf('access_token') > -1) {
        var result = e.newUrl.split('#')[1].split('&');

        var token = result[0].split('=')[1];
        var expires = result[1].split('=')[1];
        var userId = result[2].split('=')[1];

        console.log(token, expires, userId);

        app.state = 'chat';
      }
    });
  }
});
