"use strict";

const userProfile = {
  template: `
    <section>

      <div class="img"></div>

      <div class="info">
        <h1>{{ $ctrl.info.name }}</h1>
        <p>{{ $ctrl.info.contact }}</p>
        <p>{{ $ctrl.info.bio }}</p>
        <button ng-click="$ctrl.location()">Update</button>
      </div>

    </section>
  `,

  controller: ["ProfileService", "$location", function(ProfileService, $location) {
    const vm = this;
 
    vm.info = ProfileService.getUserProfile(); 
    vm.location = () => $location.url("/edit");

     
  }]
}

angular
  .module("app")
  .component("userProfile", userProfile);