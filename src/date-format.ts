import { DateFormatOptions, DayFormatOptions, MonthFormatOptions, WeekFormatOptions, WeekYearFormatOptions, YearFormatOptions } from '.';

const enum DateFormat {
    // Era
    EraShort = 'G',
    EraLong = 'GGGG',
    EraNarrow = 'GGGGG',

    // Calendar Year
    Year = 'y',
    YearOrdinal = 'yo',
    YearTwoDigit = 'yy',
    YearThreeDigit = 'yyy',
    YearFourDigit = 'yyyy',
    YearMinimumFiveDigit = 'yyyyy',

    // Local Week-Numbering Year
    LocalWeekYear = 'Y',
    LocalWeekYearOrdinal = 'Yo',
    LocalWeekYearTwoDigit = 'YY',
    LocalWeekYearThreeDigit = 'YYY',
    LocalWeekYearFourDigit = 'YYYY',
    LocalWeekYearMinimumFiveDigit = 'YYYYY',

    // ISO Week-Numbering Year
    ISOWeekYear = 'R',
    ISOWeekYearTwoDigit = 'RR',
    ISOWeekYearThreeDigit = 'RRR',
    ISOWeekYearFourDigit = 'RRRR',
    ISOWeekYearMinimumFiveDigit = 'RRRRR',

    // Extended Year
    ExtendedYear = 'u',
    ExtendedYearTwoDigit = 'uu',
    ExtendedYearThreeDigit = 'uuu',
    ExtendedYearFourDigit = 'uuuu',
    ExtendedYearMinimumFiveDigit = 'uuuuu',

    // Quarter (Formatting)
    Quarter = 'Q',
    QuarterOrdinal = 'Qo',
    QuarterTwoDigit = 'QQ',
    QuarterAbbreviated = 'QQQ',
    QuarterFull = 'QQQQ',
    QuarterNarrow = 'QQQQQ',

    // Quarter (Stand-Alone)
    QuarterStandAlone = 'q',
    QuarterStandAloneOrdinal = 'qo',
    QuarterStandAloneTwoDigit = 'qq',
    QuarterStandAloneAbbreviated = 'qqq',
    QuarterStandAloneFull = 'qqqq',
    QuarterStandAloneNarrow = 'qqqqq',

    // Month (Formatting)
    Month = 'M',
    MonthOrdinal = 'Mo',
    MonthTwoDigit = 'MM',
    MonthAbbreviated = 'MMM',
    MonthFull = 'MMMM',
    MonthNarrow = 'MMMMM',

    // Month (Stand-Alone)
    MonthStandAlone = 'L',
    MonthStandAloneOrdinal = 'Lo',
    MonthStandAloneTwoDigit = 'LL',
    MonthStandAloneAbbreviated = 'LLL',
    MonthStandAloneFull = 'LLLL',
    MonthStandAloneNarrow = 'LLLLL',

    // Local Week of Year
    LocalWeekOfYear = 'w',
    LocalWeekOfYearOrdinal = 'wo',
    LocalWeekOfYearTwoDigit = 'ww',

    // ISO Week of Year
    ISOWeekOfYear = 'I',
    ISOWeekOfYearOrdinal = 'Io',
    ISOWeekOfYearTwoDigit = 'II',

    // Day of Month
    DayOfMonth = 'd',
    DayOfMonthOrdinal = 'do',
    DayOfMonthTwoDigit = 'dd',

    // Day of Year
    DayOfYear = 'D',
    DayOfYearOrdinal = 'Do',
    DayOfYearTwoDigit = 'DD',
    DayOfYearThreeDigit = 'DDD',
    DayOfYearAtLeastFourDigit = 'DDDD',

    // Day of Week (Formatting)
    DayOfWeekAbbreviated = 'E..EEE',
    DayOfWeekFull = 'EEEE',
    DayOfWeekNarrow = 'EEEEE',
    DayOfWeekShort = 'EEEEEE',

    // ISO Day of Week (Formatting)
    ISODayOfWeek = 'i',
    ISODayOfWeekOrdinal = 'io',
    ISODayOfWeekTwoDigit = 'ii',
    ISODayOfWeekAbbreviated = 'iii',
    ISODayOfWeekFull = 'iiii',
    ISODayOfWeekNarrow = 'iiiii',
    ISODayOfWeekShort = 'iiiiii',

    // Local Day of Week (Formatting)
    LocalDayOfWeek = 'e',
    LocalDayOfWeekOrdinal = 'eo',
    LocalDayOfWeekTwoDigit = 'ee',
    LocalDayOfWeekAbbreviated = 'eee',
    LocalDayOfWeekFull = 'eeee',
    LocalDayOfWeekNarrow = 'eeeee',
    LocalDayOfWeekShort = 'eeeeee',

    // Local Day of Week (Stand-Alone)
    LocalDayOfWeekStandAlone = 'c',
    LocalDayOfWeekStandAloneOrdinal = 'co',
    LocalDayOfWeekStandAloneTwoDigit = 'cc',
    LocalDayOfWeekStandAloneAbbreviated = 'ccc',
    LocalDayOfWeekStandAloneFull = 'cccc',
    LocalDayOfWeekStandAloneNarrow = 'ccccc',
    LocalDayOfWeekStandAloneShort = 'cccccc',

    // AM/PM
    AMPMUpper = 'a..aa',
    AMPMLower = 'aaa',
    AMPMFull = 'aaaa',
    AMPMNarrow = 'aaaaa',

    // AM/PM, Noon, Midnight
    FlexibleDayPeriodUpper = 'b..bb',
    FlexibleDayPeriodLower = 'bbb',
    FlexibleDayPeriodFull = 'bbbb',
    FlexibleDayPeriodNarrow = 'bbbbb',

    // Flexible Day Period
    FlexibleDayPeriod = 'B..BBB',
    FlexibleDayPeriodFullText = 'BBBB',
    FlexibleDayPeriodNarrowText = 'BBBBB',

    // Hour
    Hour12 = 'h',
    Hour12Ordinal = 'ho',
    Hour12TwoDigit = 'hh',

    // Hour [0-23]
    Hour24 = 'H',
    Hour24Ordinal = 'Ho',
    Hour24TwoDigit = 'HH',

    // Hour [0-11]
    Hour12ZeroBased = 'K',
    Hour12ZeroBasedOrdinal = 'Ko',
    Hour12ZeroBasedTwoDigit = 'KK',

    // Hour [1-24]
    Hour24OneBased = 'k',
    Hour24OneBasedOrdinal = 'ko',
    Hour24OneBasedTwoDigit = 'kk',

    // Minute
    Minute = 'm',
    MinuteOrdinal = 'mo',
    MinuteTwoDigit = 'mm',

    // Second
    Second = 's',
    SecondOrdinal = 'so',
    SecondTwoDigit = 'ss',

    // Fraction of Second
    FractionOfSecond1 = 'S',
    FractionOfSecond2 = 'SS',
    FractionOfSecond3 = 'SSS',
    FractionOfSecondExtended = 'SSSS',

    // Timezone (ISO-8601 with Z)
    TimezoneISOWithZShort = 'X',
    TimezoneISOWithZLong = 'XXX',

    // Timezone (ISO-8601 without Z)
    TimezoneISOWithoutZShort = 'x',
    TimezoneISOWithoutZLong = 'xxx',

    // Timezone (GMT)
    TimezoneGMTShort = 'O...OOO',
    TimezoneGMTLong = 'OOOO',

    // Timezone (Specific Non-location)
    TimezoneSpecificShort = 'z...zzz',
    TimezoneSpecificLong = 'zzzz',

    // Seconds Timestamp
    SecondsTimestamp = 't',
    MillisecondsTimestamp = 'T',

    // Long Localized Date and Time
    LongLocalizedDate = 'P',
    LongLocalizedTime = 'p',
    CombinedDateAndTime = 'Pp'
}


