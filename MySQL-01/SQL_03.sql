USE sucos;

INSERT INTO tbproduto (
PRODUTO,
NOME,
EMBALAGEM,
TAMANHO,
SABOR,
PRECO) VALUES (
'1037797', 'Clean - 2 Litros - Laranja',
'PET', '2 Litros', 'Laranja', 16.01);
INSERT INTO tbproduto (
PRODUTO,
NOME,
EMBALAGEM,
TAMANHO,
SABOR,
PRECO) VALUES (
'1000889', 'Sabor da Montanha - 700 ml - Uva',
'Garrafa', '700ml', 'Uva', 6.31);

INSERT INTO tbproduto (
PRODUTO,
NOME,
EMBALAGEM,
TAMANHO,
SABOR,
PRECO) VALUES (
'1004327', 'Videira do Campo - 1,5 Litros - Melancia
',
'PET', '1,5 Litros', 'Melancia', 19.51);

select * from tbproduto;