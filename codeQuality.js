// level {1}




// Re-write the below code to better code quality standards.


// async function GET_daTA() {
//   let r = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   let DATA = await r.json();
//   return DATA;
// }


const API_URL = "https://jsonplaceholder.typicode.com"

const getData = async()=>{

    const response = await fetch(`${API_URL}/todos/1`)
    const data = response.json();
     return data
}
