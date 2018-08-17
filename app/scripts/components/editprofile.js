"use strict";
const editProfile = {
  template: `
    <section class="edit__container">

      <p>Use this form to update your profile.</p>

      <form ng-submit="$ctrl.setUserProfileInfo($ctrl.newInfo)" class="form__container">
        <label for="name">Name</label>
        <input ng-model="$ctrl.newInfo.name" id="name" placeholder="Enter Name">
        <label for="contact">Contact</label>
        <input ng-model="$ctrl.newInfo.contact" id="contact" placeholder="Enter Contact Info">
        <label for="bio">Bio</label>
        <textarea ng-model="$ctrl.newInfo.bio" id="bio" placeholder="Enter Bio"></textarea>
        <button>Save</button>
      </form>

    </section>

  `,

  controller: ["ProfileService","$location", function(ProfileService, $location) {
    const vm = this;

    vm.setUserProfileInfo = (newProfile) => {
      vm.info = ProfileService.setUserProfile(newProfile);
      $location.url("/profile");
    }
  }]
}





angular 
  .module("app")
  .component("editProfile", editProfile);