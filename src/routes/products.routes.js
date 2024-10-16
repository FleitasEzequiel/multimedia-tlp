import { Router } from "express";
import { uploadImage } from "../middlewares/upload.multer.middleware.js";
import { uploadCloudinary } from "../middlewares/upload.cloudinary.middleware.js";
import ctrl from "../../controllers/controllers.js";
const productsRouter = Router();

//para un solo archivo con single(), y para muchos array()

productsRouter.post("/multer", uploadImage, ctrl.multer);

productsRouter.post(
  "/cloudinary",
  uploadCloudinary.single("image"),
  ctrl.cloudinary
);

export { productsRouter };
