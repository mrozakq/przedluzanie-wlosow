function handler(event) {
    var request = event.request;
    var uri = request.uri;

    // /v1/  -> /v1/index.html
    if (uri.endsWith('/')) {
        request.uri = uri + 'index.html';
        return request;
    }

    // /v1 -> /v1/index.html  (path without extension, no trailing slash)
    var lastSegment = uri.substring(uri.lastIndexOf('/') + 1);
    if (lastSegment.indexOf('.') === -1) {
        request.uri = uri + '/index.html';
    }

    return request;
}
