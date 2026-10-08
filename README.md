# Desenvolvimento Web - Semana 04

Projeto desenvolvido para praticar Arrays, manipulação do DOM e Eventos utilizando JavaScript.

O projeto utiliza como temática um blog de cinema chamado CineBlog.

## Arrays

Foram utilizados os métodos `forEach`, `map`, `filter` e `reduce`.

O `forEach` percorre todos os elementos de um array e executa uma função para cada elemento.

O `map` percorre um array e cria um novo array com os valores transformados.

O `filter` cria um novo array contendo apenas os elementos que atendem a uma determinada condição.

O `reduce` percorre os elementos do array e acumula seus valores, retornando um único resultado.

## Manipulação do DOM

Foram utilizados recursos como `querySelector`, `querySelectorAll`, `createElement`, `append`, `textContent`, `innerHTML` e `classList`.

Com esses recursos é possível selecionar elementos da página, alterar textos, criar novos elementos HTML e modificar suas classes através do JavaScript.

No projeto, o JavaScript altera o título do blog, cria novos itens da lista de cinema e aplica classes CSS aos elementos.

## Eventos

Foram utilizados os eventos `click`, `mouseover`, `keyup` e `submit` através do método `addEventListener`.

O evento `click` identifica o clique no botão e nos itens da lista.

O evento `mouseover` modifica o texto do botão quando o usuário passa o mouse sobre ele.

O evento `keyup` exibe no console o conteúdo digitado no campo de nome.

No formulário foi utilizado `preventDefault()` para evitar o recarregamento da página durante o envio.

## Event Delegation

O Event Delegation permite adicionar um único evento a um elemento pai e identificar qual dos seus elementos filhos foi clicado através de `e.target`.

Neste projeto, o evento de clique é aplicado à lista inteira em vez de adicionar um evento individual em cada item.

Quando o usuário clica em um elemento `li`, o JavaScript verifica o alvo do clique e utiliza `classList.toggle()` para adicionar ou remover a classe `feito`.

Essa técnica também permite que novos itens criados dinamicamente pelo JavaScript ou pelo formulário respondam ao mesmo evento sem a necessidade de criar novos listeners.

Além de facilitar o funcionamento de elementos criados dinamicamente, o Event Delegation ajuda a otimizar a performance, pois evita a criação de vários listeners individuais para elementos que pertencem ao mesmo componente.