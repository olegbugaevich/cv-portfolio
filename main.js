let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let skillSection = document.querySelector('.skills-content');
let progressBars = document.querySelectorAll('.percent-bar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

function showProgress(){
    progressBars.forEach(progressBars => {
        // let value = progressBars.dataset.progress;
        let value = progressBars.getAttribute('data-progress');
        progressBars.style.width = `${value}%`;
    });
}

function hideProgress() {
    progressBars.forEach(p => {
        p.style.opacity = 1;
        p.style.width = 0;
    })
}
window.addEventListener('scroll', () => {
    let sectionPos = skillSection.getBoundingClientRect().top;
    let screenPos = window.innerHeight;

    if(sectionPos < screenPos){
        showProgress();
    } else {
        hideProgress();
    }
})

// window.onload = function () {
//     let bar = document.querySelectorAll('.bar');
//     bar.forEach((progress) => {
//       let value = progress.getAttribute('data-value');
//       progress.style.width = `${value}%`;
//       let count = 0;
//       let progressAnimation = setInterval(() => {
//         count++;
//         progress.setAttribute('data-text', `${count}%`);
//         if (count >= value) {
//           clearInterval(progressAnimation);
//         }
//       }, 15);
//     });
//   };