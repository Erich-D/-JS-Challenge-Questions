// write a function that takes in an array and reverses each word in the array then the array

function ultraReverse(ray){
    for(let i=0; i<ray.length;i++){
        str = ray[i];
        ray[i] = str.split("").reverse().join("");
    }
    return ray.reverse();
}

test("Super Reverse", ()=>{
    let words = ["abc","def","xyz"]
    words = ultraReverse(words)
    expect(words).toEqual(["zyx","fed","cba"])
    
})