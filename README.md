First create a form in html containing various field like name, email, pan, loan amount.
Add style to input components also make two class for sucess and error for showing data validate and error message.
Create a javascript file which take all form data using queryselector.
Add a event listener to form which take submit event and formValidation function.
formValidation function take input from all field and check it is valid or not. If valid it sets sucess class to that input field otherwise set error class and error message shown below that field.
In formValidation function another one function in if else condition, which check any class has error class if have any one it returns false and prevent subimittion of form otherwise form submitted.
In form we have given action refrance to another html file confirm.js hence as form is submitted it opens new html page.
In new html page we have acess of session storage through which we take form value name and email id and show on page with meassage.
The EstimatedEmi function is used for calculating EMI of give amount of loan,  it shows EMI amount.
