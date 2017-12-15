package rudaks.blog.domain.entity;

import lombok.Data;
import nara.share.domain.Entity;
import nara.share.domain.NameValue;
import nara.share.domain.NameValueList;
import nara.share.util.date.DateUtil;
import nara.share.util.json.JsonUtil;

@Data
public class Guestbook extends Entity
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

    public Guestbook() {}

    public Guestbook(String id)
    {
        super(id);
    }

    public Guestbook(String ref, String username, String email, String comment)
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

    public void setValues(NameValueList nameValues)
    {
        for (NameValue nameValue : nameValues.getList())
        {
            String value = nameValue.getValue();
            switch (nameValue.getName())
            {
                case "username":
                    this.username = value;
                    break;
                case "email":
                    this.email = value;
                    break;
                case "comment":
                    this.comment = value;
                    break;
            }
        }
    }

    public static Guestbook getSample()
    {
        Guestbook sample = new Guestbook("1", "rudaks", "rudaks94@gmail.com", "코멘트 남깁니다.");
        sample.setIpaddress("127.0.0.1");
        sample.setPassword("1234");

        return sample;
    }

    public String toJson()
    {
        return JsonUtil.toJson(this);
    }

    public static Guestbook fromJson(String json)
    {
        return JsonUtil.fromJson(json, Guestbook.class);
    }

    public static void main(String [] args)
    {
        System.out.println(getSample());
    }
}
