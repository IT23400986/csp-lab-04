# Deployment Configuration Guide

## Common Deployment Communication Issues

### 1. **Hardcoded URLs**
❌ **Problem**: Frontend hardcoded to `localhost:5075`
✅ **Solution**: Use environment variables

### 2. **CORS Issues**
❌ **Problem**: Backend only allows `localhost:3000`
✅ **Solution**: Configure CORS for production domains

### 3. **HTTP/HTTPS Mismatch**
❌ **Problem**: Mixed HTTP/HTTPS protocols
✅ **Solution**: Ensure both use HTTPS in production

## Deployment Steps

### Frontend Deployment

1. **Update Environment Variables**
   ```bash
   # In .env.production file
   REACT_APP_API_URL=https://your-backend-domain.com
   ```

2. **Build for Production**
   ```bash
   cd frontend
   npm run build
   ```

3. **Deploy** the `build` folder to your hosting service (Netlify, Vercel, etc.)

### Backend Deployment

1. **Update CORS Configuration**
   ```json
   // In appsettings.json
   {
     "AllowedOrigins": [
       "https://your-frontend-domain.com"
     ]
   }
   ```

2. **Publish Backend**
   ```bash
   cd backend
   dotnet publish -c Release
   ```

3. **Deploy** to your hosting service (Azure, AWS, Heroku, etc.)

## Platform-Specific Examples

### Netlify + Heroku
```bash
# Frontend (Netlify)
REACT_APP_API_URL=https://your-app.herokuapp.com

# Backend (Heroku) - appsettings.json
"AllowedOrigins": ["https://your-app.netlify.app"]
```

### Vercel + Railway
```bash
# Frontend (Vercel)
REACT_APP_API_URL=https://your-app.railway.app

# Backend (Railway) - appsettings.json
"AllowedOrigins": ["https://your-app.vercel.app"]
```

### Azure
```bash
# Frontend (Azure Static Web Apps)
REACT_APP_API_URL=https://your-api.azurewebsites.net

# Backend (Azure App Service) - appsettings.json
"AllowedOrigins": ["https://your-frontend.azurestaticapps.net"]
```

## Testing Deployment

1. **Check Browser Console** for CORS errors
2. **Verify API URLs** in Network tab
3. **Test HTTPS** connections
4. **Check Environment Variables** are loaded correctly

## Common Error Messages

### CORS Error
```
Access to fetch at 'https://api.domain.com' from origin 'https://app.domain.com' 
has been blocked by CORS policy
```
**Fix**: Add frontend domain to backend CORS configuration

### Network Error
```
TypeError: Failed to fetch
```
**Fix**: Check if backend URL is correct and accessible

### Mixed Content Error
```
Mixed Content: The page at 'https://...' was loaded over HTTPS, 
but requested an insecure XMLHttpRequest endpoint 'http://...'
```
**Fix**: Use HTTPS for both frontend and backend

## Quick Checklist

- [ ] Frontend uses environment variables for API URL
- [ ] Backend CORS allows production frontend domain
- [ ] Both frontend and backend use HTTPS
- [ ] Environment variables are set correctly
- [ ] API endpoints are accessible from deployed frontend
- [ ] No hardcoded localhost URLs remain