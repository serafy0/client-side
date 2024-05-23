function getText(){
    return document.getElementById("PAR");
}


function ChangeFont(newFont){
    let text = getText();

    text.style.fontFamily = newFont;
}

function ChangeAlign(newAlign){

    let text = getText();
    text.style.textAlign = newAlign


}

function ChangeHeight(newlineHeight){
    let text = getText();

text.style.lineHeight = newlineHeight
}

function ChangeLSpace(newSpacing){
    let text = getText();
    text.style.letterSpacing = newSpacing


}

function ChangeIndent(newIndent){
    let text = getText();
    text.style.textIndent = newIndent

}

function ChangeTransform(newTransform){
    let text = getText();

    text.style.textTransform = newTransform

}

function ChangeDecorate(newDecoration){
    let text = getText();
    text.style.textDecoration = newDecoration 

}

function ChangeBorder(newBorder){
    let text = getText();

    text.style.border = newBorder


}

function ChangeBorderColor(newBorderColor){
    let text = getText();
    text.style.borderColor = newBorderColor

}