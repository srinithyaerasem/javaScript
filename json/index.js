// GET
let options={
    "method":"GET"
}

fetch("http://localhost:3000/products/1",options)
.then(res=>res.json())
.then(data=>console.log(data))

// POST
let postOptions={
    "method":"POST",
    "headers":{
        "Content-Type":"application/json"
    },
    "body":JSON.stringify({
        "id": "6",
        "name": "Elephant"
    })
}

fetch("http://localhost:3000/products",postOptions)
.then(res=>res.json())
.then(data=>console.log(data))

// DELETE
let deleteOptions={
    "method":"DELETE"
}

fetch("http://localhost:3000/products/6",deleteOptions)
.then(res=>res.json())
.then(data=>console.log(data))

// PUT
let putOptions={
    "method":"PUT",
    "headers":{
        "Content-Type":"application/json"
    },
    "body":JSON.stringify({
        "name": "CPU"
    })
}

fetch("http://localhost:3000/products/5",putOptions)
.then(res=>res.json())
.then(data=>console.log(data))

// PATCH
let patchOptions={
    "method":"PATCH",
    "headers":{
        "Content-Type":"application/json"
    },
    "body":JSON.stringify({
        "name": "Hard Disk"
    })
}

fetch("http://localhost:3000/products/5",patchOptions)
.then(res=>res.json())
.then(data=>console.log(data))

// GET ALL
let getAllOptions={
    "method":"GET"
}

fetch("http://localhost:3000/products",getAllOptions)
.then(res=>res.json())
.then(data=>console.log(data))

// GET ALL AND DELETE EACH ITEM
let getOptions={
    "method":"GET"
}

fetch("http://localhost:3000/products",getOptions)
.then(res=>res.json())
.then(data=>{
    let deleteOptions={
        "method":"DELETE"
    }
    for(let i=0;i<data.length;i++){
        console.log(data[i]);
        fetch(`http://localhost:3000/products/${data[i].id}`,deleteOptions)
        .then(res=>res.json())
        .then(deletedData=>console.log(deletedData))
    }
})
