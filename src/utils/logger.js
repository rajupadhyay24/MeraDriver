const winston = require("winston");

const transports = [
    new winston.transports.Console({
        format: winston.format.simple(),
    }),
];

// Only write to files in non-production environments
if (process.env.NODE_ENV !== "production") {
    transports.push(
        new winston.transports.File({
            filename: "logs/app.log",
            level: "error",
        })
    );

    transports.push(
        new winston.transports.File({
            filename: "logs/combined.log",
        })
    );
}

const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports,
});

module.exports = logger;
