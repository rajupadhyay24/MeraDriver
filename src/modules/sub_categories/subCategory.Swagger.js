/**
 * @swagger
 * /api/sub-categories:
 *   post:
 *     summary: Create Sub Category
 *     tags: [Sub Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - category_id
 *               - sub_category_name
 *             properties:
 *               category_id:
 *                 type: string
 *                 example: "1"
 *               sub_category_name:
 *                 type: string
 *                 example: "Massage"
 *               icon:
 *                 type: string
 *                 example: "https://domain.com/massage.png"
 *               description:
 *                 type: string
 *                 example: "Relaxing massage services"
 *               status:
 *                 type: string
 *                 enum:
 *                   - active
 *                   - inactive
 *                 example: "active"
 *     responses:
 *       201:
 *         description: Sub Category Created Successfully
 *       404:
 *         description: Category Not Found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/sub-categories:
 *   get:
 *     summary: Get All Sub Categories
 *     tags: [Sub Categories]
 *     responses:
 *       200:
 *         description: List of all sub categories
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/sub-categories/{id}:
 *   get:
 *     summary: Get Sub Category By Id
 *     tags: [Sub Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "1"
 *     responses:
 *       200:
 *         description: Sub Category Found
 *       404:
 *         description: Sub Category Not Found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/sub-categories/{id}:
 *   put:
 *     summary: Update Sub Category
 *     tags: [Sub Categories]
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
 *               category_id:
 *                 type: string
 *                 example: "1"
 *               sub_category_name:
 *                 type: string
 *                 example: "Massage Updated"
 *               icon:
 *                 type: string
 *                 example: "https://domain.com/new-image.png"
 *               description:
 *                 type: string
 *                 example: "Updated description"
 *               status:
 *                 type: string
 *                 enum:
 *                   - active
 *                   - inactive
 *                 example: "active"
 *     responses:
 *       200:
 *         description: Sub Category Updated Successfully
 *       404:
 *         description: Sub Category Not Found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/sub-categories/{id}:
 *   delete:
 *     summary: Delete Sub Category
 *     tags: [Sub Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "1"
 *     responses:
 *       200:
 *         description: Sub Category Deleted Successfully
 *       404:
 *         description: Sub Category Not Found
 *       500:
 *         description: Internal Server Error
 */