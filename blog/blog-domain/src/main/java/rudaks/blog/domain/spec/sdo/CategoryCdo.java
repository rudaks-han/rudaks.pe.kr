package rudaks.blog.domain.spec.sdo;

import lombok.Data;
import nara.share.domain.Entity;
import nara.share.util.date.DateUtil;
import nara.share.util.json.JsonUtil;

@Data
public class CategoryCdo
{
    private String category;
    private String name;
    private String deleteFlag;
    private String publicFlag;
    private int sortOrder;
    private String description;
    private String createdDate;
    private String updatedDate;

    public CategoryCdo() {}

    public CategoryCdo(String category, String name, String description)
    {
        this.category = category;
        this.name = name;
        this.description = description;

        String currDate = DateUtil.getCurrDate("yyyyMMddHHmmss");
        this.createdDate = currDate;
        this.updatedDate = currDate;
    }

    public static CategoryCdo getSample()
    {
        CategoryCdo sample = new CategoryCdo("notice", "뉴스 게시판", "뉴스 게시판입니다.");
        sample.setDeleteFlag("N");
        sample.setPublicFlag("Y");
        sample.setSortOrder(1);

        return sample;
    }

    public String toJson()
    {
        return JsonUtil.toJson(this);
    }

    public static CategoryCdo fromJson(String json)
    {
        return JsonUtil.fromJson(json, CategoryCdo.class);
    }

    public static void main(String [] args)
    {
        System.out.println(getSample());
    }
}
