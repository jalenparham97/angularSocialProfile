"use strict";

function ProfileService() {
  const vm = this;
  vm.userProfile = {

  };

  vm.setUserProfile = (newInfo) => {
    vm.userProfile = angular.copy(newInfo);
    return vm.userProfile;
  }

  vm.getUserProfile = () => {
    return vm.userProfile;
  }
}


angular
  .module("app")
  .service("ProfileService", ProfileService);