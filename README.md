
# Testes usando stubs

Testes stubs provê respostas prontas para as chamadas que serão feitas durante o teste.

Assim, ao substituir um componente durante os testes, um stub teria a seguinte responsabilidade:

Se o teste invocar o método A, retorno B.
Se o teste invocar o método X, retorno Y.

### Quando usar stub?

Use stub para testar se um código, dada uma determinada entrada (respostas prontas dos métodos do stub), produz determinada saída.
