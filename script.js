function gerarTabuada()
{
    let num = window.document.getElementById(`txtn`);
    let tab = window.document.getElementById('seltab');

    if(num.value.length == 0)
    {
        window.alert('Por favor, digite um número!');
    }
    else
    {
        let n = Number(num.value);
        let c = 1;

        tab.innerHTML = '';
        //Limpa a tabuada anterior 

        while(c <= 10)
        {
            let item = document.createElement('option');
            /*Cria um option para o select que está no HTML*/

            item.text = `${n} x ${c} = ${n*c}`;
            //Adiciona o seguinte texto ao option criado

            item.value = `tab${c}`;
            // Acrecenta value com valor único para cada value

            tab.appendChild(item);
            //Acrescenta um elemento filho

            c++;
        }
    }
    
}