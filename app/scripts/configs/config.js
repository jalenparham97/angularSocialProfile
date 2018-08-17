"use strict";
/* How to use a route: .config with the name of the route, then a function
that takes the named route as a parameter.*/
    angular.module("app").config(["$routeProvider", function($routeProvider){
        $routeProvider
        .when("/profile", {
            template: `
            <user-profile></user-profile>
            `
        })
        .when("/edit", {
            template: `
            <edit-profile></edit-profile>
            `
        })
        .otherwise({
            redirectTo: "/home"
        })
    }])