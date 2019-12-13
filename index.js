document.addEventListener('DOMContentLoaded', function (e) {
    const container = document.querySelector('.container');
    const createCalendar = () => {
        const basePath = './img/flip-side-images/';
        container.innerHTML = '';
        for (let i = 0; i < 25; i++) {
            let imgItem = document.createElement('div');
            imgItem.classList.add(`flipside-img`, `flipside-img--${i + 1}`);
            imgItem.style.gridArea = `d${i + 1}`;
            imgItem.style.backgroundImage = `url('${basePath}${i + 1}.svg')`;
            container.appendChild(imgItem);
        }
    }
    createCalendar();
    container.addEventListener('click', function (e) {
        e.target.classList.toggle('active');
    })
})
