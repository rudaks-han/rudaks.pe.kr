package nara.share.util.date;

import org.apache.commons.lang3.time.DateFormatUtils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;

public class DateUtil extends org.apache.commons.lang3.time.DateUtils {
    //

    public static String getCurrDate(String format)
    {
        return DateFormatUtils.format(new java.util.Date(), format);
    }

    public static String formatDateString(String dt, String currFormat, String changeFormat) throws Exception
    {
        return formatDateString(dt, currFormat, changeFormat, TimeZone.getDefault());
    }

    public static String formatDateString(String dt, String currFormat, String changeFormat, TimeZone timeZone) throws Exception
    {
        SimpleDateFormat formatter = new SimpleDateFormat(currFormat);
        formatter.setTimeZone(timeZone);
        java.util.Date uDate = null;
        StringBuffer sbError = null;
        try
        {
            uDate = formatter.parse(dt);
        }
        catch(ParseException e)
        {
            sbError = new StringBuffer().append("DateUtil.formatDateString - Mismatch Date format : ")
                            .append(dt).append("[").append(currFormat).append("]");
            throw new Exception(e);
        }
        finally
        {
            formatter = null;
            sbError = null;
        }
        return getStringFromDate(uDate, changeFormat);
    }

    public static String getStringFromDate(Date d, String format)
    {
        return DateFormatUtils.format(d, format);
    }
}
