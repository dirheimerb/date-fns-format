import { DateFormat, DefinedFormatOptions, FormatOption } from '../src/date-format';

describe('DateFormat', () => {
  it('should have the correct values for Era', () => {
    expect(DateFormat.EraShort).toBe('G');
    expect(DateFormat.EraLong).toBe('GGGG');
    expect(DateFormat.EraNarrow).toBe('GGGGG');
  });

  it('should have the correct values for Calendar Year', () => {
    expect(DateFormat.Year).toBe('y');
    expect(DateFormat.YearOrdinal).toBe('yo');
    expect(DateFormat.YearTwoDigit).toBe('yy');
    expect(DateFormat.YearThreeDigit).toBe('yyy');
    expect(DateFormat.YearFourDigit).toBe('yyyy');
    expect(DateFormat.YearMinimumFiveDigit).toBe('yyyyy');
  });

  // Add more tests for other date formats...

});describe('FormatOption', () => {
  it('should have the correct values for Era', () => {
    expect(FormatOption.EraShort).toBe('G');
    expect(FormatOption.EraLong).toBe('GGGG');
    expect(FormatOption.EraNarrow).toBe('GGGGG');
  });

  it('should have the correct values for Calendar Year', () => {
    expect(FormatOption.Year).toBe('y');
    expect(FormatOption.YearOrdinal).toBe('yo');
    expect(FormatOption.YearTwoDigit).toBe('yy');
    expect(FormatOption.YearThreeDigit).toBe('yyy');
    expect(FormatOption.YearFourDigit).toBe('yyyy');
    expect(FormatOption.YearMinimumFiveDigit).toBe('yyyyy');
  });

  // Add more tests for other format options...

});

describe('DefinedFormatOptions', () => {
  it('should have the correct values for Era', () => {
    expect(DefinedFormatOptions.EraShort).toBe('G');
    expect(DefinedFormatOptions.EraLong).toBe('GGGG');
    expect(DefinedFormatOptions.EraNarrow).toBe('GGGGG');
  });

  it('should have the correct values for Calendar Year', () => {
    expect(DefinedFormatOptions.Year).toBe('y');
    expect(DefinedFormatOptions.YearOrdinal).toBe('yo');
    expect(DefinedFormatOptions.YearTwoDigit).toBe('yy');
    expect(DefinedFormatOptions.YearThreeDigit).toBe('yyy');
    expect(DefinedFormatOptions.YearFourDigit).toBe('yyyy');
    expect(DefinedFormatOptions.YearMinimumFiveDigit).toBe('yyyyy');
  });

  // Add more tests for other format options...

});