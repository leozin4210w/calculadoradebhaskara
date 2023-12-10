function botao(){
    let a = Number(document.getElementById('a').value);
    let b = Number(document.getElementById('b').value);
    let c = Number(document.getElementById('c').value);

    let delta = b**2 - 4 * a * c;

    let x = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);

    let resultado = document.getElementById('resultado');
    let explicação = document.getElementById('ex')

    if (a===0 || b===0 || c===0) {
        resultado.innerHTML = '<div id="erro">Por favor, preencha todos os campos.</div>';
        explicação.innerHTML = ''
        return;
      }

    let acp = a < 0 ? `(${a})` : `${a}`;
    let bcp = b < 0 ? `(${b})` : `${b}`;
    let ccp = c < 0 ? `(${c})` : `${c}`;
    

    if (delta < 0){

        resultado.innerHTML = 'Não há solução real, pois o <span>delta Δ</span> é <strong>negativo</strong>';
        explicação.innerHTML = `
    <h2 id="k">Explicação:</h2>
    <h3>Calcule o valor de <strong>delta Δ</strong></h3>
    <p><strong>Δ</strong> = B² - 4 . a . c</p>
    <p><strong>Δ</strong> = ${bcp}² - 4 . ${acp} . ${ccp}</p>
    <p><strong>Δ</strong> = ${delta}</p>
    <p><strong>Não</strong> é possivel continuar, pois se o valor de <strong>Δ</strong> é negativo não é possível aplicar a formula de <strong>Bhaskara.</strong></p>
`

    } else {

        resultado.innerHTML = `O valor de <strong>delta Δ</strong> é <span>` + delta + `</span> e as soluções de <strong>X1 </strong> e <strong>X2 </strong> são respectivamente: <span>` + x + "</span> e <span>" + x2 + "</span>";
        explicação.innerHTML = `
    <h2 id="k">Explicação:</h2>
    <h3>Calcule o valor de <strong>delta Δ</strong></h3>
    <p><strong>Δ</strong> = B² - 4 . a . c</p>
    <p><strong>Δ</strong> = ${bcp}² - 4 . ${acp} . ${ccp}</p>
    <p><strong>Δ</strong> = ${delta}</p>
    <h3>Aplique a fórmula de <strong>Bhaskara</strong> para encontrar o valor de <strong>X1</strong> e <strong>X2.</strong></h3>
    <p><strong>X1 </strong> = (-B + √Δ) / 2 . a</p>
    <p><strong>X1 </strong> = (-${bcp} + √${delta}) / 2 . ${acp}</p>
    <p><strong>X1</strong> = ${x}</p>
    <br>
    <p><strong>X2 </strong> = (-B - √Δ) / 2 . a</p>
    <p><strong>X2 </strong> = (-${bcp} - √${delta}) / 2 . ${acp}</p>
    <p><strong>X2</strong> = ${x2}</p>
    `
    }

}