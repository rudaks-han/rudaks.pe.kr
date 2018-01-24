package rudaks.blog.da.jpa.jpo;

import lombok.Data;
import org.hibernate.annotations.Type;
import org.springframework.beans.BeanUtils;
import rudaks.blog.domain.entity.Post;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity(name = "t_post")
public class PostJpo
{
    @Id
    private String id;
    private String category;
    private String username;
    private String email;
    private int viewCount;
    private int attachCount;
    private String ipaddress;
    private String deleteFlag;
    private String title;
    private int oldSeq;
    @Lob
    @Type(type = "org.hibernate.type.TextType")
    private String content;
    private String createdDate;
    private String updatedDate;

    public PostJpo() {}

    public PostJpo(Post post)
    {
        BeanUtils.copyProperties(post, this);
    }

    public void update(Post post)
    {
        BeanUtils.copyProperties(post, this);
    }

    public Post toDomain()
    {
        Post post = new Post(id);
        BeanUtils.copyProperties(this, post);
        return post;
    }

    public static List<Post> toDomains(List<PostJpo> postJpos)
    {
        /*return postJpos.stream()
                        .map(jpo -> jpo.toDomain())
                        .collect(Collectors.toList());*/

        List<Post> list = new ArrayList<Post>();

        for (PostJpo postJpo: postJpos)
        {
            list.add(postJpo.toDomain());
        }

        return list;
    }
}
