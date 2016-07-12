{
  angular.module('meganote')
    .factory('AuthInterceptor', AuthInterceptor)
    .config(authConfig);

    AuthInterceptor.$inject = ['AuthToken'];
    function AuthInterceptor(AuthToken) {
      return {
        request(req) {
          const token = AuthToken.get();
          if (token) {
            res.headers.Authorization = token;
          }
          return req;
        }
      };
    }

    authConfig.$inject = ['$httpProvider'];
    function authConfig($httpProvider){
      return $httpProvider.interceptor.push('AuthInterceptor');
    }


}
