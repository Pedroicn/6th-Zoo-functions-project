const {handlerElephants, getElephants} = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('verifica se retorna o objeto correspondente ao animal elefante', () => {
    const elephant = {
      id: 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
      name: 'elephants',
      popularity: 5,
      location: 'NW',
      availability: [ 'Friday', 'Saturday', 'Sunday', 'Tuesday' ],
      residents: [
        { name: 'Ilana', sex: 'female', age: 11 },
        { name: 'Orval', sex: 'male', age: 15 },
        { name: 'Bea', sex: 'female', age: 12 },
        { name: 'Jefferson', sex: 'male', age: 4 }
      ]
    }
    expect(getElephants()).toEqual(elephant)
  })

  it('Verifica a quantidade de elefantes quando passado o parametro count', () => { 
    expect(handlerElephants('count')).toEqual(4);
  })
  it('Verifica se retorna um array com a relação dos nomes de todos os elefantes com o parametro names', () => { 
    expect(handlerElephants('names')).toEqual([ 'Ilana', 'Orval', 'Bea', 'Jefferson' ]);
  })

  it('Verifica se retorna a média de idade dos elefantes com o parametro averageAge', () => { 
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  })

  it('Verifica se retorna a localização dos elefantes dentro do Zoológico com parametro location', () => { 
    expect(handlerElephants('location')).toBe('NW');
  })

  it('Verifica se retorna a popularidade dos elefantes com parametro popularity', () => { 
    expect(handlerElephants('popularity')).toEqual(5);
  })

  it('Verifica se retorna um array com a relação de dias em que é possível visitar os elefantes', () => { 
    expect(handlerElephants('availability')).toEqual([ 'Friday', 'Saturday', 'Sunday', 'Tuesday' ]);
  })

  it('Verifica se retorna a string: "Parâmetro inválido, é necessário uma string" quando parametro não é uma string', () => { 
    expect(handlerElephants(5)).toEqual("Parâmetro inválido, é necessário uma string");
  })

  it('Verifica se retorna undefined quando nenhum parametro é passado', () => { 
    expect(handlerElephants()).toBeUndefined();
  })

  it('Verifica se retorna null quando passado uma string invalida', () => { 
    expect(handlerElephants('trybe')).toBeNull();
  })
});
