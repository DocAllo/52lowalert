import axios from 'axios';

export async function getMovingAverageSlope(ticker) {
  try {
    const response = await axios.get(`https://api.example.com/ticker/${ticker}/moving_average_slope`);
    return response.data.slope;
  } catch (error) {
    console.error(`Error fetching moving average slope for ${ticker}:`, error);
    return null;
  }
}

export async function getAnalystData(ticker) {
  try {
    const response = await axios.get(`https://api.example.com/ticker/${ticker}/analyst`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching analyst data for ${ticker}:`, error);
    return null;
  }
}
