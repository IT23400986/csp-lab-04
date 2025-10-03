import React, { useState } from 'react';
import './App.css';

function App() {
  const [testResult, setTestResult] = useState(null);
  const [users, setUsers] = useState([]);
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_BASE_URL = 'http://localhost:5075'; // Backend port from launchSettings.json

  const testConnection = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/api/test`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      setTestResult(data);
    } catch (err) {
      setError(`Connection test failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/api/users`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(`Failed to fetch users: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/weatherforecast`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(`Failed to fetch weather: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Frontend-Backend Integration Test</h1>
        
        <div className="test-section">
          <h2>Connection Test</h2>
          <button onClick={testConnection} disabled={loading}>
            {loading ? 'Testing...' : 'Test Backend Connection'}
          </button>
          {testResult && (
            <div className="result success">
              <p>✅ {testResult.message}</p>
              <p>Timestamp: {new Date(testResult.timestamp).toLocaleString()}</p>
            </div>
          )}
        </div>

        <div className="test-section">
          <h2>Users Data</h2>
          <button onClick={fetchUsers} disabled={loading}>
            {loading ? 'Loading...' : 'Fetch Users'}
          </button>
          {users.length > 0 && (
            <div className="result">
              <h3>Users:</h3>
              <ul>
                {users.map(user => (
                  <li key={user.id}>
                    {user.name} - {user.email}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="test-section">
          <h2>Weather Forecast</h2>
          <button onClick={fetchWeather} disabled={loading}>
            {loading ? 'Loading...' : 'Fetch Weather'}
          </button>
          {weather.length > 0 && (
            <div className="result">
              <h3>Weather Forecast:</h3>
              <ul>
                {weather.map((forecast, index) => (
                  <li key={index}>
                    {forecast.date}: {forecast.temperatureC}°C ({forecast.summary})
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {error && (
          <div className="result error">
            <p>❌ {error}</p>
            <p>Make sure your backend is running on the correct port!</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
