(function() {
    var showResults;
  
    $('#search-box').keyup(function() {
      var searchText;
      searchText = $('#search-box').val();
      return showResults(searchText);
    });
  
    showResults = function(searchText) {
      $('tbody tr').hide();
      return $('tbody tr:Contains(' + searchText + ')').show();
    };
  
    
    //# Override the Contains function to be case insensitive   
    jQuery.expr[":"].Contains = jQuery.expr.createPseudo(function(arg) {
      return function(elem) {
        return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
      };
    });
  
  }).call(this);
