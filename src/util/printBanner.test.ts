import { printBanner } from './printBanner';

describe(printBanner, () => {
  it('prints the banner', () => {
    const logger = jest.fn();
    printBanner(logger);
    const call = logger.mock.calls[0][0];
    expect(call).toMatchSnapshot();
  });
});
