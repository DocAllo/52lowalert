const sp500Tickers = ['AAPL', 'MSFT', 'GOOGL']; // Replace with actual S&P 500 tickers

function fetchStockData(ticker) {
    return new Promise((resolve, reject) => {
        // Fetch stock data from Yahoo Finance
        // Here, we mock the data fetching process
        const mockData = {
            currentPrice: 100,
            low52Week: 90,
            trend: 'Up',
            analystTargetPrice: 110,
            recommendations: {
                strongBuy: 10,
                buy: 20,
                hold: 5,
                sell: 1
            }
        };
        resolve(mockData);
    });
}

function updateStockTable() {
    const tableBody = document.querySelector('#stockTable tbody');
    tableBody.innerHTML = '';

    sp500Tickers.forEach(ticker => {
        fetchStockData(ticker).then(data => {
            const row = document.createElement('tr');
            const trendClass = data.currentPrice <= data.low52Week * 1.05 ? (data.currentPrice <= data.low52Week ? 'red' : 'orange') : '';

            row.innerHTML = `
                <td class="${trendClass}"><a href="https://finance.yahoo.com/quote/${ticker}/analysis/" target="_blank">${ticker}</a></td>
                <td class="${trendClass}">${data.low52Week}</td>
                <td class="${trendClass}">${data.trend}</td>
                <td class="${trendClass}">${data.analystTargetPrice}</td>
                <td class="${trendClass}">Strong Buy: ${data.recommendations.strongBuy}, Buy: ${data.recommendations.buy}, Hold: ${data.recommendations.hold}, Sell: ${data.recommendations.sell}</td>
            `;

            tableBody.appendChild(row);
        }).catch(error => {
            console.error('Error fetching data for ticker:', ticker, error);
        });
    });
}

// Update the stock table every 5 minutes
setInterval(updateStockTable, 300000);
updateStockTable();
