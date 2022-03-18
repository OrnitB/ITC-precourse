  
const codingLanguages = ["HTML", "CSS", "JavaScript"];
let len = codingLanguages.length;
let i;
let text = '';
function footer() {
    let footerText = document.getElementById("myFooter");
    let last = " and " + codingLanguages[len-1];
    if (len === 0)  {
        footerText.innerText = "This website has been created without using programming languages."
    }
    if (len === 1)  {
        footerText.innerText = "This website has been created with: " + codingLanguages[0] + ".";
    }
    if (len > 1)    {
        for (i=0; i<len-1; i++) {
            if (i<len-1)    {
                text = text + codingLanguages[i] + ', ';
            }
        }
        footerText.innerText = "This website has been created with: " + text + last + ".";
    }
}
  
footer();