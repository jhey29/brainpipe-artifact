export function output(string) {
    let op = document.getElementById("output");
    op.innerText = op.innerText.concat(string);
}