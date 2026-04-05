# Deploy Pattern Shift

This project works best when the backend is hosted at a stable HTTPS URL and the mobile app is built against that URL.

## What gets deployed

- `apps/server` as the backend API
- MongoDB Atlas as the database
- OpenAI API key on the server only
- `apps/mobile` configured with the hosted API URL during Expo/EAS build

## Backend requirements

The server needs these environment variables:

```env
PORT=4000
MONGODB_URI=your-mongodb-atlas-uri
OPENAI_API_KEY=your-openai-api-key
OPENAI_MODEL=gpt-5-mini
CORS_ORIGIN=*
```

## Recommended backend start command

Build command:

```bash
npm install
npm --workspace @pattern-shift/server run build
```

Start command:

```bash
npm --workspace @pattern-shift/server run start
```

## After deploy

Once the backend is deployed, verify:

```text
https://your-api-domain.example/api/health
```

It should return JSON quickly.

## Mobile app API URL

The mobile app reads the API base URL from:

```env
EXPO_PUBLIC_API_BASE_URL
```

For local emulator use:

```env
EXPO_PUBLIC_API_BASE_URL=http://10.0.2.2:4000/api
```

For local real-device use:

```env
EXPO_PUBLIC_API_BASE_URL=http://YOUR_LAN_IP:4000/api
```

For production / APK build:

```env
EXPO_PUBLIC_API_BASE_URL=https://your-api-domain.example/api
```

## Build the mobile app against production

Before building, set:

```env
EXPO_PUBLIC_API_BASE_URL=https://your-api-domain.example/api
```

Then build with EAS:

```bash
npm --workspace @pattern-shift/mobile run start
```

For APK / release builds:

```bash
cd apps/mobile
eas build --platform android --profile preview
```

## Important note

The APK will keep the API URL it was built with. If you build with a LAN IP, the APK will only work while that laptop and network setup stay available.
