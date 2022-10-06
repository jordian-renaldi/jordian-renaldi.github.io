document.getElementById("chamber-line").addEventListener('mouseover', (event) => {
    document.getElementById("chamber").setAttribute("style","")
    let span_arr = document.getElementById("chamber-line").getElementsByTagName("span")
    span_arr[1].setAttribute("style","display:\"\" ")
    console.log(span_arr)
    console.log(document.getElementsByClassName("body"))

    
});
