# Frontend-Backend Integration Test

This project demonstrates a basic integration between a React frontend and a .NET Core backend API.

## Project Structure

```
├── backend/          # .NET Core Web API
│   ├── Program.cs    # Main API configuration
│   └── ...
├── frontend/         # React application
│   ├── src/
│   │   ├── App.js    # Main React component with API integration
│   │   └── App.css   # Styling
│   └── ...
```

## Features

### Backend API (.NET Core)
- **CORS enabled** for React frontend (localhost:3000)
- **Test endpoint**: `GET /api/test` - Simple connectivity test
- **Users endpoint**: `GET /api/users` - Returns sample user data
- **Weather endpoint**: `GET /weatherforecast` - Returns weather forecast data
- **Swagger UI** available at `https://localhost:7295/swagger`

### Frontend (React)
- **Connection Test**: Tests basic backend connectivity
- **Users Display**: Fetches and displays user data
- **Weather Display**: Fetches and displays weather forecast
- **Error Handling**: Shows connection errors and status messages
- **Loading States**: Visual feedback during API calls

## How to Run

### 1. Start the Backend

```bash
cd backend
dotnet run
```

The backend will start on:
- HTTP: `http://localhost:5075`
- HTTPS: `https://localhost:7295`
- Swagger: `https://localhost:7295/swagger`

### 2. Start the Frontend

```bash
cd frontend
npm install    # First time only
npm start
```

The frontend will start on: `http://localhost:3000`

## Testing the Integration

1. Make sure both backend and frontend are running
2. Open `http://localhost:3000` in your browser
3. Click the buttons to test:
   - **Test Backend Connection**: Verifies basic connectivity
   - **Fetch Users**: Gets sample user data from the API
   - **Fetch Weather**: Gets weather forecast data

## Expected Results

- ✅ Green success messages when connections work
- ❌ Red error messages if backend is not running or unreachable
- Data displays in organized lists when API calls succeed

## Troubleshooting

- **CORS errors**: Make sure backend is running and CORS is configured for `http://localhost:3000`
- **Connection refused**: Verify backend is running on port 5075
- **Port conflicts**: Check if ports 3000 (frontend) or 5075 (backend) are already in use

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/test` | Simple connectivity test |
| GET | `/api/users` | Sample user data |
| GET | `/weatherforecast` | Weather forecast data |