package rudaks.blog.domain.entity;

import lombok.Data;
import nara.share.domain.Entity;
import nara.share.util.date.DateUtil;
import nara.share.util.json.JsonUtil;

@Data
public class Category extends Entity
{
    private String category;
    private String name;
    private String deleteFlag;
    private String publicFlag;
    private long sortOrder;
    private String description;
    private String createdDate;
    private String updatedDate;

    public Category() {}

    public Category(String id)
    {
        super(id);
    }

    public Category(String category, String name, String description)
    {
        this.category = category;
        this.name = name;
        this.description = description;

        String currDate = DateUtil.getCurrDate("yyyyMMddHHmmss");
        this.createdDate = currDate;
        this.updatedDate = currDate;
    }

    public static Category getSample()
    {
        Category sample = new Category("notice", "뉴스 게시판", "뉴스 게시판입니다.");
        sample.setDeleteFlag("N");
        sample.setPublicFlag("Y");
        sample.setSortOrder(1);

        return sample;
    }

    public String toJson()
    {
        return JsonUtil.toJson(this);
    }

    public static Category fromJson(String json)
    {
        return JsonUtil.fromJson(json, Category.class);
    }

    public static void main(String [] args)
    {
        System.out.println(getSample());
    }
}
