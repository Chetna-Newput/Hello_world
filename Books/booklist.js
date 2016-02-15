 function change(str) {
   var txt,jsonOb,arr=[],i,cell="",cells=["","","",""],rem;
   var xhttp=new XMLHttpRequest();
   xhttp.onreadystatechange= function() {
     if(xhttp.readyState==4 && xhttp.status==200) 
     { 
       txt=xhttp.responseText;
       jsonOb=JSON.parse(txt);
       if(jsonOb.hasOwnProperty('Books')) 
       { 
         for(i=0;i<jsonOb.Books.length;i++)
           {  cell="<div class=\"grid\">" + 
                     "<image src=\""+jsonOb.Books[i].Image+"\"id=\"imgId\" class=\"img-responsive img-thumbnail\">" + 
                     "<p>ISBN :"+jsonOb.Books[i].isbn+"</p>" + 
                     "<p>Book Title :"+jsonOb.Books[i].Title+"</p>" + 
                     "<p>"+jsonOb.Books[i].Description+"</p>" + 
                     "</div>";
               rem=i%4;
               cells[rem]=cells[rem].concat(cell);
            }
         }
        }
        for(i=0;i<4;i++)
          document.getElementById("cn"+i).innerHTML=cells[i];
       };
        str="http://it-ebooks-api.info/v1/search/".concat(str);
        xhttp.open("GET",str,true);
        xhttp.send();
}