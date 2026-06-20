/**
 * @swagger
 * /api/product-details/create:
 *   post:
 *     summary: Create Product Detail
 *     tags: [Product Details]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - product_card_id
 *             properties:
 *               product_card_id:
 *                 type: string
 *                 example: "1"
 *               about_business:
 *                 type: string
 *                 example: Luxury Thai Spa with certified therapists.
 *               offer_description:
 *                 type: string
 *                 example: Enjoy a 60-minute relaxing massage session.
 *               what_we_offer:
 *                 type: string
 *                 example: Body massage, steam bath, refreshments.
 *               benefits:
 *                 type: string
 *                 example: Stress relief, better blood circulation.
 *               why_choose_offer:
 *                 type: string
 *                 example: Top-rated spa in the city.
 *               need_to_know:
 *                 type: string
 *                 example: Appointment required before visit.
 *               redemption_address:
 *                 type: string
 *                 example: Sector 18, Noida, Uttar Pradesh.
 *               latitude:
 *                 type: number
 *                 example: 28.570633
 *               longitude:
 *                 type: number
 *                 example: 77.327215
 *               opening_hours:
 *                 type: string
 *                 example: 10:00 AM - 09:00 PM
 *               customer_photos:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example:
 *                   - https://domain.com/photo1.jpg
 *                   - https://domain.com/photo2.jpg
 *               customer_videos:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example:
 *                   - https://domain.com/video1.mp4
 *               average_rating:
 *                 type: number
 *                 example: 4.8
 *               total_reviews:
 *                 type: integer
 *                 example: 250
 *               faq:
 *                 type: array
 *                 items:
 *                   type: object
 *                 example:
 *                   - question: Is prior booking required?
 *                     answer: Yes
 *                   - question: Is parking available?
 *                     answer: Yes
 *     responses:
 *       201:
 *         description: Product Detail Created Successfully
 *       400:
 *         description: Product Detail Already Exists
 *       404:
 *         description: Product Card Not Found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/product-details:
 *   get:
 *     tags:
 *       - Product Details
 *     summary: Get All Product Details
 *     responses:
 *       200:
 *         description: Product Details fetched successfully
 */

/**
 * @swagger
 * /api/product-details/{id}:
 *   get:
 *     tags:
 *       - Product Details
 *     summary: Get Product Detail By Id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 1
 *     responses:
 *       200:
 *         description: Product Detail fetched successfully
 *       404:
 *         description: Product Detail not found
 */

/**
 * @swagger
 * /api/product-details/{id}:
 *   put:
 *     tags:
 *       - Product Details
 *     summary: Update Product Detail
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Product Detail Updated Successfully
 *       404:
 *         description: Product Detail Not Found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/product-details/{id}:
 *   delete:
 *     tags:
 *       - Product Details
 *     summary: Delete Product Detail
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 1
 *     responses:
 *       200:
 *         description: Product Detail Deleted Successfully
 *       404:
 *         description: Product Detail Not Found
 *       500:
 *         description: Internal Server Error
 */