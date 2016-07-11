{
  angular.module('meganote.signIn')
    .directive('signIn', [
      () => {

        class SignInController{
          submit() {
            console.log("submitted!")
          }
        }

        return {
          scope: {},
          controller: SignInController,
          controllerAs: 'vm',
          bindToController: true,
          template: ''
        };
      }

    ]);
}
