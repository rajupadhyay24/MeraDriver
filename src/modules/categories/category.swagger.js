/**
 * @swagger
 * /api/categories/create:
 *   post:
 *     summary: Create Category
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - category_name
 *               - category_slug
 *             properties:
 *               category_name:
 *                 type: string
 *                 example: "Beauty & Spas"
 *               category_slug:
 *                 type: string
 *                 example: "beauty-and-spas"
 *               category_image:
 *                 type: string
 *                 example: "https://domain.com/image.jpg"
 *               category_description:
 *                 type: string
 *                 example: "Category description"
 *               status:
 *                 type: string
 *                 enum:
 *                   - active
 *                   - inactive
 *                 example: "active"
 *     responses:
 *       201:
 *         description: Category Created Successfully
 *       400:
 *         description: Category Slug Already Exists
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/categories:
 *   get:
 *     summary: Get All Categories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: Categories Retrieved Successfully
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/categories/{id}:
 *   get:
 *     summary: Get Category By Id
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "1"
 *     responses:
 *       200:
 *         description: Category Retrieved Successfully
 *       404:
 *         description: Category Not Found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/categories/{id}:
 *   put:
 *     summary: Update Category
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "1"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               category_name:
 *                 type: string
 *                 example: "Beauty & Wellness"
 *               category_slug:
 *                 type: string
 *                 example: "beauty-wellness"
 *               category_image:
 *                 type: string
 *                 example: "https://domain.com/new-image.jpg"
 *               category_description:
 *                 type: string
 *                 example: "Updated category description"
 *               status:
 *                 type: string
 *                 enum:
 *                   - active
 *                   - inactive
 *                 example: "active"
 *     responses:
 *       200:
 *         description: Category Updated Successfully
 *       404:
 *         description: Category Not Found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/categories/{id}:
 *   delete:
 *     summary: Delete Category
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "1"
 *     responses:
 *       200:
 *         description: Category Deleted Successfully
 *       404:
 *         description: Category Not Found
 *       500:
 *         description: Internal Server Error
 */