/**
 * Options for formatting dates using the `date-fns-format` library.
 */
const FormatOption: DateFormatOptions = {
    // Era
    EraShort: DateFormat.EraShort,
    EraLong: DateFormat.EraLong,
    EraNarrow: DateFormat.EraNarrow,

    // Calendar Year
    Year: DateFormat.Year,
    YearOrdinal: DateFormat.YearOrdinal,
    YearTwoDigit: DateFormat.YearTwoDigit,
    YearThreeDigit: DateFormat.YearThreeDigit,
    YearFourDigit: DateFormat.YearFourDigit,
    YearMinimumFiveDigit: DateFormat.YearMinimumFiveDigit,

    // Local Week-Numbering Year
    LocalWeekYear: DateFormat.LocalWeekYear,
    LocalWeekYearOrdinal: DateFormat.LocalWeekYearOrdinal,
    LocalWeekYearTwoDigit: DateFormat.LocalWeekYearTwoDigit,
    LocalWeekYearThreeDigit: DateFormat.LocalWeekYearThreeDigit,
    LocalWeekYearFourDigit: DateFormat.LocalWeekYearFourDigit,
    LocalWeekYearMinimumFiveDigit: DateFormat.LocalWeekYearMinimumFiveDigit,

    // ISO Week-Numbering Year
    ISOWeekYear: DateFormat.ISOWeekYear,
    ISOWeekYearTwoDigit: DateFormat.ISOWeekYearTwoDigit,
    ISOWeekYearThreeDigit: DateFormat.ISOWeekYearThreeDigit,
    ISOWeekYearFourDigit: DateFormat.ISOWeekYearFourDigit,
    ISOWeekYearMinimumFiveDigit: DateFormat.ISOWeekYearMinimumFiveDigit,

    // Extended Year
    ExtendedYear: DateFormat.ExtendedYear,
    ExtendedYearTwoDigit: DateFormat.ExtendedYearTwoDigit,
    ExtendedYearThreeDigit: DateFormat.ExtendedYearThreeDigit,
    ExtendedYearFourDigit: DateFormat.ExtendedYearFourDigit,
    ExtendedYearMinimumFiveDigit: DateFormat.ExtendedYearMinimumFiveDigit,

    // Quarter (Formatting)
    Quarter: DateFormat.Quarter,
    QuarterOrdinal: DateFormat.QuarterOrdinal,
    QuarterTwoDigit: DateFormat.QuarterTwoDigit,
    QuarterAbbreviated: DateFormat.QuarterAbbreviated,
    QuarterFull: DateFormat.QuarterFull,
    QuarterNarrow: DateFormat.QuarterNarrow,

    // Quarter (Stand-Alone)
    QuarterStandAlone: DateFormat.QuarterStandAlone,
    QuarterStandAloneOrdinal: DateFormat.QuarterStandAloneOrdinal,
    QuarterStandAloneTwoDigit: DateFormat.QuarterStandAloneTwoDigit,
    QuarterStandAloneAbbreviated: DateFormat.QuarterStandAloneAbbreviated,
    QuarterStandAloneFull: DateFormat.QuarterStandAloneFull,
    QuarterStandAloneNarrow: DateFormat.QuarterStandAloneNarrow,

    // Month (Formatting)
    Month: DateFormat.Month,
    MonthOrdinal: DateFormat.MonthOrdinal,
    MonthTwoDigit: DateFormat.MonthTwoDigit,
    MonthAbbreviated: DateFormat.MonthAbbreviated,
    MonthFull: DateFormat.MonthFull,
    MonthNarrow: DateFormat.MonthNarrow,

    // Month (Stand-Alone)
    MonthStandAlone: DateFormat.MonthStandAlone,
    MonthStandAloneOrdinal: DateFormat.MonthStandAloneOrdinal,
    MonthStandAloneTwoDigit: DateFormat.MonthStandAloneTwoDigit,
    MonthStandAloneAbbreviated: DateFormat.MonthStandAloneAbbreviated,
    MonthStandAloneFull: DateFormat.MonthStandAloneFull,
    MonthStandAloneNarrow: DateFormat.MonthStandAloneNarrow,

    // Local Week of Year
    LocalWeekOfYear: DateFormat.LocalWeekOfYear,
    LocalWeekOfYearOrdinal: DateFormat.LocalWeekOfYearOrdinal,
    LocalWeekOfYearTwoDigit: DateFormat.LocalWeekOfYearTwoDigit,

    // ISO Week of Year
    ISOWeekOfYear: DateFormat.ISOWeekOfYear,
    ISOWeekOfYearOrdinal: DateFormat.ISOWeekOfYearOrdinal,
    ISOWeekOfYearTwoDigit: DateFormat.ISOWeekOfYearTwoDigit,

    // Day of Month
    DayOfMonth: DateFormat.DayOfMonth,
    DayOfMonthOrdinal: DateFormat.DayOfMonthOrdinal,
    DayOfMonthTwoDigit: DateFormat.DayOfMonthTwoDigit,

    // Day of Year
    DayOfYear: DateFormat.DayOfYear,
    DayOfYearOrdinal: DateFormat.DayOfYearOrdinal,
    DayOfYearTwoDigit: DateFormat.DayOfYearTwoDigit,
    DayOfYearThreeDigit: DateFormat.DayOfYearThreeDigit,
    DayOfYearAtLeastFourDigit: DateFormat.DayOfYearAtLeastFourDigit,

    // Day of Week (Formatting)
    DayOfWeekAbbreviated: DateFormat.DayOfWeekAbbreviated,
    DayOfWeekFull: DateFormat.DayOfWeekFull,
    DayOfWeekNarrow: DateFormat.DayOfWeekNarrow,
    DayOfWeekShort: DateFormat.DayOfWeekShort,

    // ISO Day of Week (Formatting)
    ISODayOfWeek: DateFormat.ISODayOfWeek,
    ISODayOfWeekOrdinal: DateFormat.ISODayOfWeekOrdinal,
    ISODayOfWeekTwoDigit: DateFormat.ISODayOfWeekTwoDigit,
    ISODayOfWeekAbbreviated: DateFormat.ISODayOfWeekAbbreviated,
    ISODayOfWeekFull: DateFormat.ISODayOfWeekFull,
    ISODayOfWeekNarrow: DateFormat.ISODayOfWeekNarrow,
    ISODayOfWeekShort: DateFormat.ISODayOfWeekShort,

    // Local Day of Week (Formatting)
    LocalDayOfWeek: DateFormat.LocalDayOfWeek,
    LocalDayOfWeekOrdinal: DateFormat.LocalDayOfWeekOrdinal,
    LocalDayOfWeekTwoDigit: DateFormat.LocalDayOfWeekTwoDigit,
    LocalDayOfWeekAbbreviated:DateFormat.LocalDayOfWeekAbbreviated,
    LocalDayOfWeekFull:DateFormat.LocalDayOfWeekFull,
    LocalDayOfWeekNarrow: DateFormat.LocalDayOfWeekNarrow,
    LocalDayOfWeekShort: DateFormat.LocalDayOfWeekShort,

    // Local Day of Week (Stand-Alone)
    LocalDayOfWeekStandAlone: DateFormat.LocalDayOfWeekStandAlone,
    LocalDayOfWeekStandAloneOrdinal: DateFormat.LocalDayOfWeekStandAloneOrdinal,
    LocalDayOfWeekStandAloneTwoDigit: DateFormat.LocalDayOfWeekStandAloneTwoDigit,
    LocalDayOfWeekStandAloneAbbreviated:  DateFormat.LocalDayOfWeekStandAloneAbbreviated,
    LocalDayOfWeekStandAloneFull:  DateFormat.LocalDayOfWeekStandAloneFull,
    LocalDayOfWeekStandAloneNarrow: DateFormat.LocalDayOfWeekStandAloneNarrow,
    LocalDayOfWeekStandAloneShort: DateFormat.LocalDayOfWeekStandAloneShort,

    // AM/PM
    AMPMUpper: DateFormat.AMPMUpper,
    AMPMLower: DateFormat.AMPMLower,
    AMPMFull:  DateFormat.AMPMFull,
    AMPMNarrow: DateFormat.AMPMNarrow,

    // AM/PM, Noon, Midnight
    FlexibleDayPeriodUpper: DateFormat.FlexibleDayPeriodUpper,
    FlexibleDayPeriodLower:  DateFormat.FlexibleDayPeriodLower,
    FlexibleDayPeriodFull:  DateFormat.FlexibleDayPeriodFull,
    FlexibleDayPeriodNarrow: DateFormat.FlexibleDayPeriodNarrow,

    // Flexible Day Period
    FlexibleDayPeriod: DateFormat.FlexibleDayPeriod,
    FlexibleDayPeriodFullText:  DateFormat.FlexibleDayPeriodFullText,
    FlexibleDayPeriodNarrowText:  DateFormat.FlexibleDayPeriodNarrowText,

    // Hour
    Hour12: DateFormat.Hour12,
    Hour12Ordinal: DateFormat.Hour12Ordinal,
    Hour12TwoDigit: DateFormat.Hour12TwoDigit,

    // Hour [0-23]
    Hour24: DateFormat.Hour24,
    Hour24Ordinal: DateFormat.Hour24Ordinal,
    Hour24TwoDigit: DateFormat.Hour24TwoDigit,

    // Hour [0-11]
    Hour12ZeroBased: DateFormat.Hour12ZeroBased,
    Hour12ZeroBasedOrdinal: DateFormat.Hour12ZeroBasedOrdinal,
    Hour12ZeroBasedTwoDigit: DateFormat.Hour12ZeroBasedTwoDigit,

    // Hour [1-24]
    Hour24OneBased: DateFormat.Hour24OneBased,
    Hour24OneBasedOrdinal: DateFormat.Hour24OneBasedOrdinal,
    Hour24OneBasedTwoDigit: DateFormat.Hour24OneBasedTwoDigit,

    // Minute
    Minute: DateFormat.Minute,
    MinuteOrdinal: DateFormat.MinuteOrdinal,
    MinuteTwoDigit: DateFormat.MinuteTwoDigit,

    // Second
    Second: DateFormat.Second,
    SecondOrdinal: DateFormat.SecondOrdinal,
    SecondTwoDigit:DateFormat.SecondTwoDigit,

    // Fraction of Second
    FractionOfSecond1: DateFormat.FractionOfSecond1,
    FractionOfSecond2: DateFormat.FractionOfSecond2,
    FractionOfSecond3: DateFormat.FractionOfSecond3,
    FractionOfSecondExtended: DateFormat.FractionOfSecondExtended,

    // Timezone (ISO-8601 with Z)
    TimezoneISOWithZShort: DateFormat.TimezoneISOWithZShort,
    TimezoneISOWithZLong: DateFormat.TimezoneISOWithZLong,

    // Timezone (ISO-8601 without Z)
    TimezoneISOWithoutZShort: DateFormat.TimezoneISOWithoutZShort,
    TimezoneISOWithoutZLong: DateFormat.TimezoneISOWithoutZLong,

    // Timezone (GMT)
    TimezoneGMTShort: DateFormat.TimezoneGMTShort,
    TimezoneGMTLong: DateFormat.TimezoneGMTLong,

    // Timezone (Specific Non-location)
    TimezoneSpecificShort: DateFormat.TimezoneSpecificShort,
    TimezoneSpecificLong: DateFormat.TimezoneSpecificLong,

    // Seconds Timestamp
    SecondsTimestamp: DateFormat.SecondsTimestamp,
    MillisecondsTimestamp: DateFormat.MillisecondsTimestamp,

    // Long Localized Date and Time
    LongLocalizedDate: DateFormat.LongLocalizedDate,
    LongLocalizedTime: DateFormat.LongLocalizedTime,
    CombinedDateAndTime: DateFormat.CombinedDateAndTime
} as const;

