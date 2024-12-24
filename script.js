const submitBtn = document.getElementById('button');

submitBtn.addEventListener('click', function(){
    const firstContainer = document.getElementById('firstContainer');
    const secondContainer = document.getElementById('secondContainer');
    firstContainer.style.display = 'none';
    secondContainer.style.display = 'block';
})