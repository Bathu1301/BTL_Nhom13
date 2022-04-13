function openImg(evt, picture) {
    // Declare all variables
    var i, bodytes, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    bodytes = document.getElementsByClassName("body-tes");
    for (i = 0; i < bodytes.length; i++) {
      bodytes[i].style.display = "none";
    }
  
    //Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" tab1", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(picture).style.display = "block";
     evt.currentTarget.className += " tab1";
}