import express from "express";
import * as ctl from '../controller/user.controller.js'

export const router = express.Router();

router.post('/create-user', ctl.createUser);

