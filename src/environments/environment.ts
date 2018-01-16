// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  FlickerAPI: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c7cf3377dcb8b44fc724caf3c4399f11&extras=date_upload,owner_name,url_q,date_taken,views&format=json&nojsoncallback=1',

};
