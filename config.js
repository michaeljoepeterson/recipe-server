exports.DATABASE_URL = process.env.DATABASE_URL;
exports.test_db = process.env.test_db;
exports.PORT = process.env.PORT || 8080;
exports.JWT_SECRET = process.env.JWT_SECRET;
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '15m';
exports.AK = process.env.AK;
exports.ADMIN_EMAILS = process.env.ADMIN_EMAILS;
exports.ADMIN_LOC = process.env.ADMIN_LOC;