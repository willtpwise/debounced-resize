# Debounced Resize
Native JS debounce for the window resize event with support for ES6 Promises

## Install
```shell
npm install --save debounced-resize
```

## Usage (ES6)
```js
import debouncedResize from 'debounced-resize'

debouncedResize((e) => {
  console.log('Resized')
})
```
