body {
  background-color: #ffffff;
  color: #1a1a1a;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  padding: 0;
}

header {
  background-color: #f9f9f9;
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid #e0e0e0;
}

h1 {
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  color: #1a1a1a;
}

main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.description {
  margin-bottom: 30px;
  font-size: 16px;
  line-height: 1.6;
}

table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin-top: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

th, td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
}

th {
  background-color: #f0f0f0;
  color: #1a1a1a;
  font-weight: 600;
  white-space: nowrap;
}

tr:last-child td {
  border-bottom: none;
}

tr:hover {
  background-color: #f5f5f5;
}

.highlight-red {
  background-color: #ffebee !important;
  color: #c62828;
}

.highlight-orange {
  background-color: #fff3e0 !important;
  color: #ef6c00;
}

footer {
  text-align: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-top: 1px solid #e0e0e0;
  font-size: 14px;
  color: #666;
}

@media (max-width: 768px) {
  body {
    font-size: 13px;
  }

  main {
    padding: 20px 10px;
  }

  table {
    font-size: 12px;
  }

  th, td {
    padding: 8px 10px;
  }

  .description {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 20px;
  }

  .description {
    font-size: 13px;
  }

  table {
    font-size: 11px;
  }

  th, td {
    padding: 6px 8px;
  }
}
