document.querySelectorAll('.photo').forEach(photo => {

  const likeBtn = photo.querySelector('.like');
  const dislikeBtn = photo.querySelector('.dislike');

  likeBtn.addEventListener('click', () => {
    let count = parseInt(likeBtn.querySelector('span').textContent);
    likeBtn.querySelector('span').textContent = count + 1;

  });

  dislikeBtn.addEventListener('click', () => {

    let count = parseInt(dislikeBtn.querySelector('span').textContent);
    dislikeBtn.querySelector('span').textContent = count + 1;

  });
});
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const username = document.getElementById('uname').value;
    const password = document.getElementById('psw').value;
    const message = document.getElementById('loginMessage');

 
    if(username === "feit" && password === "feit123") {
        message.style.color = "green";
        message.textContent = "Login successful! Redirecting...";
        setTimeout(() => {
            window.location.href = "blog.html"; 
        }, 1500);
    } else {
        message.style.color = "red";
        message.textContent = "Incorrect username or password!";
    }
});
