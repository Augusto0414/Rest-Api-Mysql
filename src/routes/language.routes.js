import {Router} from "express";
import { method as language } from "../controller/language.controller";


const router = Router();

router.get('/',language.getLanguage);

export default router;