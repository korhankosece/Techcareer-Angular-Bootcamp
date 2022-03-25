const start = () => {
    const finishLine = 1300 - 200

    let horse1 = 20;
    let horse2 = 20;
    let horse3 = 20;

    const startTimeInterval = setInterval(startTimer, 300);

    function startTimer() {
        const randomNumber1 = Math.floor(Math.random() * 100)
        const randomNumber2 = Math.floor(Math.random() * 100)
        const randomNumber3 = Math.floor(Math.random() * 100)

        horse1 = randomNumber1 + horse1
        horse2 += randomNumber2
        horse3 += randomNumber3

        document.querySelectorAll('img')[0].style.left = horse1 + 'px'
        document.querySelectorAll('img')[1].style.left = horse2 + 'px'
        document.querySelectorAll('img')[2].style.left = horse3 + 'px'

        if (horse1 > finishLine || horse2 > finishLine || horse3 > finishLine) {
            if (horse1 > horse2 && horse1 > horse3) {
                console.log('ilk at kazandı....');
            } else if (horse2 > horse3) {
                console.log('ikinci at kazandı');
            } else {
                console.log('üçüncü at kazandı');
            }
            clearInterval(startTimeInterval)
        }
    }
}

const btn = document.querySelector('button')
btn.addEventListener('click', start)