export default function debouncedResize () {
  return new Promise(function (resolve) {
    var tick

    window.addEventListener('resize', (e) => {
      let stamp = Date.now()
      tick = stamp
      setTimeout(() => {
        if (tick === stamp) {
          resolve(e)
        }
      }, 500)
    })
  })
}
