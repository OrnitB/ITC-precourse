{
  var pages=new Array();

pages[0]="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53956.24593695246!2d34.89540750328854!3d32.30472361584737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d400493c075d5%3A0x2cd995be543c3f22!2z16DXqteg15nXlA!5e0!3m2!1siw!2sil!4v1632416988077!5m2!1siw!2sil";
pages[1]="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109740.86108756711!2d76.83356984954175!3d30.735210199971153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2z16Yn15DXoNeT15nXkteQ16gsINeU15XXk9eV!5e0!3m2!1siw!2sil!4v1632315296987!5m2!1siw!2sil";
pages[2]="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54050.58097553619!2d34.926565504322596!3d32.14594517863806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d382788e4b667%3A0x1f05cddaa82b24a5!2z15TXldeTINeU16nXqNeV158!5e0!3m2!1siw!2sil!4v1632417079406!5m2!1siw!2sil";
pages[3]="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54024.6662243339!2d34.898324454038516!3d32.18963277510393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d3872f83085e1%3A0x114f1d00a75dbad1!2z16jXoteg16DXlA!5e0!3m2!1siw!2sil!4v1632417144812!5m2!1siw!2sil";
pages[4]="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823274!2d73.0212723429034!3d19.082197839582214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2z157Xldee15HXkNeZLCDXnteU16jXqdeY16jXlCwg15TXldeT15U!5e0!3m2!1siw!2sil!4v1632417188781!5m2!1siw!2sil";

let i=0;
let end=pages.length-1;
document.getElementById("prev").style.visibility ="hidden";
function changeSrc(operation) {
  if ((i==0) || (document.getElementById("map").src=="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53956.24593695246!2d34.89540750328854!3d32.30472361584737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d400493c075d5%3A0x2cd995be543c3f22!2z16DXqteg15nXlA!5e0!3m2!1siw!2sil!4v1632416988077!5m2!1siw!2sil")) {
    document.getElementById("next").style.visibility ="visible";
    document.getElementById("prev").style.visibility ="hidden";
    if (operation===next) {
      i++;
      document.getElementById("map").src=pages[i];
      document.getElementById("prev").style.visibility ="visible";
    }
  }
  else if (i==end)  {
    document.getElementById("next").style.visibility ="hidden"; 
    document.getElementById("prev").style.visibility ="visible";
    if (operation===prev) {
      i--;
      document.getElementById("map").src=pages[i];
      document.getElementById("next").style.visibility ="visible";
    }
  }
  else if (operation===next)  {
    i++;
    document.getElementById("map").src=pages[i];
    if (i==end)  {
      document.getElementById("next").style.visibility ="hidden"; 
      document.getElementById("prev").style.visibility ="visible";
    }
  }
  else if (operation===prev)  {
    i--;
    document.getElementById("map").src=pages[i];
    if ((i==0) || (document.getElementById("map").src=="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53956.24593695246!2d34.89540750328854!3d32.30472361584737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d400493c075d5%3A0x2cd995be543c3f22!2z16DXqteg15nXlA!5e0!3m2!1siw!2sil!4v1632416988077!5m2!1siw!2sil")) {
      document.getElementById("next").style.visibility ="visible";
      document.getElementById("prev").style.visibility ="hidden";  
    }
  }
}
}

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