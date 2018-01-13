package rudaks.blog.domain.entity;

import lombok.Data;
import nara.share.domain.Entity;
import nara.share.domain.NameValue;
import nara.share.domain.NameValueList;
import nara.share.util.date.DateUtil;
import nara.share.util.json.JsonUtil;

@Data
public class AttachFile extends Entity
{
    private String postId;
    private int seq;
    private String fileName;
    private String filePath;
    private long fileSize;

    public AttachFile() {}

    public AttachFile(String id)
    {
        super(id);
    }

    public AttachFile(String postId, int seq, String fileName, String filePath, long fileSize)
    {
        this.postId = postId;
        this.seq = seq;
        this.fileName = fileName;
        this.filePath = filePath;
        this.fileSize = fileSize;
    }


    public String toJson()
    {
        return JsonUtil.toJson(this);
    }

    public static AttachFile fromJson(String json)
    {
        return JsonUtil.fromJson(json, AttachFile.class);
    }


}
