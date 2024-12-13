let testimonial_data = [
    {
        name : "Mukesh Babu",
        image : "https://picsum.photos/200/300?random=1",
        text_content :"Our stern alarums changed to merry meetings"
    },
    {
        name : "Ramesh Babu",
        image : "https://picsum.photos/200/300?random=2",
        text_content :"In the deep bosom of the ocean buried."
    },
    {
        name : "Suresh Babu",
        image : "https://picsum.photos/200/300?random=3",
        text_content :"Now are our brows bound with victorious wreaths"
    }
]

let data = 0

let name = document.querySelector(".container_name")
let image = document.querySelector(".container_image")
let text_content = document.querySelector(".container_content")

function testimonial(){
    let current = testimonial_data[data]
    name.innerHTML=current.name
    image.src = current.image
    text_content.innerHTML = current.text_content
    data++

    if(data===testimonial_data.length){
        data = 0 
    }
}

setInterval(()=>{testimonial()},1000);
testimonial()