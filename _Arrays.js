// Write a function Chunk that accepts two parameters: an array and a chunk size. The goal is to divide the given array into smaller subarrays (chunks), where each chunk has a length equal to the specified size. If the array cannot be evenly divided, the last chunk may contain fewer elements than the specified size.



const Chunk = (Array, size) => {


    let ArrInChunks = [];
    let startIndex = 0;


    while (startIndex < Array.length) {
        const chunk = Array.slice(startIndex, startIndex + size);
        // console.log(chunk)
        ArrInChunks.push(chunk)
        startIndex += size
    };

    return ArrInChunks

}   




console.log(Chunk([1, 2, 3, 4, 5, 6, 7], 7));




// Algo stepls :-


//  1 - Devide the array length to the given size to extract that how many chunks we will have ?? 

