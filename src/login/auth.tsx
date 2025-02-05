fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      
      username: 'emilys',
      password: 'emilyspass',
      expiresInMins: 30, // optional, defaults to 60
    }),
    credentials: 'include' // Include cookies (e.g., accessToken) in the request
  })
  .then(res => res.json())
  .then(console.log);

  fetch('https://dummyjson.com/auth/me', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer /* YOUR_ACCESS_TOKEN_HERE */', // Pass JWT via Authorization header
    }, 
    credentials: 'include' // Include cookies (e.g., accessToken) in the request
  })
  .then(res => res.json())
  .then(console.log);

  fetch('https://dummyjson.com/auth/refresh', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      refreshToken: '/* YOUR_REFRESH_TOKEN_HERE */', // Optional, if not provided, the server will use the cookie
      expiresInMins: 30, // optional (FOR ACCESS TOKEN), defaults to 60 
    }),
    credentials: 'include' // Include cookies (e.g., accessToken) in the request
  })
  .then(res => res.json())
  .then(console.log);