
//how to create element in html  through java script using create element  
let heading1=document.createElement('h1');
console.log(heading1);
let heading2=document.createElement('h3')
console.log(heading2);
//getelementbyid to catch the div whith root as id
let root=document.getElementById('root')
console.log(root);
//to append and prepend h1 tag created by java script in div html
// root.appendChild(heading2)
root.append(heading1); //==>to create the tag/element after existing tag in html
root.prepend(heading2)   //==>to create teh tag before the existing tag/element in html 

//innertext to write text in the newly created tag
heading1.innerText="hello world thid is dikshit negta  append";
heading2.innerText="hello thid is prepend"
//innerhtml tag to create element 
// heading1.innerHTML="<span>Hello span</span>"

///to add style to the elements
heading2.style.color='red';
heading1.style.backgroundColor="black"
heading2.style.backgroundColor="yellow"
heading1.style.color="blue"


