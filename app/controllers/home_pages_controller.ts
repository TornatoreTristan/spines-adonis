import type { HttpContext } from '@adonisjs/core/http'

export default class HomePagesController {
  index({ inertia }: HttpContext) {
    return inertia.render('home')
  }
}
