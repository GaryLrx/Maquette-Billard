let a = document.getElementById('arrow');
a.onclick = () => {
    window.scrollTo({
        top: document.getElementById('down').offsetTop+20,
        behavior: "smooth"
    });
};

let b = document.getElementById('a');
let c = document.getElementById('b');
let count = 0;
c.onclick = () => {
    if(count%2 == 1){
        b.classList.add('hidden');
        c.src="src/+.png";
    }else{
        b.classList.remove('hidden');
        c.src="src/-.png";
    }
count++;
};

let d = document.getElementById('d');
let e = document.getElementById('e');
let f = 0;
e.onclick = () => {
    if(f%2 == 1){
        d.classList.remove('hidden');
        e.src="src/-.png";
    }else{
        d.classList.add('hidden');
        e.src="src/+.png";
    }
f++;
};