const DefinedFormatOptions: DateFormatOptions = {
    // Era
    EraShort: 'G',
    EraLong: 'GGGG',
    EraNarrow: 'GGGGG',

    // Calendar Year
    Year: 'y',
    YearOrdinal: 'yo',
    YearTwoDigit: 'yy',
    YearThreeDigit: 'yyy',
    YearFourDigit: 'yyyy',
    YearMinimumFiveDigit: 'yyyyy',

    // Local Week-Numbering Year
    LocalWeekYear: 'Y',
    LocalWeekYearOrdinal: 'Yo',
    LocalWeekYearTwoDigit: 'YY',
    LocalWeekYearThreeDigit: 'YYY',
    LocalWeekYearFourDigit: 'YYYY',
    LocalWeekYearMinimumFiveDigit: 'YYYYY',

    // ISO Week-Numbering Year
    ISOWeekYear: 'R',
    ISOWeekYearTwoDigit: 'RR',
    ISOWeekYearThreeDigit: 'RRR',
    ISOWeekYearFourDigit: 'RRRR',
    ISOWeekYearMinimumFiveDigit: 'RRRRR',

    // Extended Year
    ExtendedYear: 'u',
    ExtendedYearTwoDigit: 'uu',
    ExtendedYearThreeDigit: 'uuu',
    ExtendedYearFourDigit: 'uuuu',
    ExtendedYearMinimumFiveDigit: 'uuuuu',

    // Quarter (Formatting)
    Quarter: 'Q',
    QuarterOrdinal: 'Qo',
    QuarterTwoDigit: 'QQ',
    QuarterAbbreviated: 'QQQ',
    QuarterFull: 'QQQQ',
    QuarterNarrow: 'QQQQQ',

    // Quarter (Stand-Alone)
    QuarterStandAlone: 'q',
    QuarterStandAloneOrdinal: 'qo',
    QuarterStandAloneTwoDigit: 'qq',
    QuarterStandAloneAbbreviated: 'qqq',
    QuarterStandAloneFull: 'qqqq',
    QuarterStandAloneNarrow: 'qqqqq',

    // Month (Formatting)
    Month: 'M',
    MonthOrdinal: 'Mo',
    MonthTwoDigit: 'MM',
    MonthAbbreviated: 'MMM',
    MonthFull: 'MMMM',
    MonthNarrow: 'MMMMM',

    // Month (Stand-Alone)
    MonthStandAlone: 'L',
    MonthStandAloneOrdinal: 'Lo',
    MonthStandAloneTwoDigit: 'LL',
    MonthStandAloneAbbreviated: 'LLL',
    MonthStandAloneFull: 'LLLL',
    MonthStandAloneNarrow: 'LLLLL',

    // Local Week of Year
    LocalWeekOfYear: 'w',
    LocalWeekOfYearOrdinal: 'wo',
    LocalWeekOfYearTwoDigit: 'ww',

    // ISO Week of Year
    ISOWeekOfYear: 'I',
    ISOWeekOfYearOrdinal: 'Io',
    ISOWeekOfYearTwoDigit: 'II',

    // Day of Month
    DayOfMonth: 'd',
    DayOfMonthOrdinal: 'do',
    DayOfMonthTwoDigit: 'dd',

    // Day of Year
    DayOfYear: 'D',
    DayOfYearOrdinal: 'Do',
    DayOfYearTwoDigit: 'DD',
    DayOfYearThreeDigit: 'DDD',
    DayOfYearAtLeastFourDigit: 'DDDD',

    // Day of Week (Formatting)
    DayOfWeekAbbreviated: 'E..EEE',
    DayOfWeekFull: 'EEEE',
    DayOfWeekNarrow: 'EEEEE',
    DayOfWeekShort: 'EEEEEE',

    // ISO Day of Week (Formatting)
    ISODayOfWeek: 'i',
    ISODayOfWeekOrdinal: 'io',
    ISODayOfWeekTwoDigit: 'ii',
    ISODayOfWeekAbbreviated: 'iii',
    ISODayOfWeekFull: 'iiii',
    ISODayOfWeekNarrow: 'iiiii',
    ISODayOfWeekShort: 'iiiiii',

    // Local Day of Week (Formatting)
    LocalDayOfWeek: 'e',
    LocalDayOfWeekOrdinal: 'eo',
    LocalDayOfWeekTwoDigit: 'ee',
    LocalDayOfWeekAbbreviated: 'eee',
    LocalDayOfWeekFull: 'eeee',
    LocalDayOfWeekNarrow: 'eeeee',
    LocalDayOfWeekShort: 'eeeeee',

    // Local Day of Week (Stand-Alone)
    LocalDayOfWeekStandAlone: 'c',
    LocalDayOfWeekStandAloneOrdinal: 'co',
    LocalDayOfWeekStandAloneTwoDigit: 'cc',
    LocalDayOfWeekStandAloneAbbreviated: 'ccc',
    LocalDayOfWeekStandAloneFull: 'cccc',
    LocalDayOfWeekStandAloneNarrow: 'ccccc',
    LocalDayOfWeekStandAloneShort: 'cccccc',

    // AM/PM
    AMPMUpper: 'a..aa',
    AMPMLower: 'aaa',
    AMPMFull: 'aaaa',
    AMPMNarrow: 'aaaaa',

    // AM/PM, Noon, Midnight
    FlexibleDayPeriodUpper: 'b..bb',
    FlexibleDayPeriodLower: 'bbb',
    FlexibleDayPeriodFull: 'bbbb',
    FlexibleDayPeriodNarrow: 'bbbbb',

    // Flexible Day Period
    FlexibleDayPeriod: 'B..BBB',
    FlexibleDayPeriodFullText: 'BBBB',
    FlexibleDayPeriodNarrowText: 'BBBBB',

    // Hour
    Hour12: 'h',
    Hour12Ordinal: 'ho',
    Hour12TwoDigit: 'hh',

    // Hour [0-23]
    Hour24: 'H',
    Hour24Ordinal: 'Ho',
    Hour24TwoDigit: 'HH',

    // Hour [0-11]
    Hour12ZeroBased: 'K',
    Hour12ZeroBasedOrdinal: 'Ko',
    Hour12ZeroBasedTwoDigit: 'KK',

    // Hour [1-24]
    Hour24OneBased: 'k',
    Hour24OneBasedOrdinal: 'ko',
    Hour24OneBasedTwoDigit: 'kk',

    // Minute
    Minute: 'm',
    MinuteOrdinal: 'mo',
    MinuteTwoDigit: 'mm',

    // Second
    Second: 's',
    SecondOrdinal: 'so',
    SecondTwoDigit: 'ss',

    // Fraction of Second
    FractionOfSecond1: 'S',
    FractionOfSecond2: 'SS',
    FractionOfSecond3: 'SSS',
    FractionOfSecondExtended: 'SSSS',

    // Timezone (ISO-8601 with Z)
    TimezoneISOWithZShort: 'X',
    TimezoneISOWithZLong: 'XXX',

    // Timezone (ISO-8601 without Z)
    TimezoneISOWithoutZShort: 'x',
    TimezoneISOWithoutZLong: 'xxx',

    // Timezone (GMT)
    TimezoneGMTShort: 'O...OOO',
    TimezoneGMTLong: 'OOOO',

    // Timezone (Specific Non-location)
    TimezoneSpecificShort: 'z...zzz',
    TimezoneSpecificLong: 'zzzz',

    // Seconds Timestamp
    SecondsTimestamp: 't',
    MillisecondsTimestamp: 'T',

    // Long Localized Date and Time
    LongLocalizedDate: 'P',
    LongLocalizedTime: 'p',
    CombinedDateAndTime: 'Pp'
} as const;


