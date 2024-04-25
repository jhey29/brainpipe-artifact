import init, { run } from "./pkg/wasm_crate.js";
/* function read_byte() {
    let el = document.getElementById("input");
    
    
    ret = el.innerText.charAt(0);
    el.innerText = el.innerText.slice(1);
    return ret.charCodeAt(0) | 255
} */
let addr = new URL(window.location);
let program = atob(addr.searchParams.get("program") ?? ""); //did you know 'null' is the base64 representation of �ée ? 
document.getElementById("program").value = program;
let input = atob(addr.searchParams.get("input") ?? "");
document.getElementById("input").value = input;
let options = atob(addr.searchParams.get("options") ?? "");
document.getElementById("options").value = options;

init().then(() => {
    let program, input, options, outbox = document.getElementById("output"); 
  document.getElementById("run").onclick = () =>{
    run(
        program = document.getElementById("program").value,
        input = document.getElementById("input").value,
        options = document.getElementById("options").value);
    addr.searchParams.set("program", btoa(program));
    addr.searchParams.set("input", btoa(input));
    addr.searchParams.set("options", btoa(options));
    outbox.innerText = outbox.innerText + "\n\n"
    document.getElementById("link").href = addr;
    }
});