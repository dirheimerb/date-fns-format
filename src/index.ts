import { DateFormat, YearFormat, FormatOption, DefinedFormatOptions } from './date-format';

export {
    DateFormat,
    YearFormat,
    FormatOption,
    DefinedFormatOptions
};


export type DateFormatKeys = keyof typeof DateFormat;
/**
 * Options for formatting dates and times.
 */
export interface DateFormatOption {
    /**
     * Era
     * @default 'G'
     */
    EraAbbreviated: string;
    /**
     * Era
     * @default 'GGGG'
     */
    EraWide: string;
    /**
     * Era
     * @default 'GGGGG'
     */
    EraNarrow: string;
    /**
     * Calendar year
     * @default 'y'
     */
    YearOneDigit: string;
    /**
     * Calendar year
     * @default 'yo'
     */
    YearOrdinal: string;
    /**
     * Calendar year
     * @default 'yy'
     */
    YearTwoDigits: string;
    /**
     * Calendar year
     * @default 'yyy'
     */
    YearThreeDigits: string;
    /**
     * Calendar year
     * @default 'yyyy'
     */
    YearFourDigits: string;
    /**
     * Calendar year
     * @default 'yyyyy'
     */
    YearAtLeastFourDigits: string;
    /**
     * Local week-numbering year
     * @default 'Y'
     */
    WeekYearOneDigit: string;
    /**
     * Local week-numbering year
     * @default 'Yo'
     */
    WeekYearOrdinal: string;
    /**
     * Local week-numbering year
     * @default 'YY'
     */
    WeekYearTwoDigits: string;
    /**
     * Local week-numbering year
     * @default 'YYY'
     */
    WeekYearThreeDigits: string;
    /**
     * Local week-numbering year
     * @default 'YYYY'
     */
    WeekYearFourDigits: string;
    /**
     * Local week-numbering year
     * @default 'YYYYY'
     */
    WeekYearAtLeastFourDigits: string;
    /**
     * ISO week-numbering year
     * @default 'R'
     */
    ISOYearBasic: string;
    /**
     * ISO week-numbering year
     * @default 'RR'
     */
    ISOYearTwoDigits: string;
    /**
     * ISO week-numbering year
     * @default 'RRR'
     */
    ISOYearThreeDigits: string;
    /**
     * ISO week-numbering year
     * @default 'RRRR'
     */
    ISOYearFourDigits: string;
    /**
     * ISO week-numbering year
     * @default 'RRRRR'
     */
    ISOYearAtLeastFourDigits: string;
    /**
     * Extended year
     * @default 'u'
     */
    ExtendedYearOneDigit: string;
    /**
     * Extended year
     * @default 'uu'
     */
    ExtendedYearTwoDigits: string;
    /**
     * Extended year
     * @default 'uuu'
     */
    ExtendedYearThreeDigits: string;
    /**
     * Extended year
     * @default 'uuuu'
     */
    ExtendedYearFourDigits: string;
    /**
     * Extended year
     * @default 'uuuuu'
     */
    ExtendedYearAtLeastFourDigits: string;
    /**
     * Quarter (formatting and stand-alone)
     * @default 'Q'
     */
    QuarterOneDigit: string;
    /**
     * Quarter (formatting and stand-alone)
     * @default 'Qo'
     */
    QuarterOrdinal: string;
    /**
     * Quarter (formatting and stand-alone)
     * @default 'QQ'
     */
    QuarterTwoDigits: string;
    /**
     * Quarter (formatting and stand-alone)
     * @default 'QQQ'
     */
    QuarterThreeLetter: string;
    /**
     * Quarter (formatting and stand-alone)
     * @default 'QQQQ'
     */
    QuarterFull: string;
    /**
     * Quarter (formatting and stand-alone)
     * @default 'QQQQQ'
     */
    QuarterNarrow: string;
    /**
     * Quarter (formatting and stand-alone)
     * @default 'q'
     */
    QuarterStandaloneOneDigit: string;
    /**
     * Quarter (formatting and stand-alone)
     * @default 'qo'
     */
    QuarterStandaloneOrdinal: string;
    /**
     * Quarter (formatting and stand-alone)
     * @default 'qq'
     */
    QuarterStandaloneTwoDigits: string;
    /**
     * Quarter (formatting and stand-alone)
     * @default 'qqq'
     */
    QuarterStandaloneThreeLetter: string;
    /**
     * Quarter (formatting and stand-alone)
     * @default 'qqqq'
     */
    QuarterStandaloneFull: string;
    /**
     * Quarter (formatting and stand-alone)
     * @default 'qqqqq'
     */
    QuarterStandaloneNarrow: string;
    /**
     * Month (formatting and stand-alone)
     * @default 'M'
     */
    MonthOneDigit: string;
    /**
     * Month (formatting and stand-alone)
     * @default 'Mo'
     */
    MonthOrdinal: string;
    /**
     * Month (formatting and stand-alone)
     * @default 'MM'
     */
    MonthTwoDigits: string;
    /**
     * Month (formatting and stand-alone)
     * @default 'MMM'
     */
    MonthThreeLetter: string;
    /**
     * Month (formatting and stand-alone)
     * @default 'MMMM'
     */
    MonthFull: string;
    /**
     * Month (formatting and stand-alone)
     * @default 'MMMMM'
     */
    MonthNarrow: string;
    /**
     * Month (formatting and stand-alone)
     * @default 'L'
     */
    MonthStandaloneOneDigit: string;
    /**
     * Month (formatting and stand-alone)
     * @default 'Lo'
     */
    MonthStandaloneOrdinal: string;
    /**
     * Month (formatting and stand-alone)
     * @default 'LL'
     */
    MonthStandaloneTwoDigits: string;
    /**
     * Month (formatting and stand-alone)
     * @default 'LLL'
     */
    MonthStandaloneThreeLetter: string;
    /**
     * Month (formatting and stand-alone)
     * @default 'LLLL'
     */
    MonthStandaloneFull: string;
    /**
     * Month (formatting and stand-alone)
     * @default 'LLLLL'
     */
    MonthStandaloneNarrow: string;
    /**
     * Local week of year
     * @default 'w'
     */
    LocalWeekOfYearOneDigit: string;
    /**
     * Local week of year
     * @default 'wo'
     */
    LocalWeekOfYearOrdinal: string;
    /**
     * Local week of year
     * @default 'ww'
     */
    LocalWeekOfYearTwoDigits: string;
    /**
     * ISO week of year
     * @default 'I'
     */
    ISOWeekOfYearOneDigit: string;
    /**
     * ISO week of year
     * @default 'Io'
     */
    ISOWeekOfYearOrdinal: string;
    /**
     * ISO week of year
     * @default 'II'
     */
    ISOWeekOfYearTwoDigits: string;
    /**
     * Day of month
     * @default 'd'
     */
    DayOfMonthOneDigit: string;
    /**
     * Day of month
     * @default 'do'
     */
    DayOfMonthOrdinal: string;
    /**
     * Day of month
     * @default 'dd'
     */
    DayOfMonthTwoDigits: string;
    /**
     * Day of year
     * @default 'D'
     */
    DayOfYearOneDigit: string;
    /**
     * Day of year
     * @default 'Do'
     */
    DayOfYearOrdinal: string;
    /**
     * Day of year
     * @default 'DD'
     */
    DayOfYearTwoDigits: string;
    /**
     * Day of year
     * @default 'DDD'
     */
    DayOfYearThreeDigits: string;
    /**
     * Day of year
     * @default 'DDDD'
     */
    DayOfYearAtLeastThreeDigits: string;
    /**
     * Day of week (formatting)
     * @default 'E..EEE'
     */
    DayOfWeekShort: string;
    /**
     * Day of week (formatting)
     * @default 'EEEE'
     */
    DayOfWeekFull: string;
    /**
     * Day of week (formatting)
     * @default 'EEEEE'
     */
    DayOfWeekNarrow: string;
    /**
     * Day of week (formatting)
     * @default 'EEEEEE'
     */
    DayOfWeekTwoLetter: string;
    /**
     * ISO day of week (formatting)
     * @default 'i..ii'
     */
    ISODayOfWeekOneDigit: string;
    /**
     * ISO day of week (formatting)
     * @default 'io'
     */
    ISODayOfWeekOrdinal: string;
    /**
     * ISO day of week (formatting)
     * @default 'ii'
     */
    ISODayOfWeekTwoDigits: string;
    /**
     * ISO day of week (formatting)
     * @default 'iii'
     */
    ISODayOfWeekThreeLetter: string;
    /**
     * ISO day of week (formatting)
     * @default 'iiii'
     */
    ISODayOfWeekFull: string;
    /**
     * ISO day of week (formatting)
     * @default 'iiiii'
     */
    ISODayOfWeekNarrow: string;
    /**
     * ISO day of week (formatting)
     * @default 'iiiiii'
     */
    ISODayOfWeekTwoLetter: string;
    /**
     * AM/PM
     * @default 'a'
     */
    AMPMUpper: string;
    /**
     * AM/PM
     * @default 'aaa'
     */
    AMPMLower: string;
    /**
     * AM/PM
     * @default 'aaaa'
     */
    AMPMFull: string;
    /**
     * AM/PM
     * @default 'aaaaa'
     */
    AMPMNarrow: string;
    /**
     * Timezone
     * @default 'z'
     */
    TimezoneISOWithZ: string;
    /**
     * Timezone
     * @default 'zz'
     */
    TimezoneISOExtendedWithZ: string;
    /**
     * Timezone
     * @default 'zzz'
     */
    TimezoneISOWithoutZ: string;
    /**
     * Timezone
     * @default 'zzz'
     */
    TimezoneISOExtendedWithoutZ: string;
    /**
     * Timezone
     * @default 'O...OOO'
     */
    TimezoneGMTShort: string;
    /**
     * Timezone
     * @default 'OOOO'
     */
    TimezoneGMTFull: string;
    /**
     * Timezone
     * @default 'z...zzz'
     */
    TimezoneSpecificShort: string;
    /**
     * Timezone
     * @default 'zzzz'
     */
    TimezoneSpecificFull: string;
    /**
     * Timestamp
     * @default 't'
     */
    SecondsTimestamp: string;
    /**
     * Timestamp
     * @default 'tt'
     */
    MillisecondsTimestamp: string;
    /**
     * Timestamp
     * @default 'ttt'
     */
    LongLocalizedDate: string;
    /**
     * Timestamp
     * @default 'tttt'
     */
    LongLocalizedTime: string;
    /**
     * Timestamp
     * @default 'ttttt'
     */
    CombinedDateAndTime: string;
}

