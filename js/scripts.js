const bPlay = document.getElementById('gioca')
console.log(bPlay);

const grid = document.querySelector('.container')
console.log(grid);

bPlay.addEventListener('click', function(){


    

    for(i = 1; i <= 100; i++){
        console.log(i)
        
        let cella = document.createElement('div');
        grid.append(cella);

        cella.classList.add('cella')
        cella.append(i)
    }

});