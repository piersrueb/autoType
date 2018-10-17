//  autoType

const autoType = (text, id) => {
    let l = 0;
    let txt = text;
    let split = txt.split("");
    let splitLength = split.length;
    let elem = document.getElementById(id);
    const type = () => {
        setTimeout(function(){
            if(l < splitLength){
                let x = elem.innerHTML;
                let letters = x + text[l];
                elem.innerHTML = letters;
                l++;
            type();
            }
        }, 40);
    }
    type();
}

autoType('Hi there my name is Piers', 'text-1');
