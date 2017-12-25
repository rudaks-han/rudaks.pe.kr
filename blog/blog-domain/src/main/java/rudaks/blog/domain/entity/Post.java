package rudaks.blog.domain.entity;

import lombok.Data;
import nara.share.domain.Entity;
import nara.share.domain.NameValue;
import nara.share.domain.NameValueList;
import nara.share.util.date.DateUtil;
import nara.share.util.json.JsonUtil;

@Data
public class Post extends Entity
{
    private String category;
    private String username;
    private String email;
    private int viewCount;
    private int attachCount;
    private String ipaddress;
    private String deleteFlag;
    private String title;
    private int oldSeq;
    private String content;
    private String createdDate;
    private String updatedDate;

    public Post() {}

    public Post(String id)
    {
        super(id);
    }

    public Post(String category, String username, String email, String title, String content)
    {
        this.category = category;
        this.username = username;
        this.email = email;
        this.title = title;
        this.content = content;
        this.viewCount = 0;
        this.attachCount = 0;
        this.deleteFlag = "N";
        this.oldSeq = 0;

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
                case "viewCount":
                    this.viewCount = Integer.parseInt(value);
                    break;
                case "title":
                    this.title = value;
                    break;
                case "content":
                    this.content = value;
                    break;
            }
        }
    }

    public static Post getSample()
    {
        Category category = Category.getSample();
        Post sample = new Post(category.getCategory(), "rudaks", "rudaks@gmail.com", "블로그 제목", "블로그 내용입니다.");
        sample.setIpaddress("211.63.24.124");

        return sample;
    }

    public String toJson()
    {
        return JsonUtil.toJson(this);
    }

    public static Post fromJson(String json)
    {
        return JsonUtil.fromJson(json, Post.class);
    }

    public static void main(String [] args)
    {
        System.out.println(getSample());
    }
}
