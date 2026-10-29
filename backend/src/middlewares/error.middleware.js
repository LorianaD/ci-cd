function errorMiddleware(err, req, res, next) {
    const status = err.status || 500;

    if (status >= 500) {
        console.error(err);
    }

    return res.status(status).json({
        success: false,
        error: status >= 500
            ? "Internal server error"
            : err.message
    });
}

export default errorMiddleware;