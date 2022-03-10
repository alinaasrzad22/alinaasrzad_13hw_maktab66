

//  $('.accordion').on('click', '.accordion-control', function(e){
//     e.preventDefault(); //prevent default action of a button 
//     $(this) //get the element the user clicked on
//       .next('.accordion-panel')//select the next accordion panel
//       .not(':animated') //if it is not currently animating
//       .slideToggle();//use slideToggle to show or hide it
//   });
// $(function() {
//     var Accordion = function(el, multiple) {
//         this.el = el || {};
// this.multiple = multiple || false;

     
// var links = this.el.find('.link')
// links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
// }

// Accordion.prototype.dropdown = function(e) {
// var $el = e.data.el;
// $this = $(this),
//     $next = $this.next();

// $next.slideToggle();
// $this.parent().toggleClass('open');

// if (!e.data.multiple) {
//     $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
// };
// }

// var accordion = new Accordion($('#accordion'), false);
// });


$(document).ready(function() {
    $('.item').click(function() {
        if ($(this).next().hasClass('show')) {
            $(this).next().removeClass('show')
            $(this).next().slideUp(350, "linear")
        } 
        else {
            $(this).parent().parent().find('li .ptag').removeClass('show')
            $(this).parent().parent().find('li .ptag').slideUp(350, "linear")
            $(this).next().toggleClass('show')
            $(this).next().slideToggle(350, "linear")
        }
    })
})