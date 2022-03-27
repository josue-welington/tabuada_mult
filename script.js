document.getElementById('btn').onclick = gerarTabuada;

function gerarTabuada(){
    var inputN = document.getElementById('inputN');
    var sel = document.getElementById('res');

    if(inputN.value.length === 0){
        alert('Digite um valor válido')
    }else{
        sel.setAttribute('size',10)
        sel.innerHTML = "";
        let n = Number(inputN.value)
        for(i = 1;i<=10;i++){
            let calc = Number(n*i);
            let novoOpn = document.createElement('option');
            novoOpn.innerHTML = `${n}x${i} =${calc}`
            sel.appendChild(novoOpn);
        }
    }

}