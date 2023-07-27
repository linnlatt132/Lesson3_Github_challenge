// Get references to the time and date containers
const timeContainer = document.querySelector('#current-time');
const dayContainer = document.querySelector('#current-day');

// Update the time
function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const amOrPm = hours >= 12 ? 'PM' : 'AM';
    const twelveHourFormat = hours % 12 || 12;
    const time = `${twelveHourFormat}:${minutes.toString().padStart(2, '0')} ${amOrPm}`;
    timeContainer.textContent = time;
  }
  
// Update the day
function updateDay() {
    const now = new Date();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const day = days[now.getDay()];
    const month = months[now.getMonth()];
    const date = now.getDate();
    const formattedDate = `${day}. ${month}. ${date}`;
    dayContainer.textContent = formattedDate;
  }
  
// Call the update functions initially
updateTime();
updateDay();

// Update the time every second
setInterval(updateTime, 1000);

// Get references to the city input and city text
const cityInput = document.getElementById('city-input');
const cityText = document.getElementById('city-text');

// Update the city name
function updateCityName() {
  const cityName = cityInput.value;
  cityText.textContent = cityName ? cityName : 'City';
}

// Listen for input changes in the city input field
cityInput.addEventListener('input', updateCityName);

//Bonus

