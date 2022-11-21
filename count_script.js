function checkContar(){
    let sta = document.getElementById('start')
    let end = document.getElementById('end')
    let step = document.getElementById('step')
    let res = document.getElementById('res')
    
    if(sta.value.length == 0 || end.value.length == 0 || step.value.length == 0){
        res.innerHTML = 'Impossivel contar, coloque todos os dados'
    } else {
        res.innerHTML = 'Contando: <br>'
        let s = Number(sta.value)
        let e = Number(end.value)
        let sp = Number(step.value)
        let c = s
        
        if(s >= e){ // Se o inicio for maior que o fim , impossivel efetuar contagem
            res.innerHTML = 'O valor inicial não pode ser maior ou igual ao valor final!!! Corrija e tente novamente.'
        }else if(sp >= e){    // Se passos for maior que o fim, impossivel efetuar contagem
             res.innerHTML = 'O valor de salto não pode ser maior ou igual ao valor final!!! Corrija e tente novamente.'
        }else if(s < e){ // Se o inicio for menor que o fim, efetuar contagem
            // Contagem Crescente
            for(let c = s; c <= e; c += sp){
                res.innerHTML += c + '\u{1F449} ' 
            }
            res.innerHTML += '\u{1F3C1}'
        }

        // Contagem Regressiva ( Para funcionar corretamente deve se retirar os outros dois para que não conflitam os codigos entre si)
        //      else if (s > e){
        //                         for(let c = s; c >= f; c -= sp){
        //                              res.innerHTML += c + '\u{1F449} ' 
        //                         }
        //       }
        
        
    
          
        




        }
    }
