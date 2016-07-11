{
  angular.module('meganote.users')
    .directive('userProfile',[

      'CurrentUser'
      (CurrentUser) => {
        class UserProfileController {
          constructor() {
            var vm = this;
            vm.user = angular.copy(CurrentUser.get());
          }

          submit() {
            var vm = this;
            UsersService.update(vm.user);
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
