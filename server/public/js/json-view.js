$('.table tbody').on('click', '.iconview', function(){
    var currow = $(this).closest('tr');
    var col1 = currow.find('td:eq(0)').text();
    var col2 = currow.find('td:eq(1)').text();
    var col3 = currow.find('td:eq(2)').text();
    var col4 = currow.find('td:eq(3)').text();
    var col5 = currow.find('td:eq(3)').text();
    
        localStorage.setItem("colt1",col1);
        localStorage.setItem("colt2",col2);
        localStorage.setItem("colt3",col3);
        localStorage.setItem("colt4",col4);
        localStorage.setItem("colt5",col5);
        location.href ="form-viewuser.html";
  
})
