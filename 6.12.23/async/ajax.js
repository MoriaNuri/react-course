const httpRequest = new XMLHttpRequest();
    console.log('Http request is:',httpRequest);
    httpRequest.onreadystatechange = function() {
        // console.log('Ready state is:',httpRequest.readyState);
        if(httpRequest.readyState===XMLHttpRequest.DONE && httpRequest.status===200){
            // console.log('Response is:',httpRequest.responseText);
            const ans =JSON.parse(httpRequest.responseText)
            document.querySelector('.ans h2').innerText=ans.answer
            document.querySelector('.ans img').src=ans.image

        }
    }
    httpRequest.open("GET", "https://yesno.wtf/api", true);
    httpRequest.send();