const notFoundMiddleware = (req, res) => {
    res.status(404).json({
        error: "Route introuvable"
    });
};

export default notFoundMiddleware;