export const YearFormat: YearFormatOptions = {
    Year: 'y',
    YearOrdinal: 'yo',
    YearTwoDigit: 'yy',
    YearThreeDigit: 'yyy',
    YearFourDigit: 'yyyy',
    YearMinimumFiveDigit: 'yyyyy',
} as const;


export const MonthFormat: MonthFormatOptions = {
    Month: 'M',
    MonthOrdinal: 'Mo',
    MonthTwoDigit: 'MM',
    MonthAbbreviated: 'MMM',
    MonthFull: 'MMMM',
    MonthNarrow: 'MMMMM',
} as const;

export const DayFormat: DayFormatOptions = {
    DayOfMonth: 'd',
    DayOfMonthOrdinal: 'do',
    DayOfMonthTwoDigit: 'dd',
} as const;


export const WeekFormat: WeekFormatOptions = {
    LocalWeekOfYear: 'w',
    LocalWeekOfYearOrdinal: 'wo',
    LocalWeekOfYearTwoDigit: 'ww',
} as const;


export const WeekYearFormat: WeekYearFormatOptions = {
    LocalWeekYear: 'Y',
    LocalWeekYearOrdinal: 'Yo',
    LocalWeekYearTwoDigit: 'YY',
    LocalWeekYearThreeDigit: 'YYY',
    LocalWeekYearFourDigit: 'YYYY',
    LocalWeekYearMinimumFiveDigit: 'YYYYY',
} as const;

export {
    DateFormat,
    FormatOption,
    DefinedFormatOptions
}