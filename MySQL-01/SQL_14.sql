USE sucos;

UPDATE tbproduto SET EMBALAGEM = 'Lata', PRECO = 2.46 
WHERE PRODUTO = '544931';

UPDATE tbproduto SET EMBALAGEM = 'Garrafa'
WHERE PRODUTO = '1078680';

select * from tbproduto;