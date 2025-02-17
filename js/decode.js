document.getElementById("send").onclick = function() {send()};
document.getElementById("copy").onclick = function() {copy()};

var isAlpha = function(ch){
    return typeof ch === "string" && ch.length === 1 && (ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z");
}

var isUpperCase = function(ch){
    return typeof ch === "string" && ch.length === 1 && (ch >= "A" && ch <= "Z");
}

function send(){
    var caesartext = document.getElementById("caesartext").value;
    var plaintext = "";

    for (let i = 1; i < 26; i++) {
        plaintext += (i -'0');
        plaintext += ": "
        for (let c = 0; c < caesartext.length; c++) {
            let n = caesartext.charCodeAt(c) - i;

            if(!isAlpha(caesartext[c])) {
                caesartext += caesartext[c];
                continue;
            }
    
            if(isUpperCase(caesartext[c])) {
                if(n < 65) {
                    n += 26;
                }
            } else {
                if(n < 97) {
                    n += 26;
                }
            }
            plaintext += String.fromCharCode(n);
        }
        plaintext += '\n';
    }
    
    var output = document.getElementById("plaintext");
    output.value = plaintext;
}

function copy(){
    var copyText = document.getElementById("plaintext");

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);

    alert("Copied the text: " + copyText.value);
}