export interface DateFormatOptions {
    EraShort: string; // 'G'
    EraLong: string; // 'GGGG'
    EraNarrow: string; // 'GGGGG'

    // Calendar Year
    Year: string; // 'y'
    YearOrdinal: string; // 'yo'
    YearTwoDigit: string; // 'yy'
    YearThreeDigit: string; // 'yyy'
    YearFourDigit: string; // 'yyyy'
    YearMinimumFiveDigit: string; // 'yyyyy'

    // Local Week-Numbering Year
    LocalWeekYear: string;
    LocalWeekYearOrdinal: string;
    LocalWeekYearTwoDigit: string;
    LocalWeekYearThreeDigit: string;
    LocalWeekYearFourDigit: string;
    LocalWeekYearMinimumFiveDigit: string;

    // ISO Week-Numbering Year
    ISOWeekYear: string;
    ISOWeekYearTwoDigit: string;
    ISOWeekYearThreeDigit: string;
    ISOWeekYearFourDigit: string;
    ISOWeekYearMinimumFiveDigit: string;

    // Extended Year
    ExtendedYear: string;
    ExtendedYearTwoDigit: string;
    ExtendedYearThreeDigit: string;
    ExtendedYearFourDigit: string;
    ExtendedYearMinimumFiveDigit: string;

