// *** Activity 1: Basic Event Handling ***
// Task 1: Add a click event listener to a button that changes the text content of a paragraph.
const para= document.getElementById('para');

function paragraph()
{
   para.innerHTML='text Context applied successfully';
}
document.addEventListener('click',paragraph);


// Task 2: Add a double-click event listener to an image that toggles its visibility.

document.getElementById('toggleImage').addEventListener('dblclick', function() {
    if(toggleImage.style.display === 'none')
    toggleImage.style.display='block'
    else
    toggleImage.style.display='none';
});

// *** Activity 2: Mouse Events ***
// Task 3: Add a mouseover event listener to an element that changes its background color.
   const button=document.getElementById('button');
   button.addEventListener('mouseover',()=>
   {
    button.style.backgroundColor="green";
   })

// Task 4: Add a mouseout event listener to an element that resets its background color.

  button.addEventListener('mouseout',()=>
   {
   button.style.backgroundColor="red";
   })

// *** Activity 3: Keyboard Events ***
// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
   const input=document.getElementById('input');
   const div_in=document.getElementById("div_in");
   input.addEventListener('keydown',function (event){
      console.log("key pressed :",event.input);
   });

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.   
   
   input.addEventListener('keyup',function(event){
        div_in.innerText=input.value;
   })
   
// *** Activity 4: Form Events ***
// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
   
document.addEventListener('DOMContentLoaded',(event)=>{
   const form = document.getElementById('my_form');

   form.addEventListener('submit',function(event){
      event.preventDefault(); // Prevent the default form submission

      const formData = new FormData(form); // Create a FormData object from the form
      
      let name=formData.get('name');
      let add=formData.get('address');


      console.log(`name:${name} - address:${add}`); // Log the form data as an object
   })
});
// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
document.addEventListener('DOMContentLoaded',(event)=>{
let change_event_container = document.getElementById("change_event_container");
let select_container = document.getElementById("select");
let p2 = document.createElement("p");
select_container.addEventListener("change",(e) => {
		if (e.target.value == "default") return;
		p2.textContent += e.target.value;
		change_event_container.appendChild(p2);
	},
	false,
);
});
// *** Activity 5: Event Delegation ***
// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
   
document.addEventListener('DOMContentLoaded',(event)=>{
      let list = document.getElementById("list");
      list.addEventListener("click",(e) => {
		if (e.target && e.target.nodeName === "LI")
			console.log(e.target.textContent);
		// else console.log(e.target);
	  },false,
     );
   });

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.

document.addEventListener('DOMContentLoaded',(event)=>{
let add_btn = document.getElementById("add_btn");
add_btn.addEventListener("click",() => {
		let new_li = document.createElement("li");
		new_li.textContent = `Item ${list.children.length + 1}`;
		list.appendChild(new_li);
	},
	false,
);
});
