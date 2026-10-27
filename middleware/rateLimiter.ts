import rateLimit from "express-rate-limit";

export const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 5,
});

export const otpLimiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    limit: 3,
});

export const otpVerificationLimiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    limit: 3,
});

export const registrationLimiter = rateLimit({
    windowMs: 60 * 60 * 1000,
    limit: 5,
});

export const passwordResetLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 3,
});
