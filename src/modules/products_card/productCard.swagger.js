/**
 * @swagger
 * /api/product-cards/create:
 *   post:
 *     summary: Create Product Card
 *     tags: [Product Cards]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - sub_category_id
 *               - business_name
 *               - deal_title
 *             properties:
 *               sub_category_id:
 *                 type: string
 *                 example: "1"
 *               business_name:
 *                 type: string
 *                 example: Royal Thai Spa
 *               deal_title:
 *                 type: string
 *                 example: 60 Minute Full Body Massage
 *               short_description:
 *                 type: string
 *                 example: Relaxing spa therapy session
 *               location_name:
 *                 type: string
 *                 example: Noida
 *               address:
 *                 type: string
 *                 example: Sector 18, Noida, Uttar Pradesh
 *               distance:
 *                 type: number
 *                 example: 2.5
 *               rating:
 *                 type: number
 *                 example: 4.8
 *               review_count:
 *                 type: integer
 *                 example: 250
 *               original_price:
 *                 type: number
 *                 example: 2000
 *               discounted_price:
 *                 type: number
 *                 example: 999
 *               discount_percentage:
 *                 type: integer
 *                 example: 50
 *               primary_image:
 *                 type: string
 *                 example: https://domain.com/spa-image.jpg
 *               offer_tag:
 *                 type: string
 *                 example: Best Seller
 *               deal_status:
 *                 type: string
 *                 enum:
 *                   - active
 *                   - expired
 *               total_bought:
 *                 type: integer
 *                 example: 500
 *               company_website:
 *                 type: string
 *                 example: https://royalthaispa.com
 *     responses:
 *       201:
 *         description: Product Card Created Successfully
 *       400:
 *         description: Validation Error
 *       404:
 *         description: Sub Category Not Found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/product-cards:
 *   get:
 *     tags:
 *       - Product Cards
 *     summary: Get All Product Cards
 *     responses:
 *       200:
 *         description: Product Cards fetched successfully
 */

/**
 * @swagger
 * /api/product-cards/{id}:
 *   get:
 *     tags:
 *       - Product Cards
 *     summary: Get Product Card By Id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 1
 *     responses:
 *       200:
 *         description: Product Card fetched successfully
 *       404:
 *         description: Product Card not found
 */

/**
 * @swagger
 * /api/product-cards/{id}:
 *   put:
 *     tags:
 *       - Product Cards
 *     summary: Update Product Card
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
 *         description: Product Card Updated Successfully
 *       404:
 *         description: Product Card Not Found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/product-cards/{id}:
 *   delete:
 *     tags:
 *       - Product Cards
 *     summary: Delete Product Card
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 1
 *     responses:
 *       200:
 *         description: Product Card Deleted Successfully
 *       404:
 *         description: Product Card Not Found
 *       500:
 *         description: Internal Server Error
 */