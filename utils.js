export function getMovingAverageSlope(historicalData) {
  if (!historicalData || historicalData.length < 2) {
    return 0;
  }

  const prices = historicalData.map(data => data.close);
  const x = Array.from({ length: prices.length }, (_, i) => i);
  const n = prices.length;

  const sumX = x.reduce((a, b) => a + b, 0);
  const sumY = prices.reduce((a, b) => a + b, 0);
  const sumXY = x.reduce((sum, xi, i) => sum + xi * prices[i], 0);
  const sumX2 = x.reduce((sum, xi) => sum + xi * xi, 0);

  const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  
  return slope;
}

export async function getAnalystData(ticker) {
  try {
    const recommendationTrend = await window.yahooFinance.recommendationsBySymbol(ticker);
    const analystData = {
      recommendationMean: recommendationTrend.recommendationMean,
      targetMeanPrice: recommendationTrend.targetMeanPrice,
      numberOfAnalystOpinions: recommendationTrend.numberOfAnalystOpinions
    };
    return analystData;
  } catch (error) {
    console.error(`Error fetching analyst data for ${ticker}:`, error);
    return null;
  }
}
