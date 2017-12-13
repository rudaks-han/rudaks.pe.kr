package nara.share.util.date;

import org.apache.commons.lang3.time.DateFormatUtils;

public class DateUtil extends org.apache.commons.lang3.time.DateUtils {
    //

    public static String getCurrDate(String format)
    {
        return DateFormatUtils.format(new java.util.Date(), format);
    }
}
