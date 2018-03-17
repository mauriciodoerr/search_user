angular.module('app', [])
.controller('MainCtrl', MainFunc)


function MainFunc($scope) {

    $scope.title = "SEARCH";

    $scope.field = 'field';
    $scope.role = 'user';

    $scope.form = {
        firstname: undefined,
        lastname: undefined,
        email: undefined,
        field: undefined,
        role: undefined,
        index: undefined
    };

    $scope.itens = [
        {
            firstname: 'FirstName MiddleName',
            lastname: 'LastName',
            email: 'name.lastname@exxonmobil.com'
        },
        {
            firstname: 'FirstName MiddleName',
            lastname: 'LastName',
            email: 'name.lastname@exxonmobil.com'
        },
        {
            firstname: 'FirstName MiddleName',
            lastname: 'LastName',
            email: 'name.lastname@exxonmobil.com'
        }
    ];

    $scope.isform = false;

    $scope.remove_item = function(index){
        $scope.itens.splice(index, 1);
    }

    $scope.update_item = function(index, item){
        $scope.isform = true;
        $scope.form = {
            firstname: item.firstname,
            lastname: item.lastname,
            email: item.email,
            field: item.field,
            role: item.role,
            index: index
        };
    }

    $scope.open_form = function() {
        $scope.isform = true;
    }

    $scope.save_form = function(text) {
        console.log($scope.form.index);
        if($scope.form.index == undefined) {
            $scope.itens.push(text);
        } else {
            $scope.itens[$scope.form.index] = text;
        }
        
        $scope.form = {};
        $scope.isform = false;
    }

    $scope.cancel_form = function() {
        $scope.form = {};
        $scope.isform = false;
    }

}