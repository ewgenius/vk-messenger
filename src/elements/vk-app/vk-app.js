Polymer({
  is: 'vk-app',

  db: new PouchDB('db'),

  _computeListWidth: function(isMobile) {
    return isMobile ? '100%' : '320px';
  },

  _listTap: function() {
    this.$.mainDrawerPanel.closeDrawer();
  },

  properties: {},

  ready: function() {
    var app = this;
    app.dialogs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    app.link = 'https://oauth.vk.com/authorize?' +
      'client_id=4837072' +
      '&scope=friends,docs,status,messages,notifications' +
      '&redirect_uri=' + 'https://oauth.vk.com/blank.html' +
      '&display=popup' +
      '&v=API_VERSION' +
      '&response_type=token';
  }
});
