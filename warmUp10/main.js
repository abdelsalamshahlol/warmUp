$(function(){
	var c = 1;

	$('body').on('click', 'button', function(){
		var input = $('.col>input').val();

		$('#list').append('<li class="class'+ c +'">' + input + '</li>');
		c++;
	});
});