{
  angular.module('meganote')
    .factory('AuthInterceptor', AuthInterceptor)
    .config(authConfig);

    AuthInterceptor.$inject = ['AuthToken', 'API_BASE'];
    function AuthInterceptor(AuthToken, API_BASE) {
      return {
        request(req) {
          const token = AuthToken.get();
          if (token && req.url.includes(API_BASE)) {
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
