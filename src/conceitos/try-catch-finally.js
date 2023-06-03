try{
    throw new Error('Servidor fora do ar')
    console.log('Sistema foi iniciado...')
} catch (error) {
    console.log('O seguinte erro aconteceu: ', error);
} finally {
    console.log('Sistema foi encerrado...');
}
