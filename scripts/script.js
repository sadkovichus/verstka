document.addEventListener('DOMContentLoaded', () => {
    let column = document.querySelectorAll('.wrapper__rating-col');
    setTimeout(() => {
        column.forEach(item => {
            item.classList.add('wrapper__rating-col--actived')
        })
    }, 500)

    let containers = document.querySelectorAll('.right-auxiliary-panel');


    containers.forEach((item, index) => {
        let span = item.children[0];
        let indexText = 0;
        for (let i = 0; i < containers.length; i++) {
            console.log(index);
            if (i === index) {
                indexText = index+1;
                console.log(indexText);
                span.innerHTML += `<span class="right-auxiliary-panel__text">${index+1}</span>`
            } else {
                span.innerHTML += `<span 
                    class="
                    right-auxiliary-panel__circle 
                    right-auxiliary-panel__circle${indexText ? indexText : i+1}
                "></span>`
            }
            console.log(indexText);
        }
        // child.textContent = ++index;
    })
})
// let currentPage = 0;
// function scroll() {
//     let page = document.querySelectorAll('.page');
//     console.log(page[currentPage]);
//     currentPage++;
// }


// span.innerHTML += `<span 
//                     class="right-auxiliary-panel__circle 
//                     ${
//                         i+1 > 4
//                         ? 'right-auxiliary-panel__hide'
//                         : `right-auxiliary-panel__circle${indexText+i}`
//                     }
//                 "></span>`