import router from '@adonisjs/core/services/router'
const HomePagesController = () => import('#controllers/home_pages_controller')

router.get('/', [HomePagesController, 'index'])
