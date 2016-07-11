{
  angular.module('meganote.users')
    .directive('userProfile',[

      'CurrentUser'
      (CurrentUser) => {
        class UserProfileController {
          constructor() {
            var vm = this;
            vm.user = CurrentUser.get();
          }

          submit() {
            console.log('submitted!')
          }

        }

        return {
          scope: {},
          controller: UserProfileController,
          controllerAs: 'vm',
          bindToController: true,
          templateUrl:
        };

      }
    ]);
}
