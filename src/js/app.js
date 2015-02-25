(function() {
    'use strict';

    var User = require('./models/user'),
        UsersListView = require('./views/users-list-view'),
        SuperUsersListView = require('./views/super-users-list-view'),

        userCollection = new Backbone.Collection([
            { name: 'John Doe' },
            { name: 'Another User' }
        ], {
            model: User
        }),

        usersListView = new UsersListView({
            collection: userCollection
        }),

        superUsersListView = new SuperUsersListView({
            collection: userCollection
        });

    $('#appWrapper').append(usersListView.render().el);
    $('#appWrapper').append(superUsersListView.render().el);
}());
