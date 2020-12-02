(function (global){

    // Set up a namespace for out utility
    var ajaxUtils = {};

    // Returns an HTTP request object
    function getRequestObject () {
        if (window.XMLHttpRequest) {
            return (new XMLHttpRequest());
        }
        else if (window.ActiveXObject) {
            // For very old IE browsers (optional)
            return (new ActiveXObject("Microsoft.XMLHTTP"));
        }
        else {
            global.alert("Ajax is not supported!");
            return (null);
        }
    }

    // Makes an Ajax GET request to 'requestURL'
    ajaxUtils.sendGetRequest = 
        function (requestUrl, responseHandler, isJsonResponse) {
            var request = getRequestObject();
            request.onreadystatechange = 
                function () {
                    handleResponse(request, responseHandler, isJsonResponse);
                };
            request.open("GET", requestUrl, true); // true --> asynchronous
            request.send(null); // for POST only
        };

    // We use handleResponse inside a function because if not, we would have to define
    // request in the global scope, so that handle response has accesed to it. But if
    // we call the sendGetRequest again, the request is not going to change.


    // Only calls user provided 'responseHandler'
    // function if response is ready
    // and not an error
    function handleResponse(request, responseHandler, isJsonResponse) {
        if ((request.readyState == 4) && (request.status == 200)) {
            
            // Default to isJsonResponse = true
            if (isJsonResponse == undefined) {
                isJsonResponse = true;
            }

            if (isJsonResponse) {
                responseHandler(JSON.parse(request.responseText));
            }
            else {
                responseHandler(request.responseText)
            }
        }
    }

    global.$ajaxUtils = ajaxUtils;

})(window);

// Remember to place the script before the script.js.
