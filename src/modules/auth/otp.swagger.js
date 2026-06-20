/**
 * @swagger
 * tags:
 *   - name: Mobile OTP
 *     description: Mobile OTP Verification APIs
 */

/**
 * @swagger
 * /api/mobile-otp/send:
 *   post:
 *     summary: Send Mobile OTP
 *     description: Generates and sends OTP to user's mobile number.
 *     tags:
 *       - Mobile OTP
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - mobile
 *             properties:
 *               mobile:
 *                 type: string
 *                 example: "9876543210"
 *     responses:
 *       200:
 *         description: OTP sent successfully
 *       400:
 *         description: Mobile number required
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/mobile-otp/verify:
 *   post:
 *     summary: Verify Mobile OTP
 *     description: Verifies OTP entered by user.
 *     tags:
 *       - Mobile OTP
 *     requestBody:
 *       required:
 *         true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - mobile
 *               - otp
 *             properties:
 *               mobile:
 *                 type: string
 *                 example: "9876543210"
 *               otp:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: OTP verified successfully
 *       400:
 *         description: Invalid OTP
 *       500:
 *         description: Internal server error
 */