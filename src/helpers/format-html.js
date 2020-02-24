const formatHTML = (html) => {
    let parsedHtml = '';
    let spanning = false;
    let quoting = false;

    for (let i = 0; i < html.length; i++) {
        if (html[i] === '<') {
            parsedHtml += '<span style="color:#ffc954">&lt;';
            spanning = true;
        } else if (html[i] === ' ' && spanning) {
            parsedHtml += '</span> ';
            spanning = false;
        } else if (html[i] === '>') {
            if (spanning) {
                spanning = false;
                parsedHtml += '&gt;';
                parsedHtml += '</span>';
            } else {
                parsedHtml += '<span style="color:#ffc954">&gt;</span>';
            }
        } else if (html[i] === '"') {
            if(quoting) {
                quoting = false;
                parsedHtml += '"</span>';
            } else {
                quoting = true;
                parsedHtml += '<span style="color:#daf757">"';
            }
        } else {
            parsedHtml += html[i];
        }
    }

    return parsedHtml;
};

export default formatHTML;
