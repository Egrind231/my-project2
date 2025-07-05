function cit(event, form) {  
	// Предотвращаем действие по умолчанию  
	event.preventDefault();  

	// Находим родительский элемент с классом .quote  
	let block = $(event.target).closest('.quote');   
	let usr = $(event.target).attr('data-target');   
	let mess_text = block.find('.quote_text').text().trim(); // Извлекаем текст сообщения  
	let mess_name = block.find('.quote_name').text().trim(); // Извлекаем имя пользователя  

	// Вырезаем текст между << и >>  
	mess_text = mess_text.replace(/<<.*?>>/g, '').trim(); // Удаляем текст между << и >>  

	// Устанавливаем значение в переданный элемент формы  
	$(form).val('[quote]<< ' + mess_name + ', ' + mess_text + ' >>[/quote]');  
	$('#cit_form').val(usr);  

	// Прокручиваем страницу до формы  
	$('html, body').animate({  
		scrollTop: 0 // Прокручиваем до позиции формы  
	}, 500); // 500 мс для анимации  

	// Устанавливаем фокус на поле ввода  
	$(form).focus(); // Устанавливаем курсор в поле ввода  
}
function answer_nick(form,usr,name) {   
	$(form).val(name + ', ');  
	$('#answer_nick').val(usr);  
	// Устанавливаем фокус на поле ввода  
	$(form).focus(); // Устанавливаем курсор в поле ввода  
}

