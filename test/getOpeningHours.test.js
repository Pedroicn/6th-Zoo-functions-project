const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se retorna os dias com horarios disponiveis', () => {
    const hoursDay = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(hoursDay);
  });

  it('Verifica se retorna the zoo is closed passado os parametro Monday e 09:00-AM', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });

  it('Verifica se retorna the zoo is open passado os parametro Tuesday e 09:00-AM', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });

  it('Verifica se retorna the zoo is closed passado os parametro Wednesday e 09:00-PM', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });

  it('Verifica se ao passar dia inexistente retorna mensagem de erro', () => {
    expect(() => getOpeningHours('trybe', '09:00-PM')).toThrow('The day must be valid. Example: Monday');
  });

  it('Verifica se ao passar abreviação invalida retorna mensagem de erro', () => {
    expect(() => getOpeningHours('Monday', '09:00-PQ')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('Verifica se ao passar um hora fora do intervalo de 0 e 12 retorna mensagem de erro', () => {
    expect(() => getOpeningHours('Monday', '15:00-PM')).toThrow('The hour must be between 0 and 12');
  });

  it('Verifica se ao passar os minutos fora do intervalo de 0 e 59 retorna mensagem de erro', () => {
    expect(() => getOpeningHours('Monday', '09:65-PM')).toThrow('The minutes must be between 0 and 59');
  });

  it('Verifica se ao passar as horas for diferente de numero retorna mensagem de erro', () => {
    expect(() => getOpeningHours('Monday', 'A:00-PM')).toThrow('The hour should represent a number');
  });
});
