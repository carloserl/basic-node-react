$('.table tbody').on('click', '.icondelete', function(){
    var currow = $(this).closest('tr');
    var col1d = currow.find('td:eq(0)').text();
    var col2d = currow.find('td:eq(1)').text();
    var col3d = currow.find('td:eq(2)').text();
    var col4d = currow.find('td:eq(3)').text();
    var col5d = currow.find('td:eq(3)').text();
    
        localStorage.setItem("colt1d",col1d);
        localStorage.setItem("colt2d",col2d);
        localStorage.setItem("colt3d",col3d);
        localStorage.setItem("colt4d",col4d);
        localStorage.setItem("colt5d",col5d);
        location.href ="form-deleteuser.html";
  
})

