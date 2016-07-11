{
  angular.module('meganote.signUp')
    .directive('signUp', [

      '$state',
      'UsersService',
      ($state, UsersService) => {

        class SignUpController {
          constructor() {
            this.user = {};
          }
          submit() {
            UsersService.create(this.user)
              .then(() => $state.go('notes.form', { noteId: undefined })  // Tells it to go to that specific note with id
            );
          }
        }

        return {
          scope: {},
          controller: SignUpController,
          controllerAs: 'vm',
          bindToController: true,
          templateUrl: '/sign-up/sign-up.html',
        };
      }
    ]);
}
