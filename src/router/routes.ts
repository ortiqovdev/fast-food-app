import { Router, request } from "express";
import {
   active,
   getIndex,
   admin,
   update,
   allUsers,
} from "../controller/controller";
import { postKirish ,getLogin } from "../controller/auth-controllers";
import { createValidator } from "express-joi-validation";
import { authJoi } from "../validations/validation";
import { product } from "../controller/product-controller";

const router = Router();
const validator = createValidator()

router.get('/', getIndex) // Index get
router.get('/kirish', getLogin) // kirish 
router.get('/admin', admin)
router.get('/active', active)
router.get('/update', update)
router.get('/all-users', allUsers)
router.get('/productUp', product)

// Posts
router.post('/kirish', validator.body(authJoi) , postKirish)

export default router;