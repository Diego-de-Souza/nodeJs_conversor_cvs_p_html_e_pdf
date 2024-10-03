# Conversor de Arquivos CSV para HTML e PDF
Esta aplicação foi desenvolvida em Node.js com o objetivo de converter dados de arquivos CSV para formatos HTML e PDF de maneira eficiente. Ideal para situações em que é necessário visualizar ou compartilhar dados em um formato mais amigável, como um relatório em PDF ou uma tabela estruturada em HTML.

## Visão Geral do Projeto
O projeto lê um arquivo CSV (Comma Separated Values) e transforma os dados nele contidos em uma tabela HTML. Em seguida, o HTML gerado é convertido em um arquivo PDF, permitindo que o conteúdo seja facilmente visualizado ou impresso.

Essa aplicação é especialmente útil para automação de relatórios, onde dados em formato CSV precisam ser convertidos para uma apresentação visual mais adequada. A aplicação utiliza bibliotecas de terceiros para realizar essas conversões de forma rápida e precisa.

## Funcionalidades
Leitura de Arquivos CSV: Utilizando a biblioteca nativa fs do Node.js, o programa lê os arquivos CSV para realizar o processo de conversão.
Geração de HTML: Os dados do CSV são convertidos em uma tabela HTML, facilitando a visualização em navegadores ou editores de texto.
Criação de PDFs: Com base no HTML gerado, o aplicativo cria um arquivo PDF, que pode ser armazenado e compartilhado.

## Dependências
O projeto utiliza duas bibliotecas principais:

1. fs (File System): Biblioteca nativa do Node.js que permite manipular o sistema de arquivos, sendo responsável pela leitura dos arquivos CSV.
    + Instalação: npm install fs --save

2. html-pdf: Biblioteca que converte conteúdo HTML em arquivos PDF.
    + Instalação: npm install html-pdf --save

## Como a Aplicação Funciona
1. Leitura do CSV: O arquivo CSV é lido e processado pelo Node.js. Os dados são organizados em um formato adequado para serem convertidos.

2. Geração do HTML: A partir dos dados do CSV, é criada uma estrutura HTML, geralmente uma tabela, que organiza as informações de maneira clara e visualmente acessível.

3. Criação do PDF: O HTML gerado é convertido para PDF usando a biblioteca html-pdf. Esse PDF pode então ser utilizado como relatório ou documento final para visualização e distribuição.

## Exemplos de Aplicação
+ Relatórios Automáticos: Empresas que recebem dados em formato CSV podem utilizar esta aplicação para gerar relatórios em PDF automaticamente, facilitando a comunicação e análise de dados.
+ Visualização de Dados: Se você tiver grandes volumes de dados em formato CSV e precisar visualizá-los de forma mais organizada, a conversão para HTML pode tornar essa tarefa muito mais simples.

## Como Executar a Aplicação
Para executar a aplicação, o usuário precisará instalar as dependências mencionadas acima e garantir que o Node.js esteja instalado no sistema. Uma vez configurado, o arquivo CSV que se deseja converter deve ser colocado na pasta especificada, e a aplicação irá gerar automaticamente o HTML e o PDF correspondentes.