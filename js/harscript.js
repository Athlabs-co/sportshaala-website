document.addEventListener('DOMContentLoaded', submitToAPI);
var URL = "https://0054wsf56j.execute-api.ap-south-1.amazonaws.com/prod/contact_us";

// {/* <div class="success-message w-form-done">
// <div class="success-message-content">
//   <h3>Thank you!</h3>
//   <div>Your message has been received.</div>
// </div>
// </div>
// <div class="error-state w-form-fail">
// <div>Oops! Something went wrong while submitting the form.</div>
// </div> */}

function submitToAPI(e) {
    e.preventDefault();
    let user_response = document.querySelector('.submit-button.w-button');
    user_response.addEventListener('click', () => {
    var name = $("#name").val();
    var phone = $("#phone-number").val();
    var email = $("#Email").val();
    var message = $("#Message").val();
    var data = {
        name : name,
        phone: phone,
        email : email,
        message : message
        };

    console.log(data);
    $.ajax({
        type: "POST",
        url : "https://0054wsf56j.execute-api.ap-south-1.amazonaws.com/prod/contact_us",
        dataType: "json",
        crossDomain: "true",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data),
    
        
        success: function () {
        // clear form and show a success message
        document.querySelector('.form-block.w-form').innerHTML=`
        <div class="success-message w-form-done">
        <div class="success-message-content">
            <img src="https://cdn-icons-png.flaticon.com/512/4630/4630926.png" style="display:block;margin:auto;width:25%">  
            <h3>Thank you!</h3>
          <div>Your message has been received.</div>
        </div>
        `;
        document.querySelector('.success-message.w-form-done').style.display="block";        
        },
        error: function () {
        // show an error message
        
        document.querySelector('.form-block.w-form').innerHTML=`
        <img src="https://cdn-icons-png.flaticon.com/512/675/675564.png" style="display:block;margin:auto;width:25%">
        <div class="error-state w-form-fail">
        <div>Oops! Something went wrong while submitting the form.</div>
        <div>Please refresh the page and try again or call +91 8097334915.</div>
        </div>
        `;
        document.querySelector('.error-state.w-form-fail').style.display="block";
        console.log('Chala kya?')
        }});
    });
};