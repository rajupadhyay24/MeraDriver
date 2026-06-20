/**
 * @swagger
 * tags:
 *   - name: Authentication
 *     description: User Authentication APIs
 *
 *   - name: Email OTP
 *     description: Email Verification APIs
 *
 *   - name: Google OAuth
 *     description: Google Authentication APIs
 */

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register New User
 *     description: Creates a new user account and stores a hashed password.
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *               - mobile
 *             properties:
 *               name:
 *                 type: string
 *                 example: Raj Upadhyay
 *               email:
 *                 type: string
 *                 example: raj@gmail.com
 *               password:
 *                 type: string
 *                 example: raj123
 *               mobile:
 *                 type: string
 *                 example: "9876543210"
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: User already exists
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login User
 *     description: Authenticates user and returns JWT token.
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: raj@gmail.com
 *               password:
 *                 type: string
 *                 example: raj123
 *     responses:
 *       200:
 *         description: Login successful
 *       400:
 *         description: Invalid credentials
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/auth/send-mail-otp:
 *   post:
 *     summary: Send Email OTP
 *     description: Sends OTP to registered email address.
 *     tags:
 *       - Email OTP
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *                 example: raj@gmail.com
 *     responses:
 *       200:
 *         description: OTP sent successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/auth/verify-mail-otp:
 *   post:
 *     summary: Verify Email OTP
 *     description: Verifies OTP and marks email as verified.
 *     tags:
 *       - Email OTP
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - otp
 *             properties:
 *               email:
 *                 type: string
 *                 example: raj@gmail.com
 *               otp:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: Email verified successfully
 *       400:
 *         description: Invalid OTP
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/auth/profile:
 *   get:
 *     summary: Get User Profile
 *     description: Returns logged-in user's profile.
 *     tags:
 *       - Authentication
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Profile fetched successfully
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/auth/google:
 *   get:
 *     summary: Login with Google
 *     description: Redirects user to Google OAuth login page.
 *     tags:
 *       - Google OAuth
 *     responses:
 *       302:
 *         description: Redirect to Google Login
 */

/**
 * @swagger
 * /api/auth/google/callback:
 *   get:
 *     summary: Google OAuth Callback
 *     description: Google returns authenticated user information and JWT token.
 *     tags:
 *       - Google OAuth
 *     responses:
 *       200:
 *         description: Google login successful
 */