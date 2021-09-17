# Simple TypeScript Template
This is simple TypeScript project template. It is suitable for development and
learning purposes. You can try using TypeScript on server or client side. Just get your hand dirty with TypeScript.

## Pre-reqs
To run this project locally you will need to have:
- Install [Node.js](https://nodejs.org/en/)

## Getting started
- Clone the repository
```
git clone --depth=1 https://github.com/harum/typescript-template.git <project_name>
```
- Install dependencies
```
cd <project_name>
npm install
```

## Project Structure
```
src/
├─ lib/               # all core businnes logic of your app
├─ apps/
│  ├─ node-app        # specific implementation for node application (server side)
│  ├─ web-client      # specific implementation for client side code
```

## Run your code
Run node-app (server side code)
```
npm run node-app:dev
```

Run node-app with debugging functionality
```
npm run node-app:debug
```

Open Node.js REPL just to testing some functionality
```
npm run repl
```

Run development server for client side code using Vite
```
npm run client:dev
```

Build and server client code
```
npm run client:build
npm run client:serve
```


## Resources
-  [https://www.youtube.com/watch?v=x6C20zhZHw8](https://www.youtube.com/watch?v=x6C20zhZHw8)
-  [https://clevercoder.net/2018/09/08/clean-architecture-summary-review/](https://clevercoder.net/2018/09/08/clean-architecture-summary-review/)
