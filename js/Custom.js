
// Nice Scroll
$("html").niceScroll({
	
		cursorcolor:'#000',
		cursorwidth:5,
		cursorborder:'1px solid #000'
		});

//	Scroll Up

var scrollButton=$(".ScrollUp");
$(window).scroll(function(){
	
	if( $(this).ScrollTop()>=700)
	{
		scrollButton.show();
		}
	else
	{
		scrollButton.hide();
		}
		scrollButton.click(function(){
			$("html,body").animate({ ScrollUp:0}, 600);
			});	
	});
