import express from 'express'
const router = express.Router()
import {addOrderItem} from "../controllers/orderController.js";
import {protect} from "../middlewares/authMiddleware.js";


router.route('/').post(protect, addOrderItem)


export default router