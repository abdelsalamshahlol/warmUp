$(function(){
	var createClicked = false;

	$('body').on('click', 'button', function() {
		var $li = $('<li>');
		var clickSrc = $(this);

		//Put a random text inside the list item
		var randomText = Math.floor(Math.random(65) * 500);
		$li.text(randomText);

		if(clickSrc.attr('id') === 'left-btn' && !createClicked) {
			//Add li to the left
			$('#left-list').append($li);

		}else if(clickSrc.attr('id') === 'right-btn' && !createClicked){
			$('#right-list').append($li);

		}else{
			createClicked = true;
		}
	})
});