let index = 0;


const backwardArrow = document.getElementById("backward-arrow");
const forwardArrow = document.getElementById("forward-arrow");
const firstContent = document.getElementsByClassName("first")[0];

const data = [{
    heading: 'Unlock the full Potential, Upgrade your Skills',
    content: 'Decipher your potential as aproduct leader with our cutting edge course by top-notch skilled trainers.',
    image: './RS/5.jpg'
},
{
    heading: 'Redefining the classroom experience and Empowering Learners.',
    content: 'Decipher your potential as aproduct leader with our cutting edge course by top-notch skilled trainers.',
    image: './RS/3.jpg'

},
{
    heading: 'Boost Your Skillset, Accelerate Your Carrer',
    content: 'Get ahead of the pack, and scale up new heights with the chance to interact with tops CEOs and Founder.',
    image: './RS/10.jpg'

}]

const reWriteFirstContent = () => {
    const k = data[index].heading.lastIndexOf(' ');
    firstContent.innerHTML = `
    <div class="first-content">
        <h1>
            ${data[index].heading.slice(0, k)}
            <p>${data[index].heading.slice(k + 1)}</p>
            <hr />
        </h1>
        <h2>
            ${data[index].content}.
        </h2>
        <div class="button-wraper">
            <button class="explore-button1">Get Started</button>
            <button class="explore-button2">Explore Our Courses</button>
        </div>
    </div>
    <div>
        <img src="${data[index].image}" />
    </div>`
}


backwardArrow.addEventListener('click', (e) => {
    index = (index + data.length - 1) % data.length;
    reWriteFirstContent();
})

forwardArrow.addEventListener('click', (e) => {
    index = (index + 1) % data.length;
    reWriteFirstContent();
})