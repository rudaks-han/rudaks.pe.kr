package rudaks.blog.domain.spec.sdo;

import lombok.Data;
import nara.share.domain.annote.Optional;
import nara.share.util.date.DateUtil;
import nara.share.util.json.JsonUtil;
import rudaks.blog.domain.entity.Category;
import rudaks.blog.domain.entity.Post;

import java.util.List;

@Data
public class PostCdo
{
    private String category;
    private String username;
    private String email;
    private int viewCount;
    private int attachCount;
    private String ipaddress;
    private String deleteFlag;
    private String title;
    @Optional
    private int oldSeq;
    private String content;
    private String createdDate;
    private String updatedDate;

    private List<String> filePath;
    private List<String> fileName;
    private List<Long> fileSize;

    public PostCdo() {}

    public PostCdo(String category, String username, String email, String title, String content)
    {
        this.category = category;
        this.username = username;
        this.email = email;
        this.title = title;
        this.content = content;

        this.viewCount = 0;
        this.attachCount = 0;
        this.deleteFlag = "N";

        String currDate = DateUtil.getCurrDate("yyyyMMddHHmmss");
        this.createdDate = currDate;
        this.updatedDate = currDate;
    }

    public static PostCdo getSample()
    {
        Category category = Category.getSample();
        PostCdo sample = new PostCdo(category.getCategory(), "rudaks", "rudaks@gmail.com", "블로그 제목", "블로그 내용입니다.");
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

    public static void main(String[] args)
    {
        //
        System.out.println(getSample());
    }
}
