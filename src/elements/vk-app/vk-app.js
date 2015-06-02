Polymer({
  is: 'vk-app',

  db: new PouchDB('db'),

  _computeListWidth: function(isMobile) {
    return isMobile ? '100%' : '320px';
  },

  _listTap: function() {
    this.$.mainDrawerPanel.closeDrawer();
  },

  ready: function() {

  }
});
