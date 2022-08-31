import util from 'util'

/**
 * @param { success, errors }
 * * Wether to log api requests or not
 */
const isDev = true // process.env.NODE_ENV === 'development'

const logApiRequests = {
  success: isDev,
  error: isDev,
  info: isDev,
}

/**
 * * Log utility function
 * @param logData: object or string to log
 * @param status: color of the log: { 'success' | 'error' | 'info' }
 */
const Log = (
  logData?: string | Object,
  status?: 'success' | 'error' | 'info',
) => {
  let parsedObject

  if (typeof logData === 'object') {
    parsedObject =
      '\n' +
      util.inspect(logData, {
        showHidden: false,
        depth: null,
        colors: true,
      })
  }

  if (typeof logData === 'string') {
    parsedObject = logData
  }

  switch (status) {
    case 'success':
      logApiRequests.success &&
        console.log('\x1b[32m%s\x1b[0m', '✅ ' + parsedObject)
      break
    case 'error':
      logApiRequests.error &&
        console.log('\x1b[31m%s\x1b[0m', '❌ ' + parsedObject)
      break
    case 'info':
      logApiRequests.info &&
        console.log('\x1b[36m%s\x1b[0m', '💫 ' + parsedObject)
      break

    default:
      console.log(parsedObject)
      break
  }
}

/**
 * * Init logs
 */
Log('')
Log(
  `Success logs are ${logApiRequests.success ? 'enabled' : 'disabled'}`,
  'success',
)
Log(`Errors logs are ${logApiRequests.error ? 'enabled' : 'disabled'}`, 'error')
Log(`Info logs are ${logApiRequests.info ? 'enabled' : 'disabled'}`, 'info')
Log('')

export default Log
