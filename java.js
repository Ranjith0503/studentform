
var entry = document.getElementById("entry");
entry.addEventListener("click", function(event){

   var name = document.getElementById("name").value;
   var age = document.getElementById("age").value;
   var gender= document.querySelector('input[name="Gender"]:checked')?.value;
   var course=document.getElementById("course").value;
   var email=document.getElementById("email").value;

   if(!name || !age || !gender || !course || !email){
    alert("Please fill all the details...");
    return;
   }
   var display = document.getElementById("display");
   var newRow = display.insertRow();
     // Insert cells and set their content
     var nameCell = newRow.insertCell(0);
     var ageCell = newRow.insertCell(1);
     var genderCell = newRow.insertCell(2);
     var courseCell = newRow.insertCell(3);
     var emailCell= newRow.insertCell(4);
     
     const actionCell = newRow.insertCell(5); 
     
     nameCell.textContent=name;
     ageCell.textContent=age;
     genderCell.textContent=gender;
     courseCell.textContent=course;
     emailCell.textContent = email;
   
     actionCell.innerHTML = '<button onclick="deleteItem(event)">Delete</button>';  
     
  

     document.getElementById("name").value = "";
     document.getElementById("age").value = "";
     document.getElementById("course").value = "";
     document.getElementById("email").value = "";
     document.getElementById("male").checked = false;
     document.getElementById("female").checked = false;
 
});
function deleteItem(event) {
    var button = event.target; // Get the clicked button
    var row = button.closest("tr"); // Find the closest row
    if (row) {
        row.remove(); // Remove the row
    }
}