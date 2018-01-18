     
            $(function(){//main
                
                $(window).keypress(function(e){//while press enter
                 if(e.keyCode === 13){
                    newItem();   
                 } /*alert('hello queen')}*/
                });
                
                
                function newItem(){
                    if(item!=='')
                    var item=$('#toDo').val();
                    $('#todos').append('<li>' +item+ '</li>')/*  להוסיף בסוף */
                    $('#toDo').val('');//puts what the func gets
                       
                }
                
                $('ul').on('click','li',function(e){         
                /* the first -what we type second- for which element, tird- function*/
                   $(e.target).remove();
                });
                
                });
                   
            
