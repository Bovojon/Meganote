{
  angular.module('meganote.signUp')
    .directive('signUp', [

      '$state',
      'Flash'
      'UsersService',
      ($state, Flash, UsersService) => {

        let flash = false;
        class SignUpController {
          constructor() {
            this.user = {};
          }
          submit() {
            if (Number.isInteger(flash)) {
              FLash.dismiss(flash);
              flash = false;
            }
            UsersService.create(this.user)
              .then(
                () => $state.go('notes.form', { noteId: undefined }),

                (res) => {
                  ler errors = '',
                  for (let errors of res.data.errors) {
                    errors += `<li>${error}</li>`;
                  }
                  flash = Flash.create('danger', `
                  <p>Oops! Something went wrong.</p>
 +                <ul>${errors}</ul>
                  `);
                }
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
