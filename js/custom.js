$(document).ready(function(){
     // $.fn.dataTableExt.oStdClasses.sPaging = "pagination "
     var t = $('table').dataTable({"bJQueryUI": true,"sPaginationType": "full_numbers"});
     $('tbody').delegate('td', 'click', function (){
       console.log(t.fnGetData( this.parentNode ))
       var datas = t.fnGetData(this.parentNode)
       var data = {
         'sciname' : datas[1],
         'notes': datas[4]
       }
   var tmpl = "<div class='modal-header'><a href='#' class='close'>&times;</a><h3 class='science'>{{sciname}}</h3></div>" + 
   "<div class='modal-body'><img class='plantimg' src='img/{{sciname}}.jpeg'/><p>{{notes}}</p></div>" +
   " <a href='{{wiki}}'> Wiki</a> &bull; <a href='http://www.gardenology.org/wiki/{{sciname}}'>Gardenology</a>  &bull; <a href='http://pfaf.org/user/Plant.aspx?LatinName={{sciname}}'>Plants For a Future</a>"+
   "<div class='modal-footer'> <a class='btn primary closer'>Close</a></div>"
       var x = Mustache.to_html(tmpl, data)
       $('#popup').html(x)
       $('#popup').modal({backdrop: true, show:true});
     });
     $('#popup').delegate('.closer', 'click', function(){
       $('#popup').modal('toggle')
     })
     t.fnSetColumnVis(4, false);
     t.fnSetColumnVis(3, false);
     $('#popup').hide();
     // $('#popup').modal({backdrop: true, show:true});
     // $('.dataTables_paginate').addClass("pagination")
     // $('.previous .ui-state-disabled').addClass("prev disabled")
     // $('.first .ui-state-disabled').addClass("prev disabled")
     // $('.fg-button .ui-state-disabled').addClass("active")
     
     // $(t.fnGetNodes()).each(function(){console.log(this)})
     
 });