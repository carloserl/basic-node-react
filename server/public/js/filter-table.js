
     var numericRegExp = new RegExp('^((?:NaN|-?(?:(?:\\d+|\\d*\\.\\d+)(?:[E|e][+|-]?\\d+)?|Infinity)))$')

     function isNumeric (value) {
       return numericRegExp.test(String(value))
     }

     function toArray (value) {
       if (!value) {
         return []
       }

       if (Array.isArray(value)) {
         return value
       }

       if (value instanceof window.NodeList || value instanceof window.HTMLCollection) {
         return Array.prototype.slice.call(value)
       }

       return [ value ]
     }

     function sortTable (table, ordering) {
       var thead = table.querySelector('thead')
       var tbody = table.querySelector('tbody')
       var rows = toArray(tbody.rows)
       var headers = toArray(thead.rows[0].cells)

       var current = toArray(thead.querySelectorAll('.sorting_desc, .sorting_asc'))

       current.filter(function (item) { return !!item }).forEach(function (item) {
         item.classList.remove('sorting_desc')
         item.classList.remove('sorting_asc')
       })

       headers.filter(function (item) { return !!item }).forEach(function (header) {
         header.classList.remove('sorting_desc')
         header.classList.remove('sorting_asc')
       })

       ordering.forEach(function (order) {
         var index = order.idx
         var direction = order.dir || 'asc'

         var header = headers[index]
         header.classList.add('sorting_' + direction)
       })

       rows.sort(function sorter (a, b) {
         var i = 0
         var order = ordering[i]
         var length = ordering.length
         var aText
         var bText
         var result = 0
         var dir

         while (order && result === 0) {
           dir = order.dir === 'desc' ? -1 : 1
           aText = a.cells[order.idx].textContent.trim()
           bText = b.cells[order.idx].textContent.trim()

           if (isNumeric(aText) && isNumeric(bText)) {
             result = dir * (parseFloat(aText) - parseFloat(bText))
           } else {
             result = dir * aText.localeCompare(bText)
           }

           i += 1
           order = ordering[i]
         }

         return result
       }).forEach(function each (row) {
         tbody.appendChild(row)
       })
     }

     function find (array, predicate) {
       return toArray(array).filter(predicate)[0]
     }

     function initSortTable (table) {
       var thead = table.querySelector('thead')
       var ordering = [{idx:2,dir:'asc'},{idx:1,dir:'asc'}]

       sortTable(table, ordering)
       table.__ordering = ordering

       thead.addEventListener('click', function onClick (event) {
         var src = event.target || event.srcElement
         var tagName = src.tagName.toLowerCase()

         if (tagName !== 'th') {
           return
         }

         if (!event.shiftKey) {
           table.__ordering = [
             {
               idx: src.cellIndex,
               dir: src.classList.contains('sorting_asc') ? 'desc' : 'asc'
             }
           ]
         } else {
           var order = find(table.__ordering, function (item) {
             return item.idx === src.cellIndex
           })

           if (order) {
             order.dir = order.dir === 'asc' ? 'desc' : 'asc'
           } else {
             table.__ordering.push({
               idx: src.cellIndex,
               dir: 'asc'
             })
           }
         }

         sortTable(table, table.__ordering)
       }, false)
     }

     initSortTable(document.querySelector('table'))