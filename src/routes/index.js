const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const router = express.Router();


//AUTHENTICATION

const {
    register,
    login,
    logout,
    sendOtp,
    verifyOtp,
    profile,
} = require("../modules/auth/authController");

const authMiddleware = require("../middleware/authMiddleware");
const { sendMobileOtp, verifyMobileOtp } = require("../modules/auth/otpController");

//CATEGORY CONTROLLER FUNCTION 

const {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory,
} = require("../modules/categories/categoryController");


//SUBCATEGORY CONTROLLER FUNCTION 

const {
    createSubCategory,
    getAllSubCategories,
    getSubCategoryById,
    updateSubCategory,
    deleteSubCategory,
} = require("../modules/sub_categories/subCategoryController")

//PRODUCT DETAILS CONTROLLER FUNCTION 

const {
    createProductDetail,
    getAllProductDetails,
    getProductDetailById,
    updateProductDetail,
    deleteProductDetail,
} = require("../modules/product_details/productDetailController");

//PRODUCT CARD CONTROLLER FUNCTION 

const {
    createProductCard,
    getAllProductCards,
    getProductCardById,
    updateProductCard,
    deleteProductCard,
} = require("../modules/products_card/productCardController");



/*ROUTES ------------------------------------------------------------*/

//AUTHENTICATION ROUTES

router.post("/api/auth/register", register);
router.post("/api/auth/login", login);
router.post("/logout", logout);
router.post("/api/auth/send-mail-otp", sendOtp);
router.post("/api/auth/verify-mail-otp", verifyOtp);
router.get("/api/auth/profile", authMiddleware, profile);

router.get(
    "/api/auth/google",
    passport.authenticate("google", {
        scope: ["profile", "email"],
    }),
);

router.get(
    "/api/auth/google/callback",
    passport.authenticate("google", {
        session: false,
        failureRedirect: "/login",
    }),
    async (req, res) => {
        const token = jwt.sign(
            {
                id: req.user.id,
                email: req.user.email,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d",
            },
        );

        res.status(200).json({
            message: "Google login successful",
            token,
            user: req.user,
        });
    },
);


router.post("/api/mobile-otp/send", sendMobileOtp);
router.post("/api/mobile-otp/verify", verifyMobileOtp);



//CATEGORY ROUTES

router.post("/api/categories/create", createCategory);

router.get("/api/categories", getAllCategories);

router.get("/api/categories/:id", getCategoryById);

router.put("/api/categories/:id", updateCategory);

router.delete("/api/categories/:id", deleteCategory);


//SUBCATEGORY ROUTES

router.post("/api/sub-categories", createSubCategory);

router.get("/api/sub-categories", getAllSubCategories);

router.get("/api/sub-categories/:id", getSubCategoryById );

router.put("/api/sub-categories/:id", updateSubCategory);

router.delete("/api/sub-categories/:id", deleteSubCategory);


//PRODUCT CARD 

router.post("/api/product-cards/create", createProductCard);

router.get("/api/product-cards", getAllProductCards);

router.get("/api/product-cards/:id", getProductCardById);

router.put("/api/product-cards/:id", updateProductCard);

router.delete("/api/product-cards/:id", deleteProductCard);


//PRODUCT DETAILS

router.post("/api/product-details/create", createProductDetail);

router.get("/api/product-details", getAllProductDetails);

router.get("/api/product-details/:id", getProductDetailById);

router.put("/api/product-details/:id", updateProductDetail);

router.delete("/api/product-details/:id", deleteProductDetail);




module.exports = router;