## module.exports

- O module.exports define qual o objeto será exportado para ser utilizado em outros arquivos por exemplo. Serve de referência para o module.
- 

## Pré processamento

- È quando um programa faz alguns processamentos antes do compilador.

## Babel

- Babel é o que faz a transformação do nosso código para uma versão do JS que o navegador possa entender.
- @babel/preset-env ele transforma nosso código em uma versão anterior do ECMAScript de forma que o navegador possa entender.
- @babel/core é onde fica a biblioteca do babel
- @babel/cli é a linha de comando do babel, para que a gente possa utilizar comandos no terminal.
- @babel/preset-react transforma arquivos JSX em JS compatível
- babel-loader = Plugin do webpack que “transpila” o código.

==> Alguns Comandos:
    ♠ yarn babel pasta/aplicação/principal.jsx --out-file pasta/destino/compilada.js 




## Webpack

O webpack ele pega arquivos "modernos" e transforma em arquivos entendiveis pelo browser.
O web pack tem várias propriedades, vou citar agora algumas:
    - entry: pega o arquivos de entrada(principal) que será compilado
    - output: {
        path: o diretório de destino.,
        filename: arquivo que será gerado dentro do diretório.
    },
    - resolve: {
        extensions: ['.js','.jsx'] → para conseguir ler arquivos JS e JSX
    },
    module: {
        rules: [
            {                                                                                                   |
                test: /\Vai pegar um tipo de arquivo/,                                                          |
                exclude: /node_modules/,                                                                        | > Cada objeto do Rules para um tipo de arquivo
                use: 'babel-loader', loader que converte o arquivo JSX para que o browser possa entender.       |
            }                                                                                                   |
        ]
    }


## React

Components: São os objetos do site dividos em parter, como por exemplo "RepositoryList" é um componente e "RepositoryItem" também.

Propiedades: Atraves dos componentes "pais" pode se passar atributos aos seus componentes filhos e acessar esse atributos atraves do argumento props em seu componente filho

Estado: O react monitora apenas as variaveis que vão mudar seu valor em algum momento, por isso precisamos passar algumas configurações pra que ele possa entender algumas funcionalidades

{ useState } → é uma função armazena coisas dentro de um array com 2 posições. A primeira contém o valor da variável, e a segunda é que adiciona um novo valor a essa variável. Exemplo:

const [counter, setCounter ] = useState(0);
        |           |
        |           → Recebe uma função que faz agregar um novo valor a 'counter'.
        ↓
        Contém o valor (Começando em 0)

setCounter(counter++)

{ useEffect } É parecido com o useState, mas ele faz com execute uma função, quando algo mudar. Exemplo:

useEffect(() => {}, [counter] )            
            |
            |
            → Essa função será executada, quando a variável counter mudar.




 -- Imutabilidade

No react existe o conceito de imutabilidade. Que faz com que as variaveis não mudem seu valor, mas sim setem novos valores. Vou dar um exemplo abaixo.

const user = [ 'Diego', 'Thaissa','Mayk']       |   
user.push('Rafa')                               | > Modo Normal: Adiciona um novo nome no array, alterando o valor na memória da const users
                                                | 

newUsers = [...user, 'Thomas']                  | > Modo imutável: Pega tudo o que tinha na const users e adiciona um novo nome, isso tudo dentro de outra variavel, criando assim um                                              |   "novo valor".

## Outros

module path faz com que a gente possa trabalhar com caminhos e diretórios.


fetch()  → A função fetch é usada para fazer requisicões através do navegador, usando como argumento uma url. Normalmente para se utilizar uma API.
            Só que somente a função fetch('example.com/url') não te retornará algum valor, pois como o navegador demora um pouco para pegar esses dados,
            ele retorna somente uma promessa, ou 'Promises'. Então logo a funçã fetch() é utilizado um 1º .then() que é uma função que vai "armazenar"
            esses dados que vem como Objeto(Em forma de String) e passará ele para uma estrutura de objeto mesmo, através da função json(). E o segundo .then 
            armazena esse objeto em outra variavel. Assim como no Exemplo abaixo: 

            fetch('https://api.github/orgs/rocketseat/repos)          → Pega os dados do Repositorios da url da Rocketseat
            .then( respone => response.json())                        → Armazena a string no "response" e depois transforma em objeto através do .json()
            .then( data => setRepositories(data))                     → Armazena um novo valor em uma variavel, com o conteúdo que tem em "data", que no caso seria a String                                                      transformada em Texto

