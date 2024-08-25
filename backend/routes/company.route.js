import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import {
  getCompaniesById,
  getCompany,
  registerCompany,
  updateCompany,
} from "../controller/company.controller.js";

const router = express.Router();
router.route("/register").post(isAuthenticated, registerCompany);
router.route("/get").get(isAuthenticated, getCompany);
router.route("/get/:id").get(isAuthenticated, getCompaniesById);
router.route("/update/:id").put(isAuthenticated, updateCompany);

export default router;
