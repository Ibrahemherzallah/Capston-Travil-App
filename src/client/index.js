import { getCityData, getWeather, getImage } from './js/formHandler';
import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';

document.getElementById('Btn').addEventListener('click', async () => {
    const cityData = await getCityData();
    const weatherData = await getWeather();
    const imageUrl = await getImage();

    if (cityData) {
        document.getElementById('cityData').innerText = `Latitude: ${cityData.latitude}, Longitude: ${cityData.longitude}, Country: ${cityData.country}`;
    }
    if (weatherData) {
        document.getElementById('weatherData').innerText = weatherData;
    }
    if (imageUrl) {
        document.getElementById('cityImage').src = imageUrl;
        document.getElementById('cityImage').alt = "Image of " + cityData.cityName;
    } else {
        document.getElementById('cityImage').src = '';
        document.getElementById('cityImage').alt = 'No image available';
    }
});
