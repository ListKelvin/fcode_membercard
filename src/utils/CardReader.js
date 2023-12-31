// Add a global error event listener early on in the page load, to help ensure that browsers
// which don't support specific functionality still end up displaying a meaningful message.
window.addEventListener('error', function (error) {
  if (ChromeSamples && ChromeSamples.setStatus) {
    console.error(error)
    ChromeSamples.setStatus(error.message + ' (Your browser may not support this feature.)')
    error.preventDefault()
  }
})

export const ChromeSamples = {
  log: function () {
    var line = Array.prototype.slice
      .call(arguments)
      .map(function (argument) {
        return typeof argument === 'string' ? argument : JSON.stringify(argument)
      })
      .join(' ')

    return line
  },

  setStatus: (status) => status,

  setContent: function (newContent) {
    return newContent
    // var content = document.querySelector('#content')
    // while (content.hasChildNodes()) {
    //   content.removeChild(content.lastChild)
    // }
    // content.appendChild(newContent)
  },
}
if (/Chrome\/(\d+\.\d+.\d+.\d+)/.test(navigator.userAgent)) {
  // Let's log a warning if the sample is not supposed to execute on this
  // version of Chrome.
  if (89 > parseInt(RegExp.$1)) {
    ChromeSamples.setStatus(
      'Warning! Keep in mind this sample has been tested with Chrome ' + 89 + '.'
    )
  }
}

var log = ChromeSamples.log

if (!('NDEFReader' in window))
  ChromeSamples.setStatus('Web NFC is not available. Use Chrome on Android.')

// scanButton.addEventListener('click', async () => {
//   log('User clicked scan button')

//   try {
//     const ndef = new NDEFReader()
//     await ndef.scan()
//     log('> Scan started')

//     ndef.addEventListener('readingerror', () => {
//       log('Argh! Cannot read data from the NFC tag. Try another one?')
//     })

//     ndef.addEventListener('reading', ({ message, serialNumber }) => {
//       log(`> Serial Number: ${serialNumber}`)
//       log(`> Records: (${message.records.length})`)
//     })
//   } catch (error) {
//     log('Argh! ' + error)
//   }
// })

// writeButton.addEventListener('click', async () => {
//   log('User clicked write button')

//   try {
//     const ndef = new NDEFReader()
//     await ndef.write('Hello world!')
//     log('> Message written')
//   } catch (error) {
//     log('Argh! ' + error)
//   }
// })

// makeReadOnlyButton.addEventListener('click', async () => {
//   log('User clicked make read-only button')

//   try {
//     const ndef = new NDEFReader()
//     await ndef.makeReadOnly()
//     log('> NFC tag has been made permanently read-only')
//   } catch (error) {
//     log('Argh! ' + error)
//   }
// })
