/*
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        } 
      });
    }
*/
    // =====================================================================
    var allHeights = 0;
    var contents = document.getElementsByClassName("collapsible-content");
    var j;
    
    for (j = 0; j < contents.length; j++) {
      var h = document.getElementsByClassName("collapsible-content")[j].scrollHeight;
      allHeights += h;
    }
    
    var coll = document.getElementsByClassName("collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight == allHeights + "px"){
          content.style.maxHeight = "0px";
        } else {
          content.style.maxHeight = allHeights + "px";
        }
      });
    }

    // ======================================================================


    // ======================================================================
    document.addEventListener("DOMContentLoaded", () => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            return;
          }
          entry.target.classList.remove('in-view');
        });
      });

      const allAnimatedElements = document.querySelectorAll('.animate');

      allAnimatedElements.forEach((element) => observer.observe(element));
    });