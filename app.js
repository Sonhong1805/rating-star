window.addEventListener('resize', () => {
    var bottomScrollX = window.innerWidth + window.pageXOffset;
    var bottomScrollY = window.innerHeight + window.pageYOffset;

    // console.log(bottomScrollX, bottomScrollY);
    let labels = document.querySelectorAll('.rating label')
        if(bottomScrollX < 1000) {
            labels.forEach(label => {
                label.classList.add('pink');
            })
        } else {
            labels.forEach(label => {
                label.classList.remove('pink');
            })
        }
    
})


