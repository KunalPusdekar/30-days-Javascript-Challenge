// DOM Manipulation

// *** Activity 1: Selecting and Manipulating Elements ***

//Task 1: Select an HTML element by its ID and change its text content.

      const heading=document.getElementById('heading');
      heading.textContent ="JAVA SCRIPT";

//Task 2: Select an HTML element by its class and change its background color.
       
     const div=document.getElementsByClassName('div');
     div[0].style.backgroundColor="green";  //getElementsByClassName will still return a collection (HTMLCollection). You can access the first (and only) element in this collection using index 0.
     
// *** Activity 2: Creating and Appending Elements ***
//Task 3: Create a new div element with some text content and append it to the body.
      
   let element =document.createElement('div');
   element.innerHTML="->new element created by DOM";
   element.className="new_div";
   element.style.backgroundColor="purple";
   element.style.color="white";
   element.style.marginTop="10px"
   document.body.appendChild(element);

//Task 4: Create a new li element and add it to an existing ul
    let list=document.createElement('li');
    list.innerHTML="new li created by DOM";
    list.id="list-li";
    const ul=document.getElementsByClassName('ul')[0];
    ul.appendChild(list);


// *** Activity 3: Removing Elements ***

// Task 5: Select an HTML element and remove it from the DOM.
      
    const para = document.getElementsByTagName('p')[0].remove();
    

// Task 6: Remove the last child of a specific HTML element.   
    const ol_list=document.getElementById('ordered_list');
    ol_list.removeChild(ol_list.lastElementChild);
    
// *** Activity 4: Modifying Attributes and Classes ***
   
// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
   
    let image=document.getElementsByClassName('img');
    image[0].setAttribute("src","image2.jpeg");
    image[0].setAttribute("height","100px");
    
// Task 8: Add and remove a CSS class to/from an HTML element.

    let h2=document.getElementsByClassName('heading2');
    h2[0].style.backgroundColor = "brown";
    h2[0].classList.add('color');
    h2[0].classList.remove('color');

//  *** Activity 5: Event Handling ***
// Task 9: Add a click event listener to a button that changes the text content of a paragraph.
    
    const button=document.getElementsByClassName('button');
    function textContent()
    {
     button[0].innerHTML="submit";
    }
    document.addEventListener('click',textContent);
   
// Task 10: Add a mouseover event listener to an element that changes its border color.    

  const button2=document.getElementsByClassName('button2');
   function textContent()
   {
     button2[0].style.border="5px solid green";
   } 
   button2[0].addEventListener('mouseover',textContent);
