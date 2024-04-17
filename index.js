import init, { run } from "./pkg/wasm_crate.js";
/* function read_byte() {
    let el = document.getElementById("input");
    
    
    ret = el.innerText.charAt(0);
    el.innerText = el.innerText.slice(1);
    return ret.charCodeAt(0) | 255
} */
let addr = new URL(window.location);
let program = atob(addr.searchParams.get("program"));
document.getElementById("program").value = program;
let input = atob(addr.searchParams.get("input"));
document.getElementById("input").value = input;
console.log(program);

init().then(() => {
    let program, input; 
  document.getElementById("run").onclick = () =>{
    document.getElementById("output").innerText = run(
        program = document.getElementById("program").value,
        input = document.getElementById("input").value);
        addr.searchParams.set("program", btoa(program));
        addr.searchParams.set("input", btoa(input));
        document.getElementById("link").href = addr;
    }
});