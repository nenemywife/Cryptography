document.getElementById("send").onclick = function() {send()};
document.getElementById("copy").onclick = function() {copy()};

var isAlpha = function(ch){
    return typeof ch === "string" && ch.length === 1 && (ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z");
}

var isUpperCase = function(ch){
    return typeof ch === "string" && ch.length === 1 && (ch >= "A" && ch <= "Z");
}

function send(){
    var plaintext = document.getElementById("plaintext").value;
    var offset = document.getElementById("offset").value;
    offset = parseInt(offset);

    var caesartext = "";
    for (let i = 0; i < plaintext.length; i++) {
        let n = plaintext.charCodeAt(i) + offset;

        if(!isAlpha(plaintext[i])) {
            caesartext += plaintext[i];
            continue;
        }

        if(isUpperCase(plaintext[i])) {
            if(n > 90) {
                n -= 26;
            }
        } else {
            if(n > 122) {
                n -= 26;
            }
        }
        caesartext += String.fromCharCode(n);
    }
    
    var output = document.getElementById("caesartext");
    output.value = caesartext;
}

function copy(){
    var copyText = document.getElementById("caesartext");

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);

    alert("Copied the text: " + copyText.value);
}