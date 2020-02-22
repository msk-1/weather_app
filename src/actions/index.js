import _ from 'lodash';
import weatherApi from "../apis/weatherApi";

export const fetchWeather = () => {
  const apiKey = '2662d8613904d29562bb84331f620704';
  return _.memoize(async function(dispatch) {
    const response = await weatherApi.get("?q=Takatoricho,jp&APPID=" + apiKey)
    dispatch({ type: 'FETCH_WEATHER', response: response.data.list})
  })
}

export const fetchTempls = function() {
  return _.memoize(async function(dispatch) {
    const tmpl = '10度';
    dispatch({ type: 'FETCH_TEMPL', val: tmpl })
  })
}