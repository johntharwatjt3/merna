
function myFunction() {
	const btnText = document.getElementById('btn')
  // Get the text field
  var copyText = document.getElementById("myInput");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
 btnText.innerText = "Copied Text"
  

}






const txtArea = document.querySelector(".text-area");
const dropBtn = document.querySelector(".dropbtn");
const note = document.querySelector(".note");
const topUp = document.querySelector(".top-up");
const bundle = document.querySelector(".bundle");
const missingPayment = document.querySelector(".missing-payment");

const paymentPending = document.querySelector(".payment-pending");
const portIn = document.querySelector(".port-in");
const preloaded = document.querySelector(".preloaded");
const prepaid = document.querySelector(".prepaid");
const internetIssue = document.querySelector(".internet-issue");
const simSwap = document.querySelector(".sim-swap");
const agentAccess = document.querySelector(".agent-access");
const tmAccess = document.querySelector(".tm-access");



note.addEventListener("click", function() {
dropBtn.innerHTML="Note"
txtArea.innerHTML = `\\*.*/ Who was the caller? How did they pass DPA?  

\\*.*/ What is the customer’s issue? 

\\*.*/ Actions taken by you and info given to the customer.

\\*.*/ Called from the same number: yes 

\\*.*/ Outcome of the call agreed with the customer: agreed

\\*.*/ Did the customer request to speak to someone else? NO

\\*.*/ Did you transfer the call? NO`
});




topUp.addEventListener("click", function() {
dropBtn.innerHTML="Top up Only"
txtArea.innerHTML = `\\*.*/ Who was the caller? How did they pass DPA? Account holder OTAC 

\\*.*/ What is the customer’s issue?
top up with --  -- pounds
register a card 

\\*.*/ Actions taken by you and info given to the customer. 
topped up with --  -- pounds 
registered the card for the cst

\\*.*/ Called from the same number: yes

\\*.*/ Outcome of the call agreed with the customer: agreed

\\*.*/ Did the customer request to speak to someone else? NO

\\*.*/ Did you transfer the call? NO`
});




bundle.addEventListener("click", function() {
dropBtn.innerHTML="Bundle"

txtArea.innerHTML = `\\*.*/ Who was the caller? How did they pass DPA? Account holder OTAC 


\\*.*/ What is the customer’s issue? want to add the --  -- pounds bundle and top up with --   -- pounds 

\\*.*/ Actions taken by you and info given to the customer. added --   -- pounds for the cst with the  
register card and added the --   -- pound bundle as requested  

\\*.*/ Called from the same number: yes 

\\*.*/ Outcome of the call agreed with the customer: agreed 

\\*.*/ Did the customer request to speak to someone else? NO `
});


missingPayment.addEventListener("click", function() {
dropBtn.innerHTML="Missing Payment"

txtArea.innerHTML = `\\*.*/ Who was the caller? How did they pass DPA?  Account holder OTAC 

\\*.*/ What is the customer’s issue? Missing payment 

\\*.*/ Actions taken by you and info given to the customer.

 -Raised to TM omnia abdelfattah to be able to check the missing payment 
 - we found the payment of " " with transaction id: " "
 - advised him that the bundle will be added SLA" "


\\*.*/ Called from the same number: yes 

\\*.*/ Outcome of the call agreed with the customer: agreed

\\*.*/ Did the customer request to speak to someone else? NO

\\*.*/ Did you transfer the call? NO
 `
});



paymentPending.addEventListener("click", function() {
dropBtn.innerHTML="Payment Pending"

txtArea.innerHTML = `\\*.*/ Who was the caller? How did they pass DPA?  Account holder OTAC 

\\*.*/ What is the customer’s issue? payment pending issue 

\\*.*/ Actions taken by you and info given to the customer.
registered new card 
Billing address:
added -- -- pounds
added spend limit 0:00
advised the customer that the bundle will be added by 10:00 AM

\\*.*/ Called from the same number: yes

\\*.*/ Outcome of the call agreed with the customer: agreed

\\*.*/ Did the customer request to speak to someone else? NO

\\*.*/ Did you transfer the call? NO `
});



