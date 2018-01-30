export default function debouncedResize (callback) {
  var tick
  window.addEventListener('resize', (e) => {
    let tock = Date.now()
    tick = tock
    setTimeout(() => {
      if (tick === tock) {
        callback(e)
      }
    }, 500)
  })
}
