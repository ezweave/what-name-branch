import { processAnswers } from './processAnswers';

describe(processAnswers, () => {
  it('generates a response and prints it to a logger', () => {
    const mockLog = jest.fn();
    const response = processAnswers({
      description: 'This is a description',
      name: 'FOO-123',
      type: 'BUG',
    }, mockLog);

    expect(typeof response).toEqual('string');

    expect(mockLog).toHaveBeenCalledWith(response);
  });
});