portIn.addEventListener("click", function() {
dropBtn.innerHTML="Port In"

txtArea.innerHTML = `\\*.*/ Who was the caller? How did they pass DPA?  Account holder OTAC 

\\*.*/ What is the customer’s issue?  Port in
Pac:
old number:

\\*.*/ Actions taken by you and info given to the customer.
ported in for the customer as requested 

\\*.*/ Called from the same number: yes

\\*.*/ Outcome of the call agreed with the customer: agreed

\\*.*/ Did the customer request to speak to someone else? NO

\\*.*/ Did you transfer the call? NO`
});


preloaded.addEventListener("click", function() {
dropBtn.innerHTML="Preloaded"

txtArea.innerHTML = `\\*.*/ Who was the caller? How did they pass DPA? Account holder OTAC 

\\*.*/ What is the customer’s issue? customer want to activate preloaded bundle 

\\*.*/ Actions taken by you and info given to the customer.
guided the customer through the process to activate the preloaded bundle
raised the incorrect account to TM omnia abdelfattah to delete it 
promised the customer with a call back to make sure that everything is sorted for him

\\*.*/ Called from the same number: yes 

\\*.*/ Outcome of the call agreed with the customer: agreed

\\*.*/ Did the customer request to speak to someone else? NO

\*.*/ Did you transfer the call? NO`
});


prepaid.addEventListener("click", function() {
dropBtn.innerHTML="Prepaid"

txtArea.innerHTML = `\\*.*/ Who was the caller? How did they pass DPA?  Account holder OTAC 

\\*.*/ What is the customer’s issue? customer cant activate prepaid sim card 

\\*.*/ Actions taken by you and info given to the customer.

advised the customer to send us POP to our email address
and promised the customer with a call back again to take the reference number


called the customer back 
raised to TM omnial abdelfattah to be able to activate -- -- Bundle 
Ref: 

\\*.*/ Called from the same number: yes 

\\*.*/ Outcome of the call agreed with the customer: agreed

\\*.*/ Did the customer request to speak to someone else? NO

\\*.*/ Did you transfer the call? NO`
});

internetIssue.addEventListener("click", function() {
dropBtn.innerHTML="Internet Issue"

txtArea.innerHTML = `\\*.*/ Who was the caller? How did they pass DPA?  Account holder OTAC 

\\*.*/ What is the customer’s issue? internet not working abroad 

\\*.*/ Actions taken by you and info given to the customer.
guided the customer through the apn settings 
advised the customer to restart the phone 
promised a call back again to make sure that the internet is working 

\\*.*/ Called from the same number: yes 

\\*.*/ Outcome of the call agreed with the customer: agreed

\\*.*/ Did the customer request to speak to someone else? NO

\\*.*/ Did you transfer the call? NO`
});




simSwap.addEventListener("click", function() {
dropBtn.innerHTML="Sim Swap"

txtArea.innerHTML = `- Who is the caller: Account holder OTAC
- passed DPA via:OTAC 
- What is the customer's issue:
- Cst wanted to keep his old number()on his new sim card ()
- Actions taken by me: raised a sim swap request ON share point with details below

DPA Passed on Both Numbers : Yes
Reason For Sim Swap : 
Number wants to keep : 
ICCD for number wants to keep : 
Temp number : 
ICCID for temp Number :

- Outcome of the call? agreed
- Did the customer request to speak to someone else? no
- Did you transfer the call? no`
});








agentAccess.addEventListener("click", function() {
dropBtn.innerHTML="Agent Access"

txtArea.innerHTML = `*** Agent Access *** 

**Why Have You accessed the account :
View access only
**What actions have you taken in the account :N/A
**What customer contact has taken place : N/A
**What are the next actions if any: N/A.`
});


tmAccess.addEventListener("click", function() {
dropBtn.innerHTML="TM Access"

txtArea.innerHTML = `*** TM Access *** 

**Why Have You accessed the account :
View access only
**What actions have you taken in the account :N/A
**What customer contact has taken place : N/A
**What are the next actions if any: N/A.`
});



const result = document.querySelector(".resultt");