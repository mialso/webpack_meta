#### Debug / Log facility

* minimum startup overhead, tap into webpack linking process at runtime
* minimum initial debug size, load actual debug code only if required
* separate debug bundle, no relation to production build process
* no changes to production code until debug is enabled

##### pros:

* if change debug logic -> no changes to production -> no bugs
* no debug logic in production bundle -> smaller prod size
* no debug logic in production bundle -> better prod performance

#### How it works:

##### "ProxyDependencyMainTemplateHookWebpackPlugin":
* taps into webpack `MainTemplate` creation
* webpack depenency resolution is hooked to wrap required by debug imports with `Proxy`
* webpack loader logic is hooked to wait for debug bundle load if required

##### "initDebug":
* small debug initializer, loads before main bundle
* debug functionality is enabled by url query parameter
* actual debug bundle is loaded later in case debug is enabled

#### How to run an example:
* `npm run build:main` -> build main logic bundle
* `npm run build:debug` -> build debug bundle
* `npm run start:server` -> start http-server to serve "dist" folder
* open `http://localhost:5080/?debugLog=1` with debug enabled
> see console output

#### possible TODOs:
* manage webpack module-id(path) constants
* minified script
* inline script html
