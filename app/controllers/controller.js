exports.ping = (req, res) => {
    res.status(200).json({ 'response': 'ping' });
}

exports.get = (req, res) => {
    try {
        res.status(200).json({ 'message': 'get' });
    } catch (e) {
        res.status(500).json({ 'error': e.message });
    }
}

exports.post = (req, res) => {
    try {
        res.status(200).json({ 'message': 'post' });
    } catch (e) {
        res.status(500).json({ 'error': e.message });
    }
}

exports.put = (req, res) => {
    try {
        res.status(200).json({ 'message': 'put' });
    } catch (e) {
        res.status(500).json({ 'error': e.message });
    }
}