    // Quarter (Formatting)
    Quarter: string;
    QuarterOrdinal: string;
    QuarterTwoDigit: string;
    QuarterAbbreviated: string;
    QuarterFull: string;
    QuarterNarrow: string;

    // Quarter (Stand-Alone)
    QuarterStandAlone: string;
    QuarterStandAloneOrdinal: string;
    QuarterStandAloneTwoDigit: string;
    QuarterStandAloneAbbreviated: string;
    QuarterStandAloneFull: string;
    QuarterStandAloneNarrow: string;

    // Month (Formatting)
    Month: string;
    MonthOrdinal: string;
    MonthTwoDigit: string;
    MonthAbbreviated: string;
    MonthFull: string;
    MonthNarrow: string;

    // Month (Stand-Alone)
    MonthStandAlone: string;
    MonthStandAloneOrdinal: string;
    MonthStandAloneTwoDigit: string;
    MonthStandAloneAbbreviated: string;
    MonthStandAloneFull: string;
    MonthStandAloneNarrow: string;

    // Local Week of Year
    LocalWeekOfYear: string;
    LocalWeekOfYearOrdinal: string;
    LocalWeekOfYearTwoDigit: string;

    // ISO Week of Year
    ISOWeekOfYear: string;
    ISOWeekOfYearOrdinal: string;
    ISOWeekOfYearTwoDigit: string;

    // Day of Month
    DayOfMonth: string;
    DayOfMonthOrdinal: string;
    DayOfMonthTwoDigit: string;

    // Day of Year
    DayOfYear: string;
    DayOfYearOrdinal: string;
    DayOfYearTwoDigit: string;
    DayOfYearThreeDigit: string;
    DayOfYearAtLeastFourDigit: string;

    // Day of Week (Formatting)
    DayOfWeekAbbreviated: string;
    DayOfWeekFull: string;
    DayOfWeekNarrow: string;
    DayOfWeekShort: string;

