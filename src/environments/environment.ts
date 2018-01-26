const urlStableParams = 'method=flickr.photos.search&api_key=f399a174c74917573c75f080c96162ac&format=json&nojsoncallback=1';
const requestData = '&extras=date_upload,owner_name,url_q,date_taken,views';
export const environment = {
  production: true,
  FlickerAPI: `https://api.flickr.com/services/rest/?${urlStableParams}${requestData}`,
};
