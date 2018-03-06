angular.module('app').directive('person', function () {
    return {
        restrict: 'E',
        scope: {
            person: '=',
            action: '&'
        },
        template: '<div style="margin-top: 45px;"><div class="form-group">Name: <input type="text" ng-model="person.name" class="form-control"></div>' +
                  '<div class="form-group">Pen Name: <input type="text" ng-model="person.penName" class="form-control"></div>' +
                  '<div class="form-group"><input type="button" ng-click="action()" value="Action" class="btn btn-primary"></div>' +
                  '<pre>{{person | json}}</pre></div>'
    };
});