    // ISO Day of Week (Formatting)
    ISODayOfWeek: string;
    ISODayOfWeekOrdinal: string;
    ISODayOfWeekTwoDigit: string;
    ISODayOfWeekAbbreviated: string;
    ISODayOfWeekFull: string;
    ISODayOfWeekNarrow: string;
    ISODayOfWeekShort: string;

    // Local Day of Week (Formatting)
    LocalDayOfWeek: string;
    LocalDayOfWeekOrdinal: string;
    LocalDayOfWeekTwoDigit: string;
    LocalDayOfWeekAbbreviated: string;
    LocalDayOfWeekFull: string;
    LocalDayOfWeekNarrow: string;
    LocalDayOfWeekShort: string;

    // Local Day of Week (Stand-Alone)
    LocalDayOfWeekStandAlone: string;
    LocalDayOfWeekStandAloneOrdinal: string;
    LocalDayOfWeekStandAloneTwoDigit: string;
    LocalDayOfWeekStandAloneAbbreviated: string;
    LocalDayOfWeekStandAloneFull: string;
    LocalDayOfWeekStandAloneNarrow: string;
    LocalDayOfWeekStandAloneShort: string;

    // AM/PM
    AMPMUpper: string;
    AMPMLower: string;
    AMPMFull: string;
    AMPMNarrow: string;

    // AM/PM, Noon, Midnight
    FlexibleDayPeriodUpper: string;
    FlexibleDayPeriodLower: string;
    FlexibleDayPeriodFull: string;
    FlexibleDayPeriodNarrow: string;

    // Flexible Day Period
    FlexibleDayPeriod: string;
    FlexibleDayPeriodFullText: string;
    FlexibleDayPeriodNarrowText: string;

    // Hour
    Hour12: string;
    Hour12Ordinal: string;
    Hour12TwoDigit: string;

    // Hour [0-23]
    Hour24: string;
    Hour24Ordinal: string;
    Hour24TwoDigit: string;

    // Hour [0-11]
    Hour12ZeroBased: string;
    Hour12ZeroBasedOrdinal: string;
    Hour12ZeroBasedTwoDigit: string;

    // Hour [1-24]
    Hour24OneBased: string;
    Hour24OneBasedOrdinal: string;
    Hour24OneBasedTwoDigit: string;

    // Minute
    Minute: string;
    MinuteOrdinal: string;
    MinuteTwoDigit: string;

    // Second
    Second: string;
    SecondOrdinal: string;
    SecondTwoDigit: string;

    // Fraction of Second
    FractionOfSecond1: string;
    FractionOfSecond2: string;
    FractionOfSecond3: string;
    FractionOfSecondExtended: string;

    // Timezone (ISO-8601 with Z)
    TimezoneISOWithZShort: string;
    TimezoneISOWithZLong: string;

    // Timezone (ISO-8601 without Z)
    TimezoneISOWithoutZShort: string;
    TimezoneISOWithoutZLong: string;

    // Timezone (GMT)
    TimezoneGMTShort: string;
    TimezoneGMTLong: string;

    // Timezone (Specific Non-location)
    TimezoneSpecificShort: string;
    TimezoneSpecificLong: string;

    // Seconds Timestamp
    SecondsTimestamp: string;
    MillisecondsTimestamp: string;

    // Long Localized Date and Time
    LongLocalizedDate: string;
    LongLocalizedTime: string;
    CombinedDateAndTime: string;
}


export interface WeekYearFormatOptions {
    readonly LocalWeekYear: "Y";
    readonly LocalWeekYearOrdinal: "Yo";
    readonly LocalWeekYearTwoDigit: "YY";
    readonly LocalWeekYearThreeDigit: "YYY";
    readonly LocalWeekYearFourDigit: "YYYY";
    readonly LocalWeekYearMinimumFiveDigit: "YYYYY";
}
export interface WeekFormatOptions {
    readonly LocalWeekOfYear: "w";
    readonly LocalWeekOfYearOrdinal: "wo";
    readonly LocalWeekOfYearTwoDigit: "ww";
}


export interface DayFormatOptions {
    readonly DayOfMonth: "d";
    readonly DayOfMonthOrdinal: "do";
    readonly DayOfMonthTwoDigit: "dd";
}
export interface MonthFormatOptions {
    readonly Month: "M";
    readonly MonthOrdinal: "Mo";
    readonly MonthTwoDigit: "MM";
    readonly MonthAbbreviated: "MMM";
    readonly MonthFull: "MMMM";
    readonly MonthNarrow: "MMMMM";
}
export interface YearFormatOptions {
    readonly Year: "y";
    readonly YearOrdinal: "yo";
    readonly YearTwoDigit: "yy";
    readonly YearThreeDigit: "yyy";
    readonly YearFourDigit: "yyyy";
    readonly YearMinimumFiveDigit: "yyyyy";
}