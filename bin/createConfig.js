export default function createConfig(answer) {
  function haveMiddleware(name) {
    return answer.middleware.indexOf(name) !== -1;
  }
  const inputConfig = {
    packageName: answer.packageName,
    port: answer.port,
    middleware: {
      static: haveMiddleware("koaStatic"),
      views: haveMiddleware("koaViews"),
      router: haveMiddleware("koaRouter"),
      body: haveMiddleware("koaBody"),
    },
  };
  return inputConfig;
}
