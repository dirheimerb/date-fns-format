import { DateFormatOptions, DayFormatOptions, MonthFormatOptions, WeekFormatOptions, WeekYearFormatOptions, YearFormatOptions } from '.';
declare const enum DateFormat {
    EraShort = "G",
    EraLong = "GGGG",
    EraNarrow = "GGGGG",
    Year = "y",
    YearOrdinal = "yo",
    YearTwoDigit = "yy",
    YearThreeDigit = "yyy",
    YearFourDigit = "yyyy",
    YearMinimumFiveDigit = "yyyyy",
    LocalWeekYear = "Y",
    LocalWeekYearOrdinal = "Yo",
    LocalWeekYearTwoDigit = "YY",
    LocalWeekYearThreeDigit = "YYY",
    LocalWeekYearFourDigit = "YYYY",
    LocalWeekYearMinimumFiveDigit = "YYYYY",
    ISOWeekYear = "R",
    ISOWeekYearTwoDigit = "RR",
    ISOWeekYearThreeDigit = "RRR",
    ISOWeekYearFourDigit = "RRRR",
    ISOWeekYearMinimumFiveDigit = "RRRRR",
    ExtendedYear = "u",
    ExtendedYearTwoDigit = "uu",
    ExtendedYearThreeDigit = "uuu",
    ExtendedYearFourDigit = "uuuu",
    ExtendedYearMinimumFiveDigit = "uuuuu",
    Quarter = "Q",
    QuarterOrdinal = "Qo",
    QuarterTwoDigit = "QQ",
    QuarterAbbreviated = "QQQ",
    QuarterFull = "QQQQ",
    QuarterNarrow = "QQQQQ",
    QuarterStandAlone = "q",
    QuarterStandAloneOrdinal = "qo",
    QuarterStandAloneTwoDigit = "qq",
    QuarterStandAloneAbbreviated = "qqq",
    QuarterStandAloneFull = "qqqq",
    QuarterStandAloneNarrow = "qqqqq",
    Month = "M",
    MonthOrdinal = "Mo",
    MonthTwoDigit = "MM",
    MonthAbbreviated = "MMM",
    MonthFull = "MMMM",
    MonthNarrow = "MMMMM",
    MonthStandAlone = "L",
    MonthStandAloneOrdinal = "Lo",
    MonthStandAloneTwoDigit = "LL",
    MonthStandAloneAbbreviated = "LLL",
    MonthStandAloneFull = "LLLL",
    MonthStandAloneNarrow = "LLLLL",
    LocalWeekOfYear = "w",
    LocalWeekOfYearOrdinal = "wo",
    LocalWeekOfYearTwoDigit = "ww",
    ISOWeekOfYear = "I",
    ISOWeekOfYearOrdinal = "Io",
    ISOWeekOfYearTwoDigit = "II",
    DayOfMonth = "d",
    DayOfMonthOrdinal = "do",
    DayOfMonthTwoDigit = "dd",
    DayOfYear = "D",
    DayOfYearOrdinal = "Do",
    DayOfYearTwoDigit = "DD",
    DayOfYearThreeDigit = "DDD",
    DayOfYearAtLeastFourDigit = "DDDD",
    DayOfWeekAbbreviated = "E..EEE",
    DayOfWeekFull = "EEEE",
    DayOfWeekNarrow = "EEEEE",
    DayOfWeekShort = "EEEEEE",
    ISODayOfWeek = "i",
    ISODayOfWeekOrdinal = "io",
    ISODayOfWeekTwoDigit = "ii",
    ISODayOfWeekAbbreviated = "iii",
    ISODayOfWeekFull = "iiii",
    ISODayOfWeekNarrow = "iiiii",
    ISODayOfWeekShort = "iiiiii",
    LocalDayOfWeek = "e",
    LocalDayOfWeekOrdinal = "eo",
    LocalDayOfWeekTwoDigit = "ee",
    LocalDayOfWeekAbbreviated = "eee",
    LocalDayOfWeekFull = "eeee",
    LocalDayOfWeekNarrow = "eeeee",
    LocalDayOfWeekShort = "eeeeee",
    LocalDayOfWeekStandAlone = "c",
    LocalDayOfWeekStandAloneOrdinal = "co",
    LocalDayOfWeekStandAloneTwoDigit = "cc",
    LocalDayOfWeekStandAloneAbbreviated = "ccc",
    LocalDayOfWeekStandAloneFull = "cccc",
    LocalDayOfWeekStandAloneNarrow = "ccccc",
    LocalDayOfWeekStandAloneShort = "cccccc",
    AMPMUpper = "a..aa",
    AMPMLower = "aaa",
    AMPMFull = "aaaa",
    AMPMNarrow = "aaaaa",
    FlexibleDayPeriodUpper = "b..bb",
    FlexibleDayPeriodLower = "bbb",
    FlexibleDayPeriodFull = "bbbb",
    FlexibleDayPeriodNarrow = "bbbbb",
    FlexibleDayPeriod = "B..BBB",
    FlexibleDayPeriodFullText = "BBBB",
    FlexibleDayPeriodNarrowText = "BBBBB",
    Hour12 = "h",
    Hour12Ordinal = "ho",
    Hour12TwoDigit = "hh",
    Hour24 = "H",
    Hour24Ordinal = "Ho",
    Hour24TwoDigit = "HH",
    Hour12ZeroBased = "K",
    Hour12ZeroBasedOrdinal = "Ko",
    Hour12ZeroBasedTwoDigit = "KK",
    Hour24OneBased = "k",
    Hour24OneBasedOrdinal = "ko",
    Hour24OneBasedTwoDigit = "kk",
    Minute = "m",
    MinuteOrdinal = "mo",
    MinuteTwoDigit = "mm",
    Second = "s",
    SecondOrdinal = "so",
    SecondTwoDigit = "ss",
    FractionOfSecond1 = "S",
    FractionOfSecond2 = "SS",
    FractionOfSecond3 = "SSS",
    FractionOfSecondExtended = "SSSS",
    TimezoneISOWithZShort = "X",
    TimezoneISOWithZLong = "XXX",
    TimezoneISOWithoutZShort = "x",
    TimezoneISOWithoutZLong = "xxx",
    TimezoneGMTShort = "O...OOO",
    TimezoneGMTLong = "OOOO",
    TimezoneSpecificShort = "z...zzz",
    TimezoneSpecificLong = "zzzz",
    SecondsTimestamp = "t",
    MillisecondsTimestamp = "T",
    LongLocalizedDate = "P",
    LongLocalizedTime = "p",
    CombinedDateAndTime = "Pp"
}
/**
 * Options for formatting dates using the `date-fns-format` library.
 */
declare const FormatOption: DateFormatOptions;
declare const DefinedFormatOptions: DateFormatOptions;
export declare const YearFormat: YearFormatOptions;
export declare const MonthFormat: MonthFormatOptions;
export declare const DayFormat: DayFormatOptions;
export declare const WeekFormat: WeekFormatOptions;
export declare const WeekYearFormat: WeekYearFormatOptions;
export { DateFormat, FormatOption, DefinedFormatOptions };
//# sourceMappingURL=date-format.d.ts.map