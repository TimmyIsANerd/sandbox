module.exports = {


  friendlyName: 'View inbox',


  description: 'Display "Inbox" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/email/inbox'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
