package rudaks.blog.domain.spec.sdo;

import lombok.Data;
import nara.share.domain.Entity;
import nara.share.util.date.DateUtil;
import nara.share.util.json.JsonUtil;

@Data
public class GuestbookCdo extends Entity
{
    private String ref;
    private String username;
    private String email;
    private String ipaddress;
    private String deleteFlag;
    private String password;
    private String comment;
    private String createdDate;
    private String updatedDate;

    public GuestbookCdo() {}

    public GuestbookCdo(String id)
    {
        super(id);
    }

    public GuestbookCdo(String ref, String username, String email, String comment)
    {
        this.ref = ref;
        this.username = username;
        this.email = email;
        this.comment = comment;

        this.deleteFlag = "N";

        String currDate = DateUtil.getCurrDate("yyyyMMddHHmmss");
        this.createdDate = currDate;
        this.updatedDate = currDate;
    }

    public static GuestbookCdo getSample()
    {
        GuestbookCdo sample = new GuestbookCdo("1", "rudaks", "rudaks94@gmail.com", "코멘트 남깁니다.");
        sample.setIpaddress("127.0.0.1");
        sample.setPassword("1234");

        return sample;
    }

    public String toJson()
    {
        return JsonUtil.toJson(this);
    }

    public static GuestbookCdo fromJson(String json)
    {
        return JsonUtil.fromJson(json, GuestbookCdo.class);
    }

    public static void main(String [] args)
    {
        System.out.println(getSample());
    }
}
