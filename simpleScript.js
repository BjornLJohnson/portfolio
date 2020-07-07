apiURL = "https://2vw37146i3.execute-api.us-west-2.amazonaws.com/test"

dummyPostContent = {
    "name": "test",
    "type": "supplier",
    "key2": "more info",
    "key3": "even more information"
}


$(document).ready(function () {
    $("#getButton").click(sendGetRequest);

    function sendGetRequest(){
        $.ajax({
            type: 'GET',
            url: apiURL,
            success: completeGetRequest,
            error: function ajaxError(jqXHR, textStatus, errorThrown) {
                console.error('Error executing lambda function: ', textStatus, ', Details: ', errorThrown);
                console.error('Response: ', jqXHR.responseText);
                alert('An error occured when processing your request :\n' + jqXHR.responseText);
            }
        });
    };
    
    function completeGetRequest(result) {
        console.log('Response received from API: ', result);
        $(getResponse).text(result);
    }

    $("#postButton").click(sendPostRequest);

    function sendPostRequest(){
        $.ajax({
            type: 'POST',
            url: apiURL,
            data: JSON.stringify(dummyPostContent),
            success: completePostRequest
//             error: function ajaxError(jqXHR, textStatus, errorThrown) {
//                 console.error('Error executing lambda function: ', textStatus, ', Details: ', errorThrown);
//                 console.error('Response: ', jqXHR.responseText);
//                 alert('An error occured when processing your request :\n' + jqXHR.responseText);
//             }
        });
    };
    
    function completePostRequest(result) {
        console.log('Response received from API: ', result);
        $(postResponse).text(result);
    }
}); 

