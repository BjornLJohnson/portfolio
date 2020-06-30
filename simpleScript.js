var value = 2000;
authToken = "";
theContent = {
    "key1": "hello",
    "key2": "world",
    "key3": "amazon"
  }


$(document).ready(function () {
    $("#theButton").click(sendRequest);
}); 

function sendRequest(){
    $.ajax({
        method: 'POST',
        url: 'https://nj02nnic77.execute-api.us-west-1.amazonaws.com/prod',
        headers: {
            Authorization: authToken
        },
        data: JSON.stringify(theContent),
        contentType: 'application/json',
        success: completeRequest,
        error: function ajaxError(jqXHR, textStatus, errorThrown) {
            console.error('Error requesting ride: ', textStatus, ', Details: ', errorThrown);
            console.error('Response: ', jqXHR.responseText);
            alert('An error occured when requesting your unicorn:\n' + jqXHR.responseText);
        }
    });
};

function completeRequest(result) {
    console.log('Response received from API: ', result);
}