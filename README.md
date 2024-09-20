# Namaste React Episode 4 🚀

## When building an app, first thing to do is planning

## Food ordering app planning

### The component of the app should have

``` markdown
Header:
1. logo
2. Nav items

Body:
1. search bar
2. restaurant Container:
- restaurant card
    - img
    - name of restaurant, star rating, cuisine, delivery time, e.t.c

Footer:
- copyright
- links
- Address
- contact

```

## Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

## React hooks

(Normal JS utility functions)

- useState() - Supper powerful state variables in react
- useEffect()

## Types of routing in web app

- Client side routing
- Server side routing

## Redux toolkit

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice (cartSlice)
- dispatch(action)
- Selector

## Types of testing(developer)

- Unit Testing
- Integration Testing
- End to End Testing - e2e testing

## Setting up testing in our app

- Install React Testing Library
- Installed jest
- Installed Babel dependencies
- Configure Babel
- Configure Parcel Config file to disable default babel transpilation
- Jest - npx jest --init
- Install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config
- npm i -D @testing-library/jest-dom