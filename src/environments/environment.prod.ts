const urlStableParams = 'method=flickr.photos.search&api_key=5096d108bb4bc09416c5318d2a49dda0&format=json&nojsoncallback=1';
const requestData = '&extras=date_upload,owner_name,url_q,date_taken,views';
export const environment = {
  production: true,
  FlickerAPI: `https://api.flickr.com/services/rest/?${urlStableParams}${requestData}`,
};
