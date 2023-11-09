import { AppErrorResponse } from '../models/app.response'
import { type Request, type Response, type NextFunction } from 'express'
/* device detector  */
import DeviceDetector from 'node-device-detector'
/* ip address */
import ip from 'ip'

const detector = new DeviceDetector({
  clientIndexes: true,
  deviceIndexes: true,
  deviceAliasCode: false
})

export function clientMiddleware (req: Request, res: Response, next: NextFunction): void {
  const userAgent = req.get('User-Agent') ?? false
  const ipAddress = ip.address()

  if (typeof userAgent === 'undefined' || userAgent === false) {
    throw new AppErrorResponse({
      statusCode: 403,
      name: '[DEVICE_ERR] - No se puede realizar la acción',
      description: '[DEVICE_ERR] - No se puede realizar la acción',
      isOperational: true
    })
  }

  if (typeof ipAddress === 'undefined') {
    throw new AppErrorResponse({
      statusCode: 403,
      name: '[ADDR_DEVICE_ERR] - No se puede realizar la acción',
      description: '[ADDR_DEVICE_ERR] - No se puede realizar la acción',
      isOperational: true
    })
  }

  res.locals.device = detector.detect(userAgent)
  res.locals.ipAddress = ipAddress
  next()
}
