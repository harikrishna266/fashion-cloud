const urlStableParams = 'method=flickr.photos.search&api_key=c7cf3377dcb8b44fc724caf3c4399f11&format=json&nojsoncallback=1';
const requestData = '&extras=date_upload,owner_name,url_q,date_taken,views';
export const environment = {
  production: true,
  FlickerAPI: `https://api.flickr.com/services/rest/?${urlStableParams}${requestData}`,
};
