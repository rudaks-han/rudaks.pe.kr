package rudaks.blog.domain.spec.sdo;

import lombok.Data;
import nara.share.domain.Entity;
import nara.share.util.json.JsonUtil;

@Data
public class AttachFileCdo extends Entity
{
    private String postId;
    private int seq;
    private String fileName;
    private String filePath;
    private long fileSize;

    public AttachFileCdo() {}

    public AttachFileCdo(String id)
    {
        super(id);
    }

    public AttachFileCdo(String postId, int seq, String fileName, String filePath, long fileSize)
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

    public static AttachFileCdo fromJson(String json)
    {
        return JsonUtil.fromJson(json, AttachFileCdo.class);
    }


}
