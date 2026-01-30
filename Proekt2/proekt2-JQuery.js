$(function () {

  $('.photo').each(function () {
    const $photo = $(this);

    $photo.find('.like').on('click', function () {
      const $span = $(this).find('span');
      const count = parseInt($span.text(), 10) || 0;
      $span.text(count + 1);
    });

    $photo.find('.dislike').on('click', function () {
      const $span = $(this).find('span');
      const count = parseInt($span.text(), 10) || 0;
      $span.text(count + 1);
    });
  });


  $('#loginForm').on('submit', function (e) {
    e.preventDefault();

    const username = $('#uname').val();
    const password = $('#psw').val();
    const $message = $('#loginMessage');

    if (username === 'feit' && password === 'feit123') {
      $message.css('color', 'green').text('Login successful! Redirecting...');
      setTimeout(function () {
        window.location.href = 'blog.html';
      }, 1500);
    } else {
      $message.css('color', 'red').text('Incorrect username or password!');
    }
  });
});
