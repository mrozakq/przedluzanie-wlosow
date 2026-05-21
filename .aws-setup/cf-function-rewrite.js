function handler(event) {
    var request = event.request;
    var host = (request.headers.host && request.headers.host.value) || '';

    // 301 redirect: www.magda.style -> magda.style (apex)
    if (host.toLowerCase().indexOf('www.') === 0) {
        var apexHost = host.substring(4);
        var qs = '';
        if (request.querystring) {
            var parts = [];
            for (var k in request.querystring) {
                parts.push(k + '=' + request.querystring[k].value);
            }
            if (parts.length) qs = '?' + parts.join('&');
        }
        return {
            statusCode: 301,
            statusDescription: 'Moved Permanently',
            headers: {
                'location': { value: 'https://' + apexHost + request.uri + qs }
            }
        };
    }

    // SSG rewrites: trailing slash and bare paths -> index.html
    var uri = request.uri;
    if (uri.endsWith('/')) {
        request.uri = uri + 'index.html';
        return request;
    }
    var lastSegment = uri.substring(uri.lastIndexOf('/') + 1);
    if (lastSegment.indexOf('.') === -1) {
        request.uri = uri + '/index.html';
    }
    return request;
}
